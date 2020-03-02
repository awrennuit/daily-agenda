import React, { useEffect } from 'react';
import { Redirect, Route, Link, withRouter, useHistory } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonTabs, IonTabButton, IonTabBar, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { informationCircle, home, logOut } from 'ionicons/icons';
import { getCurrentUser } from './firebase';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registration from './pages/Registration';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const history = useHistory();

  useEffect(()=>{
    getCurrentUser().then(user => {
      if(user){
        history.push('/home');
      }
      else {
        history.push('/login');
      }
    });
  }, [history]);

  const handleLogout = () => {
    // Unset user
  }

  return(
    <IonApp>
      <IonReactRouter>
        <Link to="/home" style={{textDecoration:"none"}}>
          <IonHeader>
            <IonToolbar className="header">
              <IonTitle style={{fontSize:"2em"}}>Daily Agenda</IonTitle>
            </IonToolbar>
          </IonHeader>
        </Link>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" render={()=><Redirect to="/home" />} />
            <Route exact path="/:tab(home)" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/:tab(about)" component={About} />
            <Route path="**" component={NotFound} />
          </IonRouterOutlet>
          <IonTabBar color="tertiary" selectedTab="primary" slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="about" href="/about">
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
            <IonTabButton tab="logout" onClick={handleLogout}>
              <IonIcon icon={logOut} />
              <IonLabel>Logout</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default withRouter(App);