import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Car = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "f1model/scene.gltf"
  );

  // settings for mp4/5
  useEffect(() => {
    gltf.scene.scale.set(0.35, 0.35, 0.35);
    gltf.scene.position.set(0.5, 0.75, -0.4);
    gltf.scene.rotateY(3.15);
    gltf.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  // useFrame((state, delta) => {
  //   let t = state.clock.getElapsedTime();

  //   // let group = gltf.scene.children[0].children[0].children[0].children[0];
  //   // // group.children[11].rotation.x = t * 2;
  //   // // group.children[12].rotation.x = t * 2;
  //   // // group.children[13].rotation.x = t * 2;
  // });

  return <primitive object={gltf.scene} />;
};

export default Car;
