import {useState} from 'react';
import './App.css';
import Chat from './chat/Chat';
import Login from './login/Login';
import Register from './register/Register';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import botUsers from "./FriendsList/BotsUsers";

function App() {
    const [userValidInfo, setUserValidInfo] = useState(null);
    const [usersRegisterList, setUsersRegisterList] = useState(
        botUsers.reduce(
            (initialValue, botUser) => {
                initialValue[botUser.registerUsername] = botUser;
            return initialValue;}, {}
        )
    );

    console.log('User valid info:', userValidInfo);
    console.log('Users register list:', usersRegisterList);
    // Render the Chat component only if the user is authenticated
    const renderChat = () => {
        if (userValidInfo) {

            return <Chat userInfo={usersRegisterList[userValidInfo]}
                         usersRegisterList={usersRegisterList}
                         setUsersRegisterList={setUsersRegisterList}/>;
        } else {
            // Redirect to the login page if the user is not authenticated
            return <Navigate to="/"/>;
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/chat" element={renderChat()}/>
                <Route path="/register" element={<Register setUsersRegisterList={setUsersRegisterList}
                                                           usersRegisterList={usersRegisterList}/>}/>
                <Route path="/"
                       element={<Login setUserValidInfo={setUserValidInfo} usersRegisterList={usersRegisterList}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;