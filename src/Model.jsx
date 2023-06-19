import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/hello.glb");
  const groupRef = useRef();

  return (
    <group {...props} dispose={null} ref={groupRef} scale={[4, 4, 4]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.volca_glass_object.geometry}
        material={materials.volca_glass_mat}
        position={[-0.07, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.volca_object.geometry}
        material={materials.volca_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.volca_object001.geometry}
        material={materials.volca_mat_2}
      />
    </group>
  );
}

useGLTF.preload("/hello.glb");
