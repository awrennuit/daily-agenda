import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import LoginPage from '../components/LoginPage';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <LoginPage />
      </IonContent>
    </IonPage>
  );
};

export default Login;