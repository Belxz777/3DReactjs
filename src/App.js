import './App.css'
import Main from './Main';
import Shapes from './Shapes';
import Textures from './Textures';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  // завтра создать сцену и добавить возможность нажимать  и вертеть 3д обьекты 
  // загрузить gltf модель и создать текстуры и крутой живой бекгранд 
// или что то вроеде этого хотя бы 3д модель с тектуркой 
//завтра уделяем 4 часа 30 мин на все и все это все и  не больше 
  return (
    <div style={{height:'100vh'}}>
      <Router>
      <Routes>
        <Route path="/" element={< Main />} />
        <Route path="/shapes" element={<Shapes/>} />
        <Route path="/texture" element={<Textures/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
