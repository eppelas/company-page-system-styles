import React, { useEffect, useRef } from 'react';

const NUM_POINTS = 60;
const RADIUS_1 = 300;
const RADIUS_2 = 200;
const RADIUS_3 = 100;
const MOUSE_RADIUS = 150;
const MOUSE_REPULSION = 50;
const SPRING_STRENGTH = 0.05;
const DAMPING = 0.8;

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
}

export function InteractiveRings() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Mouse position info
    const mouse = useRef({ x: -1000, y: -1000, radius: MOUSE_RADIUS });

    // Create rings geometry
    const rings = useRef<Point[][]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        // Handle Resize
        const resizeInfo = { width: 0, height: 0, centerX: 0, centerY: 0 };
        const handleResize = () => {
            // Need visual scale handling for retina displays
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            resizeInfo.width = rect.width;
            resizeInfo.height = rect.height;
            resizeInfo.centerX = rect.width / 2;
            resizeInfo.centerY = rect.height / 2;

            // Initialize the rings relative to the new center
            initRings(resizeInfo.centerX, resizeInfo.centerY);
        };

        const initRings = (cx: number, cy: number) => {
            const createRing = (radius: number): Point[] => {
                const pts: Point[] = [];
                for (let i = 0; i < NUM_POINTS; i++) {
                    const angle = (i / NUM_POINTS) * Math.PI * 2;
                    const x = cx + Math.cos(angle) * radius;
                    const y = cy + Math.sin(angle) * radius;
                    pts.push({ x, y, originX: x, originY: y, vx: 0, vy: 0 });
                }
                return pts;
            };

            // Create 3 concentric rings (doubled size as requested)
            rings.current = [
                createRing(Math.min(resizeInfo.width, resizeInfo.height) * 0.8), // Largest
                createRing(Math.min(resizeInfo.width, resizeInfo.height) * 0.6), // Medium
                createRing(Math.min(resizeInfo.width, resizeInfo.height) * 0.4), // Inner
            ];
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Track Mouse
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        // Smooth reset when leaving
        const handleMouseLeave = () => {
            mouse.current.x = -1000;
            mouse.current.y = -1000;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Render loop
        const render = () => {
            ctx.clearRect(0, 0, resizeInfo.width, resizeInfo.height);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // Significantly softer white for rings
            ctx.lineWidth = 0.5;

            // Update and draw each ring
            rings.current.forEach((ringPoints) => {
                ctx.beginPath();

                for (let i = 0; i < ringPoints.length; i++) {
                    const pt = ringPoints[i];

                    // Distance from mouse
                    const dx = pt.x - mouse.current.x;
                    const dy = pt.y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Interaction (repulsion)
                    if (dist < mouse.current.radius) {
                        const force = (mouse.current.radius - dist) / mouse.current.radius;
                        // Push outwards
                        const angle = Math.atan2(dy, dx);
                        const targetX = pt.x + Math.cos(angle) * force * MOUSE_REPULSION;
                        const targetY = pt.y + Math.sin(angle) * force * MOUSE_REPULSION;

                        // Apply force
                        pt.vx += (targetX - pt.x) * 0.1;
                        pt.vy += (targetY - pt.y) * 0.1;
                    }

                    // Spring physics to return to origin
                    const springFx = (pt.originX - pt.x) * SPRING_STRENGTH;
                    const springFy = (pt.originY - pt.y) * SPRING_STRENGTH;

                    pt.vx += springFx;
                    pt.vy += springFy;

                    // Apply dampening
                    pt.vx *= DAMPING;
                    pt.vy *= DAMPING;

                    // Update actual position
                    pt.x += pt.vx;
                    pt.y += pt.vy;

                    if (i === 0) {
                        ctx.moveTo(pt.x, pt.y);
                    } else {
                        ctx.lineTo(pt.x, pt.y);
                    }
                }

                // Close the circle curve
                ctx.closePath();
                ctx.stroke();
            });

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
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{
                zIndex: 0,
                // Optional subtle rotation to keep the original "spin" vibe 
                // We'll let the interactive nature do the heavy lifting though
            }}
        />
    );
}
