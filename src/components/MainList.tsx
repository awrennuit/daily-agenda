import React, { useEffect, useState } from 'react';
import './MainList.css';
import { IonList, IonItem, IonIcon, IonCheckbox, IonLabel, IonButton, IonInput } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { getCurrentUser, db } from '../firebase';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const MainList: React.FC = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    getCurrentUser().then((user: any) => {      
      if(!user){
        history.push('/login');
      }
    });
  }, [history]);

  useEffect(()=>{
    db.ref().child('tasks').on('value', snap => {
      setTaskList(snap.val());
    });
  }, [dispatch]);

  const deleteTask = (name: String) => {
    const popup = window.confirm(`Permanently delete ${name}?`);
    if(popup){
      // remove from Firebase
    }
  }

  const handleSubmit = () => {
    // dispatch task to Firebase
  }

  return (
    <div className="container">
      <div className="list-container">
        <form className="list-form" onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Add task</IonLabel>
            <IonInput value={task} onIonChange={(e: any)=>setTask(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonButton type="submit">Add</IonButton>
          </IonItem>
        </form>
        <IonList>
          {Object.keys(taskList).map((task, i) =>
            <IonItem key={i}>
              <IonCheckbox></IonCheckbox>
              <IonLabel className="list-task">{task}</IonLabel>
              <IonButton color="danger" onClick={()=>deleteTask(task)}>
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </IonItem>
          )}
        </IonList>
      </div>
    </div>
  );
};

export default MainList;