
import Chat from './chat/Chat';
import Login from './login/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
