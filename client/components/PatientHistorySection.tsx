import { useState, useEffect } from "react";
import { HistoryRecord } from "@/services/patientService";
import { AddHistoryRecord } from "./AddHistoryRecord";
import { HistoryRecordsList } from "./HistoryRecordsList";

interface PatientHistorySectionProps {
  records?: HistoryRecord[];
  onRecordsChange: (records: HistoryRecord[]) => void;
}

// Predefined list of spaces/rooms in an optician clinic
const PREDEFINED_SPACES = [
  "Consultation Room",
  "Testing Room",
  "Refraction Room",
  "Dispensary",
  "Waiting Area",
  "Examination Chair 1",
  "Examination Chair 2",
  "Vision Assessment Lab",
  "Fitting Room",
  "Other",
];

export function PatientHistorySection({
  records = [],
  onRecordsChange,
}: PatientHistorySectionProps) {
  const [historyRecords, setHistoryRecords] = useState<HistoryRecord[]>(records);

  // Sync local state with parent
  useEffect(() => {
    onRecordsChange(historyRecords);
  }, [historyRecords, onRecordsChange]);

  const handleAddRecord = (record: HistoryRecord) => {
    setHistoryRecords((prev) => [...prev, record]);
  };

  const handleDeleteRecord = (recordId: string) => {
    setHistoryRecords((prev) => prev.filter((r) => r.id !== recordId));
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
        <div className="bg-secondary/10 p-2 rounded-lg">
          <svg
            className="w-5 h-5 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        Patient History Records
      </h2>

      <div className="space-y-4">
        <AddHistoryRecord
          onAddRecord={handleAddRecord}
          spaces={PREDEFINED_SPACES}
        />

        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">
            Records ({historyRecords.length})
          </h3>
          <HistoryRecordsList
            records={historyRecords}
            onDeleteRecord={handleDeleteRecord}
          />
        </div>
      </div>
    </div>
  );
}
