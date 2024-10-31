import axios from "axios";
import { MissionModel } from "../types/missionModel";

const BASE_URL = "https://reactexambackend.onrender.com/missions/:8627496";

export const fetchMissions = async (): Promise<MissionModel[]> => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch {
    throw new Error("Failed to fetch missions");
  }
};

export const createMission = async ( name: string, status: string, priority: string, description: string): Promise<void> => {
  try {
    await axios.post(BASE_URL, {
      name: name,
      status: status,
      priority: priority,
      description: description,
    });
    console.log("Mission created successfully");
  } catch {
    throw new Error("Failed to create mission");
  }
};

export const updateMission = async (mission: MissionModel): Promise<void> => {
  try {
    await axios.put(`${BASE_URL}/:${mission._id}`, {
      name: mission.name,
      status: mission.status,
      priority: mission.priority,
      description: mission.description,
    });
    console.log(`id: ${mission._id} updated`);
  } catch {
    throw new Error("Failed to update mission");
  }
};

export const deleteMission = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    console.log(`id: ${id} deleted`);
  } catch {
    throw new Error("Failed to delete mission");
  }
};
