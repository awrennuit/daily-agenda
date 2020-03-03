import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import PageNotFound from '../components/PageNotFound';

const NotFound: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <PageNotFound />
      </IonContent>
    </IonPage>
  );
};

export default NotFound;