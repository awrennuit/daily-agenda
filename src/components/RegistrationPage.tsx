import React from 'react';
import { IonCard, IonCardHeader, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import { withRouter } from 'react-router';
import './RegistrationPage.css';

const RegistrationPage: React.FC<any> = props => {

  return(
    <div className="reg-container">
      <IonCard>
        <div className="reg-card-container">
          <IonCardHeader style={{fontSize:"1.5em",color:"#FECC27"}}>Log In</IonCardHeader>
          <form>
            <div className="reg-input">
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput value="username"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput value="username"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" value="password"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput type="password" value="password"></IonInput>
              </IonItem>
            </div>
            <IonButton style={{margin:"30px"}}>Submit</IonButton>
          </form>
          <div>
            <IonButton 
              color="medium" 
              style={{marginBottom:"10px"}}
              onClick={()=>props.history.push('/login')}>back</IonButton>
          </div>
        </div>
      </IonCard>
    </div>
  );
};

export default withRouter(RegistrationPage);