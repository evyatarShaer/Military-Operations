import styles from "./mission.module.css";

interface MissionProps {
  id: string| undefined;
  name: string;
  status: string;
  priority: string;
  description: string;
  deleteMission: (id: string) => Promise<void>;
}

const Mission = ({ id, name, status, priority, description, deleteMission }: MissionProps) => {
  const handleDelete = async () => {
    if (id)
    {
      await deleteMission(id);
    }
  };

  return (
    <div className={styles.missionCard} id={status === 'Pending'? styles.Pending : status === 'In Progress'? styles.inProgress : status === 'Completed'? styles.complated : ''}>
      <div className={styles.pDiv}>
        <p className={styles.name}>Name:  {name}</p>
        <p>Status:  {status}</p>
        <p>Priority:  {priority}</p>
        <p>Description:  {description}</p>
      </div>
      <div className={styles.buttonsDiv}>
        <button id={styles.deleteButton} onClick={handleDelete}>delete</button>
        <button id={styles.editButton}>Progress</button>
      </div>
    </div>
  );
};

export default Mission;
