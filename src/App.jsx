import { ChatEngine } from 'react-chat-engine';
import './App.css'
import LoginForm from "./components/LoginForm";
import ChatFeed from './components/ChatFeed'
 
const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 

      height="100vh"
      projectID="c6ddaf1b-912e-4166-998c-589abb0dcb3b"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;