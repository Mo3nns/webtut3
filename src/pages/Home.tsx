import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../theme/variables.css";
import "./Home.css";


function Home() {
  return (
    <>
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>WebbieT</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <h1 className="bold">Welcome to Home</h1>
            
          
        </IonContent>
      </IonPage>
    </>
  );
}
export default Home;
