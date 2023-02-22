import Chatbot from 'react-chatbot-kit';
import '../styles/chatbot.css';
import config from '../chatbot/config';
import ActionProvider from '../chatbot/ActionProvider';
import MessageParser from '../chatbot/MessageParser';

function Chatbotteste() {
  return (
    <>
      <div className='chatbotteste-div'>
        <div className='chatbotteste-container'>
          <Chatbot 
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          />
        </div>
      </div>
    </>
  );
}

export default Chatbotteste;
