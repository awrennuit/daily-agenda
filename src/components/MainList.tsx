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
        // snap.forEach(child => {
        //   setTaskList(child.val()); // ...spread doesn't work with Typescript?
        // });
        setTaskList(snap.val());
      });
    });
    
  }, [dispatch]);

  const toggleTask = (completed: boolean) => {
      // db.ref(`/users/${uid}/${key}`).update(); // Do an update to toggle the boolean here
  }

  const deleteTask = (task: String) => {
    const popup = window.confirm(`Permanently delete ${task}?`);
    if(popup){
      db.ref(`/users/${uid}/${task}`).remove();
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    db.ref(`/users/${uid}/${task}`).set({
      name: task,
      completed: false
    });
    setTask('');
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
          {Object.keys(taskList).map((task: any, i) => // How to map when random ID is also present? Mapping taskList gives error since useEffect hasn't set the state yet?
          // <span key={i}>
          //   {task !== false && task !== true ?
              <IonItem key={i}>
                <IonCheckbox onChange={()=>toggleTask(task)} /> {/* Cannot differentiate true from false to render checked */}
                <IonLabel className="list-task">{task}</IonLabel>
                <IonButton color="danger" onClick={()=>deleteTask(task)}>
                  <IonIcon icon={trash}></IonIcon>
                </IonButton>
              </IonItem>
            // :
            //   ''
            // }
            // </span>
          )}
        </IonList>
      </div>
    </div>
  );
};

export default MainList;