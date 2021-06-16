
let scene, renderer, cube, camera, line, controls;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    const light = new THREE.AmbientLight();
    
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    
    const lineShape = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: "white" });
    line = new THREE.LineSegments(lineShape, lineMaterial);
    
    scene.add( cube, line, light );
    
    camera.position.z = 5;
}
function animate() {
    requestAnimationFrame( animate );
    // controls.update();
    cube.rotateX(-.01);
    line.rotateX(-.01);
    cube.rotateY(.01);
    line.rotateY(.01);
    cube.rotateZ(.01);
    line.rotateZ(.01);
    renderer.render( scene, camera );
}
init();
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener("resize", onWindowResize())
animate();