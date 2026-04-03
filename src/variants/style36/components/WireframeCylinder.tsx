import React, { useEffect, useRef } from 'react';

export function WireframeCylinder() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Mouse position for distortion
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resizeInfo = { width: 0, height: 0, centerX: 0, centerY: 0 };
        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            resizeInfo.width = rect.width;
            resizeInfo.height = rect.height;
            resizeInfo.centerX = rect.width / 2;
            resizeInfo.centerY = rect.height / 2;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.current.x = -1000;
            mouse.current.y = -1000;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        const NUM_RINGS = 4;
        const NUM_POINTS_PER_RING = 16;
        const CYLINDER_HEIGHT = 200;
        const CYLINDER_RADIUS = 80;

        // Project 3D to 2D
        const project = (x: number, y: number, z: number) => {
            // Simple orthographic projection with a slight tilt
            const tiltedY = y * Math.cos(0.4) - z * Math.sin(0.4);
            return {
                px: resizeInfo.centerX + x,
                py: resizeInfo.centerY + tiltedY
            };
        };

        const render = () => {
            ctx.clearRect(0, 0, resizeInfo.width, resizeInfo.height);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1.5;

            time += 0.01;

            const rings2D: { px: number; py: number }[][] = [];

            // Calculate 3D points
            for (let i = 0; i < NUM_RINGS; i++) {
                const ringPoints: { px: number; py: number }[] = [];
                // Z goes from -CYLINDER_HEIGHT/2 to CYLINDER_HEIGHT/2
                const baseZ = -CYLINDER_HEIGHT / 2 + (i / (NUM_RINGS - 1)) * CYLINDER_HEIGHT;

                for (let j = 0; j < NUM_POINTS_PER_RING; j++) {
                    const angle = (j / NUM_POINTS_PER_RING) * Math.PI * 2 + time * 0.5; // rotate over time

                    let nx = Math.cos(angle) * CYLINDER_RADIUS;
                    let ny = Math.sin(angle) * CYLINDER_RADIUS;
                    let nz = baseZ;

                    // Interactive distortion based on mouse
                    const { px: screenX, py: screenY } = project(nx, ny, nz);
                    const dx = screenX - mouse.current.x;
                    const dy = screenY - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        const force = (100 - dist) / 100;
                        const pushX = (dx / dist) * force * 30; // Push by 30px
                        const pushY = (dy / dist) * force * 30;

                        // Adjust nx, ny via an inverse projection hack (visually acceptable)
                        nx += pushX;
                        ny += pushY;
                    }

                    // Organic breathing/morphing
                    const organicFactor = Math.sin(time * 2 + j + i) * 10;
                    nx += Math.cos(angle) * organicFactor;
                    ny += Math.sin(angle) * organicFactor;

                    ringPoints.push(project(nx, ny, nz));
                }
                rings2D.push(ringPoints);
            }

            // Draw horizontal Rings
            rings2D.forEach(ring => {
                ctx.beginPath();
                ring.forEach((pt, index) => {
                    if (index === 0) ctx.moveTo(pt.px, pt.py);
                    else ctx.lineTo(pt.px, pt.py);
                });
                ctx.closePath();
                ctx.stroke();
            });

            // Draw vertical Connecting Lines
            for (let j = 0; j < NUM_POINTS_PER_RING; j++) {
                ctx.beginPath();
                for (let i = 0; i < NUM_RINGS; i++) {
                    const pt = rings2D[i][j];
                    if (i === 0) ctx.moveTo(pt.px, pt.py);
                    else ctx.lineTo(pt.px, pt.py);
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full pointer-events-auto mix-blend-screen"
        />
    );
}
