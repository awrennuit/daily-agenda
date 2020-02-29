import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.css';
import MainList from '../components/MainList';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <MainList />
      </IonContent>
    </IonPage>
  );
};

export default Home;