import React from 'react';
import './PageNotFound.css';
import { IonHeader } from '@ionic/react';

const PageNotFound: React.FC = () => {

  return (
    <div className="not-found-container">
      <IonHeader className="not-found-line-first">You don't belong here.</IonHeader>
      <IonHeader className="not-found-line">You</IonHeader>
      <IonHeader className="not-found-line">belong</IonHeader>
      <IonHeader style={{fontSize:"2em"}}>
        <a href="/home">here</a>
      </IonHeader>
    </div>
  );
};

export default PageNotFound;