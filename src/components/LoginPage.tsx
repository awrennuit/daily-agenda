import React from 'react';
import { IonCard, IonCardHeader, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import './LoginPage.css';

const LoginPage: React.FC = () => {

  return(
    <div className="login-container">
      <IonCard>
        <div className="login-card-container">
          <IonCardHeader style={{fontSize:"1.5em",color:"#FECC27"}}>Log In</IonCardHeader>
          <div className="login-input">
            <IonItem>
              <IonLabel position="floating">Username </IonLabel>
              <IonInput value="username"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password </IonLabel>
              <IonInput type="password" value="password"></IonInput>
            </IonItem>
          </div>
          <IonButton style={{margin:"30px"}}>Login</IonButton>
          <div>
            <IonButton color="medium" style={{marginBottom:"10px"}}>register</IonButton>
          </div>
        </div>
      </IonCard>
    </div>
  );
};

export default LoginPage;