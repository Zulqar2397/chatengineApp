import './App.css';
import {ChatEngine} from 'react-chat-engine'
import {ChatFeed} from './commponents/ChatFeed'
import LoginForm from './commponents/LoginForm'
import Button from '@material-ui/core/Button';

function App() {
   const projectID = process.env.REACT_APP_projectID;


  if (!localStorage.getItem('username')) return <LoginForm />;
  const logout= ()=>{
  localStorage.clear();
  window.location.reload();
  }

  return (
    <div className="App">
<Button variant="contained" color="secondary" size="small" className="logoutButton" onClick={logout}>
        Logout
      </Button>     
       <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
}
// infinite scroll, logout, more customizations...

export default App;
