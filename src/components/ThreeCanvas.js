import { useCallback, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({initialRotation}) {
    const [initialized, setInitialized] = useState(false);
    const threeDivRef = useCallback(
        (node) => {
            if (node !== null && !initialized) {
                initializeThreeJsScene(node, initialRotation);
                setInitialized(true);
            }
        },
        [initialized]
    )

    return (
        <div ref={ threeDivRef } ></div>
    );
}

function initializeThreeJsScene(node, initialRotation) {
    const scene = new THREE.Scene();
    const camera = initializeCamera();
    const renderer = initializeRenderer(node);

    const cube = initializeCube(initialRotation);
    scene.add(cube);
    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

function initializeCamera() {
    const fieldOfView = 75;
    const aspectRatio = 100 / 100;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);

    camera.position.z = 5;

    return camera;
}

function initializeRenderer(node) {
    const renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(0xffffff);
    renderer.setSize(200, 200);
    node.appendChild(renderer.domElement);

    return renderer;
}

function initializeCube(initialRotation) {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);

    cube.rotation.x = initialRotation.x;
    cube.rotation.y = initialRotation.y;

    return cube;
}

