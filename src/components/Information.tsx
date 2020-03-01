import React from 'react';
import './Information.css';
import { IonText } from '@ionic/react';

const Information: React.FC = () => {

  return (
    <div className="about-container">
      <IonText>
        This app is designed to help you keep track of daily chores and tasks. Add a few things at the start 
        of your day, check them off as you complete them, or delete them entirely. The choice is yours.
      </IonText>
    </div>
  );
};

export default Information;