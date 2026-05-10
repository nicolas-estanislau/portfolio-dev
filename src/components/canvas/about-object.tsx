import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, TorusKnot } from "@react-three/drei"
import * as THREE from "three"

export function AboutObject() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <TorusKnot
        ref={meshRef}
        args={[1, 0.3, 128, 16]}
        position={[-3, -8, -2]}
      >
        <meshStandardMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.4}
        />
      </TorusKnot>
    </Float>
  )
}
