import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Model = ({ url }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
  };

const ModelViewer = ({model}) => {
  return (
    <div>
      

      
        {/* <div className = 'border-2 p-5' key={model._id}> */}
         
          <Canvas style={{ height: '500px' }}>
            <ambientLight />
            <spotLight position={[10, 10, 10]} />
            <Model url={`http://localhost:5000/files/${model.fileUrl}`}/>
            <OrbitControls />
          </Canvas>
          <h2 className='text-2xl  text-blue-950 font-bold text-center'>{model.name}</h2>
        {/* </div> */}
         

    </div>
  )
}

export default ModelViewer
