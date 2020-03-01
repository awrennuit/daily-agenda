import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import RegistrationPage from '../components/RegistrationPage';

const Registration: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <RegistrationPage />
      </IonContent>
    </IonPage>
  );
};

export default Registration;