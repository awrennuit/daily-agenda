import React, { useEffect, useState } from 'react';
import './MainList.css';
import { IonList, IonItem, IonIcon, IonCheckbox, IonLabel, IonButton, IonInput } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { getCurrentUser } from '../firebase';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const MainList: React.FC = () => {

  const history = useHistory();
  // const user = useSelector(state => state.userReducer);
  const [task, setTask] = useState('');

  const list = [
    {
      id: 1,
      task: 'vacuum'
    },
    {
      id: 2,
      task: 'wash dishes'
    },
    {
      id: 3,
      task: 'buy groceries'
    },
    {
      id: 4,
      task: 'pet chores'
    },
    {
      id: 5,
      task: 'clean bathroom'
    },
    {
      id: 6,
      task: 'learn Ionic & Firebase'
    }   
  ];

  useEffect(()=>{
    getCurrentUser().then((user: any) => {      
      if(!user){
        history.push('/login');
      }
    });
  }, [history]);

  const deleteTask = (name: String) => {
    const popup = window.confirm(`Permanently delete ${name}?`);
    if(popup){

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
          {list.map(task=>
            <IonItem key={task.id}>
              <IonCheckbox></IonCheckbox>
              <IonLabel className="list-task">{task.task}</IonLabel>
              <IonButton color="danger" onClick={()=>deleteTask(task.task)}>
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