import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonTabs, IonTabButton, IonTabBar, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { informationCircle, home } from 'ionicons/icons';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
import Login from './pages/Login';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Link to="/home" style={{textDecoration:"none"}}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Daily Agenda</IonTitle>
          </IonToolbar>
        </IonHeader>
      </Link>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/:tab(home)" component={Home} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/:tab(about)" component={About} exact={true} />
          <Route path="**" component={NotFound} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;