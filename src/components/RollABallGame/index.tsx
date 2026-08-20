"use client";

import { type FC, useEffect, useRef, useState } from "react";

const BALL_SIZE = 42;
const ACCELERATION = 1600;
const FRICTION = 0.92;
const MAX_SPEED = 360;
const BOUNCE = -0.4;
const JUMP_HEIGHT = 30;
const JUMP_SPEED = 2.2;

const MOVE_KEYS = new Set(["w", "a", "s", "d", " "]);

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
};

const RollABallGame: FC = () => {
  const arenaRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(false);

  const physics = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    rotation: 0,
    jump: 0,
    keys: new Set<string>(),
    initialized: false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (pointer: fine)"
    );
    setIsDesktop(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setIsDesktop(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (!MOVE_KEYS.has(key) || isTypingTarget(event.target)) return;

      if (key === " ") event.preventDefault();
      physics.current.keys.add(key);
      setActive(true);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      physics.current.keys.delete(event.key.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!active || !arenaRef.current || !ballRef.current) return;

    const arena = arenaRef.current;
    const ball = ballRef.current;
    const shadow = shadowRef.current;
    const state = physics.current;

    if (!state.initialized) {
      const bounds = arena.getBoundingClientRect();
      state.x = bounds.width / 2 - BALL_SIZE / 2;
      state.y = bounds.height / 2 - BALL_SIZE / 2;
      state.initialized = true;
    }

    let lastTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const bounds = arena.getBoundingClientRect();
      let ax = 0;
      let ay = 0;
      if (state.keys.has("w")) ay -= 1;
      if (state.keys.has("s")) ay += 1;
      if (state.keys.has("a")) ax -= 1;
      if (state.keys.has("d")) ax += 1;

      if (ax !== 0 || ay !== 0) {
        const length = Math.hypot(ax, ay);
        state.vx += (ax / length) * ACCELERATION * dt;
        state.vy += (ay / length) * ACCELERATION * dt;
      }

      state.vx *= FRICTION;
      state.vy *= FRICTION;

      const speed = Math.hypot(state.vx, state.vy);
      if (speed > MAX_SPEED) {
        state.vx = (state.vx / speed) * MAX_SPEED;
        state.vy = (state.vy / speed) * MAX_SPEED;
      }

      state.x += state.vx * dt;
      state.y += state.vy * dt;

      const maxX = Math.max(0, bounds.width - BALL_SIZE);
      const maxY = Math.max(0, bounds.height - BALL_SIZE);

      if (state.x < 0) {
        state.x = 0;
        state.vx *= BOUNCE;
      } else if (state.x > maxX) {
        state.x = maxX;
        state.vx *= BOUNCE;
      }

      if (state.y < 0) {
        state.y = 0;
        state.vy *= BOUNCE;
      } else if (state.y > maxY) {
        state.y = maxY;
        state.vy *= BOUNCE;
      }

      state.rotation += state.vx * dt * 0.8;

      if (state.keys.has(" ") && state.jump <= 0) state.jump = 1;
      let jumpOffset = 0;
      if (state.jump > 0) {
        jumpOffset = Math.sin(state.jump * Math.PI) * -JUMP_HEIGHT;
        state.jump = Math.max(0, state.jump - dt * JUMP_SPEED);
      }

      ball.style.transform = `translate(${state.x}px, ${
        state.y + jumpOffset
      }px) rotate(${state.rotation}rad)`;

      if (shadow) {
        const shrink = 1 - Math.min(Math.abs(jumpOffset) / JUMP_HEIGHT, 1) * 0.4;
        shadow.style.transform = `translate(${state.x}px, ${state.y}px) scale(${shrink})`;
        shadow.style.opacity = `${0.25 * shrink}`;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active]);

  if (!isDesktop || !active) return null;

  return (
    <div
      ref={arenaRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={shadowRef}
        className="absolute left-0 top-0 rounded-full bg-black blur-[2px]"
        style={{ width: BALL_SIZE, height: BALL_SIZE * 0.4 }}
      />
      <div
        ref={ballRef}
        className="absolute left-0 top-0 rounded-full opacity-40"
        style={{
          width: BALL_SIZE,
          height: BALL_SIZE,
          background:
            "radial-gradient(circle at 32% 28%, #ffffff, #7dd3fc 45%, #1d4ed8 100%)",
          boxShadow:
            "0 6px 14px rgba(0,0,0,0.35), inset -6px -6px 10px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
};

export default RollABallGame;
