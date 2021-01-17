interface Message {
  text: string;
}

type SendMessage = (text: string) => void;