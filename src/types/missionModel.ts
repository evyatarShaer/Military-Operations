export interface MissionModel {
  _id?: string;
  name: string;
  status: "Pending" | "Completed" | "In Progress";
  priority: "Low" | "High" | "Medium";
  description: string;
}
