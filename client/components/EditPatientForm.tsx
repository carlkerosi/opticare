import { PatientData } from "@/services/patientService";
import { X, Save, Plus } from "lucide-react";

interface EditPatientFormProps {
  formData: PatientData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onHistoryChange: (
    field: keyof Required<PatientData>["patientHistory"],
    value: string,
  ) => void;
  onSave: () => void;
  onCancel: () => void;
  isLoading: boolean;
}

export function EditPatientForm({
  formData,
  onChange,
  onHistoryChange,
  onSave,
  onCancel,
  isLoading,
}: EditPatientFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Edit Patient Record</h2>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={isLoading}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent"></div>
            ) : (
              <Save size={18} />
            )}
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground border-bottom pb-2">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-1">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-foreground mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">Insurance</label>
              <input
                type="text"
                name="insurance"
                value={formData.insurance}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
          </div>
        </div>

        {/* Prescription Right Eye */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground border-bottom pb-2">Right Eye (OD)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Sphere (SPH)</label>
              <input
                type="text"
                name="rightSphere"
                value={formData.rightSphere}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Cylinder (CYL)</label>
              <input
                type="text"
                name="rightCylinder"
                value={formData.rightCylinder}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Axis</label>
              <input
                type="text"
                name="rightAxis"
                value={formData.rightAxis}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Add</label>
              <input
                type="text"
                name="rightAdd"
                value={formData.rightAdd}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">PD</label>
              <input
                type="text"
                name="rightPD"
                value={formData.rightPD}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
          </div>
        </div>

        {/* Prescription Left Eye */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground border-bottom pb-2">Left Eye (OS)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Sphere (SPH)</label>
              <input
                type="text"
                name="leftSphere"
                value={formData.leftSphere}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Cylinder (CYL)</label>
              <input
                type="text"
                name="leftCylinder"
                value={formData.leftCylinder}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Axis</label>
              <input
                type="text"
                name="leftAxis"
                value={formData.leftAxis}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Add</label>
              <input
                type="text"
                name="leftAdd"
                value={formData.leftAdd}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">PD</label>
              <input
                type="text"
                name="leftPD"
                value={formData.leftPD}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              />
            </div>
          </div>
        </div>

        {/* Patient History */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground border-bottom pb-2">Patient History</h3>
          <div className="space-y-4">
            {[
              { label: "PM hx (Past Medical History)", field: "pmHx" as const },
              { label: "PO hx (Past Ocular History)", field: "poHx" as const },
              { label: "VDU (Visual Display Unit)", field: "vdu" as const },
              { label: "Strabismus (Eye Alignment Issue)", field: "strabismus" as const },
              { label: "NPC (Near Point of Convergence)", field: "npc" as const },
            ].map((item) => (
              <div key={item.field}>
                <label className="block text-sm font-medium text-foreground mb-1">{item.label}</label>
                <textarea
                  value={formData.patientHistory?.[item.field] || ""}
                  onChange={(e) => onHistoryChange(item.field, e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                  rows={2}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Chief Complaint and Notes */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Chief Complaint</label>
              <textarea
                name="problem"
                value={formData.problem}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Clinical Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={onChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-3 pt-4 border-t border-border">
        <button
          onClick={onCancel}
          className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          disabled={isLoading}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent"></div>
          ) : (
            <Save size={20} />
          )}
          Save All Changes
        </button>
      </div>
    </div>
  );
}
