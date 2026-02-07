import { useState } from "react";
import { Plus, X } from "lucide-react";
import { HistoryRecord } from "@/services/patientService";

interface AddHistoryRecordProps {
  onAddRecord: (record: HistoryRecord) => void;
  spaces: string[];
}

export function AddHistoryRecord({
  onAddRecord,
  spaces,
}: AddHistoryRecordProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    space: "",
    record: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.space || !formData.record.trim()) {
      return;
    }

    const newRecord: HistoryRecord = {
      id: `record-${Date.now()}`,
      space: formData.space,
      record: formData.record.trim(),
      date: new Date().toISOString().split("T")[0],
      notes: formData.notes.trim() || undefined,
      createdAt: new Date(),
    };

    onAddRecord(newRecord);
    setFormData({ space: "", record: "", notes: "" });
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
        >
          <Plus size={18} />
          Add Record
        </button>
      ) : (
        <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-foreground">Add New Record</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Space / Location *
              </label>
              <select
                value={formData.space}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, space: e.target.value }))
                }
                required
                className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              >
                <option value="">Select a space...</option>
                {spaces.map((space) => (
                  <option key={space} value={space}>
                    {space}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Record / Findings *
              </label>
              <textarea
                value={formData.record}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, record: e.target.value }))
                }
                required
                placeholder="Enter your findings or observations..."
                className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Additional Notes
              </label>
              <input
                type="text"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, notes: e.target.value }))
                }
                placeholder="Optional notes..."
                className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors font-medium"
              >
                Add Record
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
