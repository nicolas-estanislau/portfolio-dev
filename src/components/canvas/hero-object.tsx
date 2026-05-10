import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Icosahedron } from "@react-three/drei"
import * as THREE from "three"

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)

  // Rotate slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      
      // Smoothly scale based on hover
      const targetScale = hovered ? 1.1 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron
        ref={meshRef}
        args={[1.5, 0]}
        position={[3, 0, -2]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#a855f7" : "#3b82f6"}
          wireframe
          transparent
          opacity={0.6}
        />
      </Icosahedron>
    </Float>
  )
}
