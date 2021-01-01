import * as THREE from './three/build/three.module.js';


var rot = Math.PI / 16;




// SCENE
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth*0.75,window.innerHeight*0.75);
$('body').append(renderer.domElement);

camera.position.z = 5;


// CUBE
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x808080});
var cube = new THREE.Mesh(geometry,material);
scene.add(cube);


var mat = new THREE.LineBasicMaterial( { 
    color: 0xffffff, 
    side: THREE.BackSide,
    linewidth: 3 
} );
var wireframe = new THREE.LineSegments( geometry, mat );
// wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
cube.add( wireframe );

var wireframe2 = new THREE.LineSegments( geometry, mat );
// wireframe2.renderOrder = 1; // make sure wireframes are rendered 2nd
wireframe2.rotation.y = Math.PI / 2;
cube.add( wireframe2 );

var wireframe3 = new THREE.LineSegments( geometry, mat );
wireframe3.rotation.x = Math.PI / 2;
cube.add( wireframe3 );

var wireframe4 = new THREE.LineSegments( geometry, mat );
wireframe4.rotation.y = Math.PI;
cube.add( wireframe4 );

var wireframe5 = new THREE.LineSegments( geometry, mat );
wireframe5.rotation.z = Math.PI / 2;
cube.add( wireframe5 );

// CIRCLE
var geometry = new THREE.CircleGeometry( 1.6, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xA0B9C6 } );
var circle = new THREE.Mesh( geometry, material );
circle.position.z = -5;
scene.add( circle );



// LIGHT
var light = new THREE.DirectionalLight( 0x121212 );
light.position.set( 10, 0, 0 );
scene.add( light );


renderer.render(scene,camera);

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp")
    {
        cube.rotation.x += rot;
        // wireframe.rotation.x += rot;
    }
    else if (e.code === "ArrowDown")
    {
        cube.rotation.x -= rot;
        // wireframe.rotation.x -= rot;
    }
    else if (e.code === "ArrowLeft")
    {
        cube.rotation.y -= rot;
        // wireframe.rotation.y -= rot;
    }
    else if (e.code === "ArrowRight")
    {
        cube.rotation.y += rot;
        // wireframe.rotation.y += rot;
    }

    document.getElementById('xRot').innerHTML = 'X Rotation: ' + ((Math.round(cube.rotation.x*180/Math.PI)%360)+360)%360;
    document.getElementById('yRot').innerHTML = 'Y Rotation: ' + ((Math.round(cube.rotation.y*180/Math.PI)%360)+360)%360;
    animate();

  });


var animate = function(){
    renderer.render(scene,camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();
}
