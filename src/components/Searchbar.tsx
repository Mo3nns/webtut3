import React, { useState } from "react";
import {
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SearchbarChangeEventDetail {
  value?: string;
}

// Define an interface for the video object
interface Video {
  title: string;
  url: string;
}

// Define an interface for the props of the Searchbar component
interface SearchbarProps {
  videos: Video[];
}

// Use the SearchbarProps interface to type the videos prop
function Searchbar({ videos }: SearchbarProps) {
  const [searchText, setSearchText] = useState("");

  // Create a filtered array of videos that match the search text by title
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <IonSearchbar
        animated={true}
        placeholder="Search"
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onIonChange={(e) => setSearchText(e.detail.value!)}
      ></IonSearchbar>
      {filteredVideos.map((video) => (
        <IonCard key={video.title}>
          <IonCardHeader>
            <IonCardTitle>{video.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <iframe
              width='100%'
              height='315'
              src={video.url}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay False; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
}

export default Searchbar;
