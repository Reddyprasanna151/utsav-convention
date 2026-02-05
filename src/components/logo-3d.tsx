import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture, Float, Environment } from "@react-three/drei"
import * as THREE from "three"

function LogoPlane() {
    const meshRef = useRef<THREE.Mesh>(null)
    const texture = useTexture("/CP_03200-Photoroom.png")

    // Make texture transparent
    texture.colorSpace = THREE.SRGBColorSpace

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
        }
    })

    return (
        <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.5}
        >
            <mesh ref={meshRef} scale={[3, 3.5, 1]}>
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial
                    map={texture}
                    transparent
                    side={THREE.DoubleSide}
                    metalness={0.3}
                    roughness={0.4}
                />
            </mesh>

            {/* Glow effect behind logo */}
            <mesh position={[0, 0, -0.1]} scale={[3.5, 4, 1]}>
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial
                    color="#D4AF37"
                    transparent
                    opacity={0.15}
                />
            </mesh>
        </Float>
    )
}

function ParticleField() {
    const particlesRef = useRef<THREE.Points>(null)
    const count = 100

    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        positions[i * 3 + 2] = (Math.random() - 0.5) * 5
    }

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
        }
    })

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#D4AF37"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

export function Logo3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <pointLight position={[-5, -5, -5]} intensity={0.5} color="#D4AF37" />

                    <LogoPlane />
                    <ParticleField />

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
}
