import React from 'react';
import './SingleMessage.css';
import styled from 'styled-components';


const ListItem = styled.li`
  display:inline-block;
  clear: both;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
`;

interface Props {
  message: Message;
}

const SingleMessage: React.FC<Props> = ({ message }) => {
  return (
    <ListItem>
    	{message.text}
    </ListItem>
  );
};

export default SingleMessage;