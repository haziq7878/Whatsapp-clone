import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Chat from './Components/Chat';


function App() {
  return (
    // Ben naming convention
    <div className="App">
      <div className="app_body">
        <Router>
        <Sidebar />
          <Routes >
            <Route exact path="/rooms/:roomID" element={<Chat/>}/>
            <Route exact path="/" element={<Chat/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
