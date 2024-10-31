import styles from './create.module.css'
// import { createMission } from '../../services/api'

const Create = () => {
  return (
    <>
    <div className={styles.createCard}>
      <input type="text" placeholder="Enter your name" className={styles.input} id='nameMission' value=''/>
      <input type="text" placeholder="Enter the status" className={styles.input} id=''/>
      <input type="text" placeholder="Enter priority" className={styles.input}/>
      <input type="text" placeholder="description" className={styles.input}/>
      <button type="submit" /*onClick={createMission()*/>Add Mission</button>
    </div>
    </>
  );
};

export default Create;
