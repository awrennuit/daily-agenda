import React from 'react';
import './PageNotFound.css';
import { IonText } from '@ionic/react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {

  return (
    <div className="not-found-container">
      <IonText className="not-txt not-found-line-first">You don't belong here.</IonText>
      <div style={{marginTop:"20px"}}>
        <IonText className="not-txt not-found-line">You</IonText>
      </div>
      <div>
        <IonText className="not-txt not-found-line">belong</IonText>
      </div>
      <div>
        <IonText style={{fontSize:"2em"}}>
          <Link to="/home">here</Link>
        </IonText>
      </div>
    </div>
  );
};

export default PageNotFound;