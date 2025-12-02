"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { useMusicContext } from "../context/MusicContext";

interface Robot3DProps {
  cursorPosition: { x: number; y: number };
  onClick: () => void;
}

export function Robot3D({ cursorPosition, onClick }: Robot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { isPlaying } = useMusicContext();
  const isPlayingRef = useRef(isPlaying);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    robot: {
      head: THREE.Group;
      body: THREE.Mesh;
      leftEye: THREE.Mesh;
      rightEye: THREE.Mesh;
      antenna: THREE.Mesh;
      leftArm: THREE.Mesh;
      rightArm: THREE.Mesh;
    };
    materials: {
      body: THREE.MeshStandardMaterial;
      head: THREE.MeshStandardMaterial;
      arms: THREE.MeshStandardMaterial;
      antenna: THREE.MeshStandardMaterial;
    };
  } | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance"
    });
    renderer.setSize(120, 120);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x9019d7, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 0.8, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Create robot parts
    // Body
    const bodyGeometry = new THREE.BoxGeometry(1.2, 1.5, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x9019d7,
      metalness: 0.7,
      roughness: 0.3,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.5;
    scene.add(body);

    // Head (will rotate to follow cursor)
    const head = new THREE.Group();
    const headGeometry = new THREE.BoxGeometry(1, 1, 0.8);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xb366ff,
      metalness: 0.6,
      roughness: 0.4,
    });
    const headMesh = new THREE.Mesh(headGeometry, headMaterial);
    head.add(headMesh);
    head.position.y = 0.7;
    scene.add(head);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.5,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.25, 0.15, 0.45);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.25, 0.15, 0.45);
    head.add(rightEye);

    // Antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8);
    const antennaMaterial = new THREE.MeshStandardMaterial({
      color: 0x9019d7,
      metalness: 0.8,
    });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.y = 0.7;
    head.add(antenna);

    // Antenna ball
    const ballGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const ballMaterial = new THREE.MeshStandardMaterial({
      color: 0xff00ff,
      emissive: 0xff00ff,
      emissiveIntensity: 0.3,
    });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.y = 0.9;
    head.add(ball);

    // Arms
    const armGeometry = new THREE.BoxGeometry(0.3, 1, 0.3);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: 0x9019d7,
      metalness: 0.7,
      roughness: 0.3,
    });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.75, -0.3, 0);
    leftArm.rotation.z = 0.3;
    scene.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.75, -0.3, 0);
    rightArm.rotation.z = -0.3;
    scene.add(rightArm);

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      robot: { head, body, leftEye, rightEye, antenna, leftArm, rightArm },
      materials: {
        body: bodyMaterial,
        head: headMaterial,
        arms: armMaterial,
        antenna: antennaMaterial,
      },
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const isMusicPlaying = isPlayingRef.current;

      if (isMusicPlaying) {
        // DANCING MODE! 🕺
        const danceSpeed = 8; // Faster movement
        const bounceHeight = 0.2;
        const wiggleAmount = 0.3;
        
        // Body bouncing and wiggling
        body.position.y = -0.5 + Math.abs(Math.sin(time * danceSpeed)) * bounceHeight;
        body.rotation.z = Math.sin(time * danceSpeed * 0.5) * wiggleAmount * 0.3;
        body.rotation.y = Math.sin(time * danceSpeed * 0.25) * wiggleAmount * 0.2;
        
        // Head bobbing and grooving
        head.position.y = 0.7 + Math.abs(Math.sin(time * danceSpeed)) * bounceHeight;
        head.rotation.z = Math.sin(time * danceSpeed * 0.5 + 0.5) * wiggleAmount * 0.4;
        
        // Arms dancing! Wave them around
        leftArm.position.y = -0.3 + Math.sin(time * danceSpeed) * 0.3;
        leftArm.rotation.z = 0.3 + Math.sin(time * danceSpeed) * 0.8;
        leftArm.rotation.x = Math.sin(time * danceSpeed * 0.5) * 0.4;
        
        rightArm.position.y = -0.3 + Math.sin(time * danceSpeed + Math.PI) * 0.3;
        rightArm.rotation.z = -0.3 + Math.sin(time * danceSpeed + Math.PI) * -0.8;
        rightArm.rotation.x = Math.sin(time * danceSpeed * 0.5 + Math.PI) * 0.4;

        // Faster antenna spin
        ball.rotation.y += 0.15;
        
        // Crazy eye glow
        const glowIntensity = 0.8 + Math.sin(time * danceSpeed * 2) * 0.4;
        if (leftEye.material instanceof THREE.MeshStandardMaterial) {
          leftEye.material.emissiveIntensity = glowIntensity;
          rightEye.material.emissiveIntensity = glowIntensity;
        }
      } else {
        // Normal gentle floating animation
        body.position.y = -0.5 + Math.sin(time * 2) * 0.1;
        body.rotation.z = 0;
        body.rotation.y = 0;
        
        head.position.y = 0.7 + Math.sin(time * 2) * 0.1;
        
        leftArm.position.y = -0.3 + Math.sin(time * 2) * 0.05;
        leftArm.rotation.z = 0.3;
        leftArm.rotation.x = 0;
        
        rightArm.position.y = -0.3 + Math.sin(time * 2) * 0.05;
        rightArm.rotation.z = -0.3;
        rightArm.rotation.x = 0;

        // Normal antenna spin
        ball.rotation.y += 0.02;

        // Normal eye glow pulsing
        const glowIntensity = 0.5 + Math.sin(time * 3) * 0.2;
        if (leftEye.material instanceof THREE.MeshStandardMaterial) {
          leftEye.material.emissiveIntensity = glowIntensity;
          rightEye.material.emissiveIntensity = glowIntensity;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      // Dispose all geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update robot colors based on theme
  useEffect(() => {
    if (!sceneRef.current) return;

    const { materials } = sceneRef.current;
    const isDark = theme === "dark";

    // Update robot colors based on theme
    const primaryColor = isDark ? 0x9019d7 : 0x7c3aed; // purple-600 in light mode
    const secondaryColor = isDark ? 0xb366ff : 0xa78bfa; // purple-400 in light mode

    materials.body.color.setHex(primaryColor);
    materials.head.color.setHex(secondaryColor);
    materials.arms.color.setHex(primaryColor);
    materials.antenna.color.setHex(primaryColor);
  }, [theme]);

  // Update head rotation based on cursor position
  useEffect(() => {
    if (!sceneRef.current || !containerRef.current) return;

    const { robot } = sceneRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Calculate normalized cursor position relative to robot (-1 to 1)
    const normalizedX = ((cursorPosition.x - rect.left) / rect.width) * 2 - 1;
    const normalizedY = -((cursorPosition.y - rect.top) / rect.height) * 2 + 1;

    // Smoothly rotate head to look at cursor
    const targetRotationY = normalizedX * 0.5; // Horizontal rotation
    const targetRotationX = normalizedY * 0.3; // Vertical rotation

    // Smooth interpolation
    robot.head.rotation.y += (targetRotationY - robot.head.rotation.y) * 0.1;
    robot.head.rotation.x += (targetRotationX - robot.head.rotation.x) * 0.1;

    // Clamp rotations
    robot.head.rotation.y = Math.max(-0.6, Math.min(0.6, robot.head.rotation.y));
    robot.head.rotation.x = Math.max(-0.4, Math.min(0.4, robot.head.rotation.x));
  }, [cursorPosition]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="cursor-pointer hover:scale-110 transition-transform duration-200"
      style={{ 
        width: "120px", 
        height: "120px",
        position: "relative",
        zIndex: 9999
      }}
    />
  );
}
