import { Trash2, Calendar, MapPin } from "lucide-react";
import { HistoryRecord } from "@/services/patientService";

interface HistoryRecordsListProps {
  records: HistoryRecord[];
  onDeleteRecord: (recordId: string) => void;
}

export function HistoryRecordsList({
  records,
  onDeleteRecord,
}: HistoryRecordsListProps) {
  if (!records || records.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No records added yet</p>
        <p className="text-sm">Add a record to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {records
        .sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
        .map((record) => (
          <div
            key={record.id}
            className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary font-medium text-sm rounded-full flex items-center gap-1">
                    <MapPin size={14} />
                    {record.space}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(record.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-foreground whitespace-pre-wrap">
                  {record.record}
                </p>
                {record.notes && (
                  <p className="text-sm text-muted-foreground italic">
                    Note: {record.notes}
                  </p>
                )}
              </div>
              <button
                onClick={() => onDeleteRecord(record.id)}
                className="text-muted-foreground hover:text-destructive transition-colors p-2 hover:bg-destructive/10 rounded-lg"
                title="Delete record"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
