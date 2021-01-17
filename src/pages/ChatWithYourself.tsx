import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MessageList  from '../components/MessageList';
import AddMessageForm  from '../components/AddMessageForm';

import styled from 'styled-components';

const ChatWithYourself: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage: SendMessage = (text: string) => {
    if (text.length > 0) {
      const newMessage = { text };
      setMessages([...messages, newMessage]);
    }
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat with yourself!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ChatWithYourself</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />
          <MessageList messages={messages} />
          <AddMessageForm sendMessage={sendMessage}  />
      </IonContent>
    </IonPage>
  );
};

export default ChatWithYourself;