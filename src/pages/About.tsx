import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './About.css';
import Information from '../components/Information';

const About: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <Information />
      </IonContent>
    </IonPage>
  );
};

export default About;