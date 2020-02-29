import React from 'react';
import './MainList.css';
import { IonList, IonItem } from '@ionic/react';

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
              {task.task}
            </IonItem>
          )}
        </IonList>
      </div>
    </div>
  );
};

export default MainList;