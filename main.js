import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer(
  {
    antialias:true
  }
)

renderer.setSize(innerWidth,innerHeight)
document.body.appendChild(renderer.domElement)

//create sphere
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5,50,50), new THREE.MeshBasicMaterial({
    // color:0xff0000
    map: new THREE.TextureLoader().load('./image/earth.jpg')
  })
)

scene.add(sphere)

camera.position.z = 10
// console.log(sphere)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()