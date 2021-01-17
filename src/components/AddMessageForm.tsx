import React, { useState } from 'react';
import styled from 'styled-components';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';


const TextField = styled.textarea`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const FancyButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const FancyForm = styled.form`
	position: absolute;
	top: 50%;
	left: 40%;
	@media (max-width:764px) {
		position: absolute;
		top: 50%;
		left: 20%;
	}
`;

interface Props {
  sendMessage: SendMessage;
}

const AddMessageForm: React.FC<Props> = ({ sendMessage }) => {
	const [text, setText] = useState('')
  return (
    <FancyForm>
    	<IonGrid>
  			<IonRow>
    			<IonCol>
			      <TextField
			        value={text}
			        onChange={e => {
			          setText(e.target.value);
			        }}
			      />
			    </IonCol>
    			<IonCol>
			      <FancyButton type="submit"
			        onClick={e => {
			          e.preventDefault();
			          sendMessage(text);
			          setText('');
			        }}
			        >
			        	Send Message
			      </ FancyButton>
			    </IonCol>
			  </IonRow>
			</IonGrid>
    </FancyForm>
  );
};

export default AddMessageForm;