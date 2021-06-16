
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

const lineShape = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({color: "white"});
const line = new THREE.LineSegments(lineShape, lineMaterial);

scene.add( cube, line );

camera.position.z = 5;
function animate() {
    requestAnimationFrame( animate );
    cube.rotateX(.01);
    line.rotateX(.01);
    renderer.render( scene, camera );
}
animate();