import React, { useEffect } from 'react';
import SingleMessage from './SingleMessage';
import styled from 'styled-components';
import { animateScroll } from "react-scroll";


const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MessageContainer = styled.div`
	width: 50%;
	heigth: 50%;
	position: relative;
	left: 30%;
	overflow: scroll;
  height: 50%;
`;


interface Props {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }) =>  {
	useEffect(() => {
		  animateScroll.scrollToBottom({
		    containerId: "all-messages"
		  });
}, [messages]);

	

  return (
  	<MessageContainer id="all-messages">
	    <List>
	      {messages.map(message => (
	        <SingleMessage key={message.text} message={message} />
	      ))}
	    </List>
	  </MessageContainer>
  );
};

export default MessageList;