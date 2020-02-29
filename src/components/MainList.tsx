import React from 'react';
import './MainList.css';
import { IonList, IonItem, IonIcon, IonCheckbox, IonLabel } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

interface ContainerProps { }

const MainList: React.FC<ContainerProps> = () => {

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

  return (
    <div className="container">
      <div className="list-container">
        <IonList>
          {list.map(task=>
            <IonItem key={task.id}>
              <IonCheckbox></IonCheckbox>
              <IonLabel className="list-task">{task.task}</IonLabel>
              <IonIcon slot="end" icon={trashOutline}></IonIcon>
            </IonItem>
          )}
        </IonList>
      </div>
    </div>
  );
};

export default MainList;