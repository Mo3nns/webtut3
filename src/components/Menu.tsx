import React from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import {
  bodyOutline,
  briefcaseOutline,
  homeOutline,
  logoHtml5,
  logoIonic,
  logoMicrosoft,
  logoPython,
  moon,
  pencilOutline,
  schoolOutline,
  tvOutline,
} from "ionicons/icons";
import "./Menu.css";

function Menu() {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonMenu contentId='main-content'>
      <IonHeader>
        <IonToolbar color='danger'>
          <IonTitle>WebbieTU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList className='ion-margin-top'>
          <IonItem>
            <IonIcon
              slot='start'
              icon={moon}
              className='component-icon component-icon-dark'
            />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot='end'
              name='darkMode'
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        <IonListHeader>
          <IonLabel>Content</IonLabel>
        </IonListHeader>
        <IonList>
          <IonItem routerLink='/home' routerDirection='back'>
            <IonIcon icon={homeOutline} slot='start'></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem routerLink='/videos' routerDirection='forward'>
            <IonIcon icon={tvOutline} slot='start'></IonIcon>
            <IonLabel>Videos</IonLabel>
          </IonItem>
        </IonList>

        <IonAccordionGroup>
          <IonAccordion value='first'>
            <IonItem slot='header'>
              <IonIcon icon={schoolOutline} slot='start'></IonIcon>
              <IonLabel>Tutorials</IonLabel>
            </IonItem>

            <div className='ion-padding' slot='content'>
              <a href='/python' style={{ textDecoration: "none"}}>
                <IonIcon icon={logoPython} slot='start'></IonIcon> Python
              </a>
            </div>
            <div className='ion-padding' slot='content'>
              <a href='Ionic' style={{ textDecoration: "none" }}>
                <IonIcon icon={logoIonic} slot='start'></IonIcon> Ionic
              </a>
            </div>
            <div className='ion-padding' slot='content'>
              <a href='Html' style={{ textDecoration: "none" }}>
                <IonIcon icon={logoHtml5} slot='start'></IonIcon> HTML
              </a>
            </div>
            <div className='ion-padding' slot='content'>
              <a href='Excel' style={{ textDecoration: "none" }}>
                <IonIcon icon={logoMicrosoft} slot='start'></IonIcon> Microsoft
                Excel
              </a>
            </div>
            <div className='ion-padding' slot='content'>
              <a href='Word' style={{ textDecoration: "none" }}>
                <IonIcon icon={logoMicrosoft} slot='start'></IonIcon> {"Microsoft Word"}
              </a>
            </div>
            <div className='ion-padding' slot='content'>
              <a href='Vba' style={{ textDecoration: "none" }}>
                <IonIcon icon={logoMicrosoft} slot='start'></IonIcon> VBA
              </a>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <IonList>
          <IonListHeader>
            <IonLabel>Other</IonLabel>
          </IonListHeader>
          <IonItem routerLink='/about' routerDirection='forward'>
            <IonIcon icon={bodyOutline} slot='start'></IonIcon>
            <IonLabel>About</IonLabel>
          </IonItem>
          <IonItem routerLink='/terms' routerDirection='forward'>
            <IonIcon icon={briefcaseOutline} slot='start'></IonIcon>
            <IonLabel>Terms of use</IonLabel>
          </IonItem>
          <IonItem routerLink='/privacypolicy' routerDirection='forward'>
            <IonIcon icon={pencilOutline} slot='start'></IonIcon>
            <IonLabel>Privacy Policy</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default Menu;
