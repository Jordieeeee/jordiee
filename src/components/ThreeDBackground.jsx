import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeDBackground() {
	const containerRef = useRef(null);
	const sceneRef = useRef(null);
	const rendererRef = useRef(null);
	const objectsRef = useRef([]);

	useEffect(() => {
		if (!containerRef.current) return;

		// Scene setup
		const scene = new THREE.Scene();
		sceneRef.current = scene;
		scene.background = null;
		scene.fog = new THREE.Fog(0xffffff, 1000, 100);

		// Camera setup
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 50;

		// Renderer setup
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance',
		});
		rendererRef.current = renderer;
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.shadowMap.enabled = true;
		containerRef.current.appendChild(renderer.domElement);

		// Lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
		scene.add(ambientLight);

		const pointLight = new THREE.PointLight(0x3b82f6, 1, 100);
		pointLight.position.set(50, 50, 50);
		pointLight.castShadow = true;
		scene.add(pointLight);

		const pointLight2 = new THREE.PointLight(0x8b5cf6, 0.8, 100);
		pointLight2.position.set(-50, -50, 50);
		pointLight2.castShadow = true;
		scene.add(pointLight2);

		// Create animated objects
		const createGeometry = () => {
			const geometries = [
				new THREE.IcosahedronGeometry(1, 4),
				new THREE.TorusGeometry(1.5, 0.5, 16, 100),
				new THREE.OctahedronGeometry(1.5, 2),
				new THREE.TetrahedronGeometry(1, 0),
			];
			return geometries[Math.floor(Math.random() * geometries.length)];
		};

		// Add rotating objects
		const materials = [
			new THREE.MeshPhongMaterial({
				color: 0x3b82f6,
				emissive: 0x1e40af,
				shininess: 100,
				wireframe: false,
			}),
			new THREE.MeshPhongMaterial({
				color: 0x8b5cf6,
				emissive: 0x6d28d9,
				shininess: 100,
				wireframe: false,
			}),
			new THREE.MeshPhongMaterial({
				color: 0x06b6d4,
				emissive: 0x0891b2,
				shininess: 100,
				wireframe: false,
			}),
		];

		for (let i = 0; i < 5; i++) {
			const geometry = createGeometry();
			const material = materials[i % materials.length];
			const mesh = new THREE.Mesh(geometry, material);

			mesh.position.x = (Math.random() - 0.5) * 100;
			mesh.position.y = (Math.random() - 0.5) * 100;
			mesh.position.z = (Math.random() - 0.5) * 100;

			mesh.rotation.x = Math.random() * Math.PI;
			mesh.rotation.y = Math.random() * Math.PI;
			mesh.rotation.z = Math.random() * Math.PI;

			mesh.scale.set(
				Math.random() * 0.5 + 0.5,
				Math.random() * 0.5 + 0.5,
				Math.random() * 0.5 + 0.5
			);

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			mesh.userData = {
				rotationX: Math.random() * 0.01 - 0.005,
				rotationY: Math.random() * 0.01 - 0.005,
				rotationZ: Math.random() * 0.01 - 0.005,
				positionX: mesh.position.x,
				positionY: mesh.position.y,
				time: 0,
			};

			scene.add(mesh);
			objectsRef.current.push(mesh);
		}

		// Mouse tracking
		let mouseX = 0;
		let mouseY = 0;

		const onMouseMove = (event) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener('mousemove', onMouseMove);

		// Handle window resize
		const onWindowResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};

		window.addEventListener('resize', onWindowResize);

		// Animation loop
		let animationFrameId;
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);

			// Update objects
			objectsRef.current.forEach((mesh) => {
				mesh.rotation.x += mesh.userData.rotationX;
				mesh.rotation.y += mesh.userData.rotationY;
				mesh.rotation.z += mesh.userData.rotationZ;

				mesh.userData.time += 0.01;
				mesh.position.y = mesh.userData.positionY + Math.sin(mesh.userData.time) * 5;
			});

			// Camera follows mouse slightly
			camera.position.x = mouseX * 5;
			camera.position.y = mouseY * 5;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		};

		animate();

		// Cleanup
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onWindowResize);
			cancelAnimationFrame(animationFrameId);
			renderer.dispose();
			if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
				containerRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
			}}
		/>
	);
}

export default ThreeDBackground;
