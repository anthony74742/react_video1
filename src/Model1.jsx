import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/anstronaut_animation.glb");
  const { actions } = useAnimations(animations, group);
    useEffect(() => {
        console.log(actions)
        actions.moon_walk.play()
    })

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode0" scale={0.01}>
          <group name="geo1">
            <group name="astronaut2">
              <skinnedMesh
                name="mesh_1"
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                skeleton={nodes.mesh_1.skeleton}
              />
              <skinnedMesh
                name="mesh_0"
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                skeleton={nodes.mesh_0.skeleton}
              />
              <skinnedMesh
                name="mesh_2"
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
                skeleton={nodes.mesh_2.skeleton}
              />
            </group>
          </group>
          <group name="skeletal3">
            <primitive object={nodes.Root4} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/anstronaut_animation.glb");
