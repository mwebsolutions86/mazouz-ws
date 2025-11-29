'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function DataCloud() {
  const ref = useRef<THREE.Points>(null!);

  const [particles] = useState(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current && particles) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  if (!particles) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial 
            transparent 
            color="#00f3ff" 
            size={0.015} 
            sizeAttenuation={true} 
            depthWrite={false} 
            blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DataCloud />
        </Float>
      </Canvas>
    </div>
  );
}