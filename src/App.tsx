import { useState, useEffect } from "react";
import { MissionModel } from "./types/missionModel";
import { fetchMissions, deleteMission } from "./services/api";
import styles from "./App.module.css";
import Mission from "./components/mission/Mission";
import Create from "./components/create/Create";

function App() {
  const [missions, setMissions] = useState<MissionModel[]>([]);

  const loadMissions = async () => {
    try {
      const fetchedMissions = await fetchMissions();
      setMissions(fetchedMissions);
    } catch {
      throw new Error("Failed to load missions. Please try again.");
    }
  };

  useEffect(() => {
    loadMissions();
  }, []); 

  const handleMissionCreated = () => {
    loadMissions();
  };

  const handleDeleteMission = async (id: string) => {
    try {
      await deleteMission(id);
      setMissions((prevMission) =>
        prevMission.filter((mission) => mission._id !== id)
      );
    } catch {
      throw new Error("Failed to delete mission, (from handele)");
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Military Operations Dashboard</h1>
      <div className={styles.createArea}>
        <Create onMissionCreated={handleMissionCreated}/>
      </div>
      <div>
        <h3 className={styles.h3}>Missions</h3>
      </div>
      <div className={styles.missionsArea}>
        {missions.map((mission) => (
          <Mission
            key={mission._id}
            id={mission._id}
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
