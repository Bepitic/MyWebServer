import './style.css'
import * as THREE from 'three';
import { CameraHelper } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setY(15);
camera.rotateX(-0.4);
camera.position.setZ(20);
renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const materaial = new THREE.MeshBasicMaterial({color:0xFF9943, wireframe:true});
const torus = new THREE.Mesh(geometry,materaial);

//scene.add(torus);

const planeMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(20,20)
)
planeMesh.rotateX(-Math.PI/2);
//scene.add(planeMesh);

const grid = new THREE.GridHelper(20,20);
scene.add(grid);

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  torus.rotation.x +=0.01;
  torus.rotation.y +=0.04;
  torus.rotation.z +=0.01;
}
animate();