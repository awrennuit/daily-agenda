import React, { useEffect, useState } from 'react';
import './MainList.css';
import { IonList, IonItem, IonIcon, IonCheckbox, IonLabel, IonButton, IonInput } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { getCurrentUser, db } from '../firebase';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const MainList: React.FC = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [uid, setUid] = useState('');

  useEffect(()=>{
    getCurrentUser().then((user: any) => {      
      if(!user){
        history.push('/login');
      }
      else {
        setUid(user.uid);
      }
    });
  }, [history]);

  useEffect(()=>{
    getCurrentUser().then((user: any) => {
      db.ref(`users`).child(user.uid).on('value', snap => {
        snap.forEach(child => {
          setTaskList(child.val()); // ...spread doesn't work with Typescript?
        });
      });
    });
    
  }, [dispatch]);

  const deleteTask = (name: String) => {
    const popup = window.confirm(`Permanently delete ${name}?`);
    if(popup){
      // let key = ????; // How to call random ID to delete correct data?
      // db.ref(`/users/${uid}/${key}`).remove();
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    db.ref(`/users/${uid}`).push().set({
      name: task,
      completed: false
    });
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
          {Object.values(taskList).map((task, i) => // How to map when random ID is also present? Mapping taskList gives error since useEffect hasn't set the state yet?
          <span key={i}>
            {task !== false && task !== true ?
              <IonItem key={i}>
                <IonCheckbox /> {/* Cannot differentiate true from false to render checked */}
                <IonLabel className="list-task">{task}</IonLabel>
                <IonButton color="danger" onClick={()=>deleteTask(task)}>
                  <IonIcon icon={trash}></IonIcon>
                </IonButton>
              </IonItem>
            :
              ''
            }
            </span>
          )}
        </IonList>
      </div>
    </div>
  );
};

export default MainList;