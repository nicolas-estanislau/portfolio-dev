"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Preload, Stars } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import { HeroObject } from "./hero-object"
import { AboutObject } from "./about-object"
import * as THREE from "three"

// Camera Rig to handle Parallax scrolling
function CameraRig() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame((state) => {
    // Parallax effect: smoothly move camera down as user scrolls
    const targetY = -scrollY * 0.005 
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.1)
  })

  return null
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]} // Cap device pixel ratio for performance
      gl={{ antialias: false, alpha: true }} // Alpha true for transparent background
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <CameraRig />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <HeroObject />
        <AboutObject />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
