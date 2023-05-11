import { useState } from 'react';
import './App.css';
import Chat from './chat/Chat';
import Login from './login/Login';
import Register from './register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [userValidInfo, setUserValidInfo] = useState(null);
    const [usersRegisterList, setUsersRegisterList] = useState([]);

    // Render the Chat component only if the user is authenticated
    const renderChat = () => {
        if (userValidInfo) {
            return <Chat />;
        } else {
            // Redirect to the login page if the user is not authenticated
            return <Navigate to="/" />;
        }
    };


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/chat" element={renderChat()} />
                <Route path="/register" element={<Register setUsersRegisterList={setUsersRegisterList} usersRegisterList={usersRegisterList}/>}/>
                <Route path="/" element={<Login setUserValidInfo={setUserValidInfo} usersRegisterList={usersRegisterList}/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;