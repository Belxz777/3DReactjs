import {Canvas} from '@react-three/fiber'
import './App.css';
import Box from './Box';
import Capsule from './Capsule';
import Cone from './Cone';
import Ring from './Dodecone';
function App() {
  // завтра создать сцену и добавить возможность нажимать  и вертеть 3д обьекты 
  // загрузить gltf модель и создать текстуры и крутой живой бекгранд 
// или что то вроеде этого хотя бы 3д модель с тектуркой 
//завтра уделяем 4 часа 30 мин на все и все это все и  не больше 
  return (
    <div style={{height:'100vh'}}>
<Canvas
  camera={{ position: [2, 0, 12.25], fov: 15 }}
  className ='canvasMain'
>
<ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-2, 1.4, 0]}  />
  <Capsule position = {[-1.4,1.3,0]} />
  <Cone position = {[-0.6,1.3,0]}/>
  <Ring position = {[-0.6,1.3,0]}/>

</Canvas>
    </div>
  );
}

export default App;
