import { RequestHandler } from "express";
import {
  collection,
  addDoc,
  getFirestore,
} from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";

// Initialize Firebase on server (only once)
let db: any;

function getFirebaseDb() {
  if (!db) {
    // Check if Firebase app is already initialized
    const existingApp = getApps()[0];
    const app = existingApp || initializeApp({
      apiKey: process.env.VITE_FIREBASE_API_KEY,
      authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VITE_FIREBASE_APP_ID,
    });
    db = getFirestore(app);
  }
  return db;
}

export interface CreatePatientRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  sex: string;
  dateOfBirth: string;
  address: string;
  insurance: string;
  problem: string;
  rightSphere: string;
  rightCylinder: string;
  rightAxis: string;
  rightAdd: string;
  rightPD: string;
  leftSphere: string;
  leftCylinder: string;
  leftAxis: string;
  leftAdd: string;
  leftPD: string;
  notes: string;
}

export interface CreatePatientResponse {
  id: string;
  message: string;
}

export const handleCreatePatient: RequestHandler = async (req, res) => {
  try {
    const patientData: CreatePatientRequest = req.body;

    // Basic validation
    if (!patientData.firstName || !patientData.lastName) {
      res.status(400).json({ error: "First name and last name are required" });
      return;
    }

    const db = getFirebaseDb();
    const docRef = await addDoc(collection(db, "patients"), {
      ...patientData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    const response: CreatePatientResponse = {
      id: docRef.id,
      message: "Patient created successfully",
    };

    res.json(response);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Failed to create patient",
    });
  }
};
