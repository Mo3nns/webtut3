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

import "./Home.css";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Col from "../components/Segment";

function Videos() {
  // Create an array of objects with card titles and video URLs
  const videos = [
    {
      title: "Final fantasy 7 Lunar",
      url: "https://www.youtube.com/embed/W1cKP7rzUWY",
    },
    {
      title: "Crooken",
      url: "https://www.youtube.com/embed/W1cKP7rzUWY",
    },
    // Add more videos here
       {
      title: "Yellow mellow",
      url: "https://www.youtube.com/embed/W1cKP7rzUWY",
    },
    {
      title: "Final",
      url: "https://www.youtube.com/embed/W1cKP7rzUWY",
    },
    {
      title: "Terminal",
      url: "https://www.youtube.com/embed/W1cKP7rzUWY",
    },
    {
      title: "Monkey",
      url: "https://www.youtube.com/embed/W1cKP7rzUWY",
    },
  ];

  return (
    <>
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Videos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <Col/>
          <div className='ion-text-center'>
            
          </div>
          {/* Pass the videos array as a prop to the Searchbar component */}
          <Searchbar videos={videos} />
        </IonContent>
        <Footer />
      </IonPage>
    </>
  );
}
export default Videos;
