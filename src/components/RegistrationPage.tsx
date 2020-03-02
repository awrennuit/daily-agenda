import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import { withRouter } from 'react-router';
import './RegistrationPage.css';
import { toast } from './toast';
import { registerUser } from '../firebase';

const RegistrationPage: React.FC<any> = props => {

  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register(e: any){
    e.preventDefault();
    if(password !== confirmPassword){
      return toast(`Passwords don't match!`);
    }
    else if(email.trim() === '' || password.trim() === ''){
      return toast(`Email and Password required.`);
    }
    const res = await registerUser(email, password);
    if(res){
      props.history.push('/home');
    }
  }

  return(
    <div className="reg-container">
      <IonCard>
        <div className="reg-card-container">
          <IonCardHeader style={{fontSize:"1.5em",color:"#FECC27"}}>Register</IonCardHeader>
          <form onSubmit={(e: any)=>register(e)}>
            <div className="reg-input">
              <IonItem>
                <IonLabel className="login-label" position="floating">Email</IonLabel>
                <IonInput value={email} onIonChange={(e: any)=>setEmail(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel className="login-label" position="floating">Password</IonLabel>
                <IonInput 
                  type="password" 
                  value={password} 
                  onIonChange={(e: any)=>setPassword(e.target.value)}
                />
              </IonItem>
              <IonItem>
                <IonLabel className="login-label" position="floating">Confirm Password</IonLabel>
                <IonInput 
                  type="password" 
                  value={confirmPassword} 
                  onIonChange={(e: any)=>setConfirmPassword(e.target.value)}
                />
              </IonItem>
            </div>
            <IonButton type="submit" style={{margin:"30px"}}>Submit</IonButton>
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