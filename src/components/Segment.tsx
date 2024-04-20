import React from "react";
import {IonIcon,IonSegment, IonSegmentButton } from "@ionic/react";
import "../theme/variables.css";
import { logoHtml5, logoIonic, logoMicrosoft, logoPython,} from "ionicons/icons";

function Segment() {
  return (
    <IonSegment scrollable={true}>
    <IonSegmentButton value="home">
      <IonIcon icon={logoPython}></IonIcon>
    </IonSegmentButton>
    <IonSegmentButton value="heart">
      <IonIcon icon={logoIonic}></IonIcon>
    </IonSegmentButton>
    <IonSegmentButton value="pin">
      <IonIcon icon={logoHtml5}></IonIcon>
    </IonSegmentButton>
    <IonSegmentButton value="star">
      <IonIcon icon={logoMicrosoft}></IonIcon>
    </IonSegmentButton>
  </IonSegment>
  );
}
export default Segment;
