import React, { useEffect } from 'react';
import './MainList.css';
import { IonList, IonItem, IonIcon, IonCheckbox, IonLabel, IonButton } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { getCurrentUser } from '../firebase';
import { useHistory } from 'react-router';

const MainList: React.FC = () => {

  const history = useHistory();

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

  return (
    <div className="container">
      <div className="list-container">
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