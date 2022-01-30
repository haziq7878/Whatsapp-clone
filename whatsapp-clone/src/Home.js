import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import './Home.css'


function Home() {
    return (
        // Ben naming convention
        <div className='App'>
            <div className='app_body'>
                <Chat />
            </div>
        </div>
    );
}

export default Home;
