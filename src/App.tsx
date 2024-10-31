import { useState, useEffect } from "react";
import { MissionModel } from "./types/missionModel";
import { fetchMissions, deleteMission } from "./services/api";
import styles from "./App.module.css";
import Mission from "./components/mission/Mission";
import Create from "./components/create/Create";

function App() {
  const [missions, setMissions] = useState<MissionModel[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchMissions();
        setMissions(fetchedTodos);
      } catch {
        throw new Error("Failed to load todos. Please try again.");
      }
    };
    loadTodos();
  }, []);

  const handleDeleteMission = async (id: string) => {
    try {
      await deleteMission(id);
      setMissions((prevMission) =>
        prevMission.filter((todo) => todo.id_ !== id)
      );
    } catch {
      throw new Error("Failed to delete mission, (from handele)");
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Military Operations Dashboard</h1>
      <div className={styles.createArea}>
        <Create />
      </div>
      <div>
        <h3 className={styles.h3}>Missions</h3>
      </div>
      <div className={styles.missionsArea}>
        {missions.map((mission) => (
          <Mission
            key={mission.id_}
            id={mission.id_}
            name={mission.name}
            status={mission.status}
            priority={mission.priority}
            description={mission.description}
            deleteMission={handleDeleteMission}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
