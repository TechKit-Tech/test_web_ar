import * as THREE from 'three';
import './style.css'
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

if (WebGL.isWebGL2Available()) {

  // const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xFFFFFF);
  // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // camera.lookAt(scene.position);

  // const loader = new GLTFLoader();

  // const renderer = new THREE.WebGLRenderer({
  //   antialias: true,
  //   alpha: true
  // });
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.alpha
  // renderer.setAnimationLoop(animate);
  // renderer.xr.enabled = true;

  // document.body.appendChild(renderer.domElement);


  // controller = renderer.xr.getController(0);
  // controller.addEventListener('select', onSelect);
  // scene.add(controller);

  // const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  // const boxMat = new THREE.MeshBasicMaterial({
  //   color: 0x00FF00
  // });
  // const box = new THREE.Mesh(boxGeo, boxMat);
  // scene.add(box);

  // camera.position.z = 5;

  // loader.load('./cavallo.glb', function (gltf) {

  //   scene.add(gltf.scene);

  //   gltf.animations; // Array<THREE.AnimationClip>
  //   gltf.scene; // THREE.Group
  //   gltf.scenes; // Array<THREE.Group>
  //   gltf.cameras; // Array<THREE.Camera>
  //   gltf.asset; // Object

  // },// called while loading is progressing
  //   function (xhr) {

  //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

  //   },
  //   // called when loading has errors
  //   function (error) {

  //     console.log('An error happened ' + error);

  //   });

  // function animate() {
  //   box.rotation.x += 0.01;
  //   box.rotation.y += 0.01;
  //   renderer.render(scene, camera);
  // }

  // animate();

  let camera, scene, renderer;
  let controller;

  init();

  function init() {

    const container = document.createElement('div');
    document.body.appendChild(container);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 3);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    //

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    //

    document.body.appendChild(ARButton.createButton(renderer));

    //

    const geometry = new THREE.CylinderGeometry(0, 0.05, 0.2, 32).rotateX(Math.PI / 2);

    function onSelect() {

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random() });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, - 0.3).applyMatrix4(controller.matrixWorld);
      mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
      scene.add(mesh);

    }

    controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect);
    scene.add(controller);

    //

    window.addEventListener('resize', onWindowResize);

  }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

  }

  //

  function animate() {

    renderer.render(scene, camera);

  }

} else {

  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById('container').appendChild(warning);

}