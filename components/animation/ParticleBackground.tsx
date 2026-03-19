'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const particleCount = 1500

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      const color = new THREE.Color()
      const hue = Math.random() * 0.3 + 0.5 // cyan to purple range
      color.setHSL(hue, 1, 0.5)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.01
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingIcon({ position, color, children, delay = 0 }: { position: [number, number, number], color: string, children: React.ReactNode, delay?: number }) {
  return (
    <Float position={position} speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <RoundedBox args={[1, 1, 1]} radius={0.2} smoothness={4}>
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </RoundedBox>
    </Float>
  )
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color="#0f172a" transparent opacity={0.8} />
    </mesh>
  )
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#0f172a']} />
        <fog attach="fog" args={['#0f172a', 15, 40]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
        <ParticleField />
      </Canvas>
    </div>
  )
}

export { FloatingIcon }
