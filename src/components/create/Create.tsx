import styles from "./create.module.css";
import { createMission } from "../../services/api";
import { useState } from "react";

interface CreateProps {
  onMissionCreated: () => void;
}

const Create = ({ onMissionCreated }: CreateProps) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [description, setDescription] = useState("");

  const handleCreateMission = async () => {
    try {
      if (
        (!name && !description && status === "Pending" ||
        status === "Completed" ||
        status === "In Progress" && priority === "Low" ||
        priority === "High" ||
        priority === "Medium")
      ) {
        await createMission(name, status, priority, description);
        console.log("Mission created successfully");
        onMissionCreated();
      }
      else 
      {
        alert("Invalid mission data, status need to be Pending, or In Progress, or Completed, priority need to be Low, or Medium, or High");
        return;
      }
    } catch (error) {
      console.error("Failed to create mission", error);
    }
  };

  return (
    <div className={styles.createCard}>
      <input
        type="text"
        placeholder="Enter your name"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the status"
        className={styles.input}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter priority"
        className={styles.input}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        className={styles.input}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={handleCreateMission}>
        Add Mission
      </button>
    </div>
  );
};

export default Create;
