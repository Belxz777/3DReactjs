import {Canvas} from '@react-three/fiber'
import './App.css';
import Box from './Box';
import Capsule from './Capsule';
import Cone from './Cone';
import Ring from './Dodecone';
function App() {
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
