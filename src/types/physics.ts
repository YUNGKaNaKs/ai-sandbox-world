/**
 * Physics engine configuration and utility types
 */

export interface Vec2 {
  x: number;
  y: number;
}

export interface PhysicsConfig {
  gravity: Vec2;
  damping: number;
  angularDamping: number;
  defaultDensity: number;
}

export const DEFAULT_PHYSICS_CONFIG: PhysicsConfig = {
  gravity: { x: 0, y: 9.81 },
  damping: 0.3,
  angularDamping: 0.3,
  defaultDensity: 1000
};

export interface RigidBodyOptions {
  mass?: number;
  density?: number;
  friction?: number;
  restitution?: number;
  linearDamping?: number;
  angularDamping?: number;
}
