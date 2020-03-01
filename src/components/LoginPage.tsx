import React from 'react';
import { IonCard, IonCardHeader, IonInput, IonButton } from '@ionic/react';

const LoginPage: React.FC = () => {

  return(
    <div className="container">
      <IonCard>
        <IonCardHeader>Daily Agenda</IonCardHeader>
        <IonInput></IonInput>
        <IonInput></IonInput>
        <IonButton>Login</IonButton>
        <IonButton>register</IonButton>
      </IonCard>
    </div>
  );
};

export default LoginPage;