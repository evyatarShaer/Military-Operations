export interface MissionModel {
  id_?: string;
  name: string;
  status: Status;
  priority: Priority;
  description: string;
}

enum Status {
  Pending = "Pending",
  InProgress = "In Progress",
  Completed = "Completed",
}

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
