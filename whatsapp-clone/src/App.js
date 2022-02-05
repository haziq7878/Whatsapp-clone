import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Chat from './Components/Chat';
import { useState } from 'react';
import { useStateValue } from './StateProvider';


function App() {
  // const [user,setUser] = useState(null);
  const [{user},dispatch] = useStateValue();
  return (
    // Ben naming convention
    <div className="App">
      {!user ?(
        <Login/>
      ):(
        <div className="app_body">
        <Router>
        <Sidebar />
          <Routes >
            <Route exact path="/rooms/:roomID" element={<Chat/>}/>
            <Route exact path="/" element={<Chat/>}/>
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
