/**
 * World environment configuration
 */

export interface Vec2 {
  x: number;
  y: number;
}

export interface WorldBounds {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface WorldConfig {
  bounds: WorldBounds;
  foodSpawnRate: number;
  maxFood: number;
  foodNutrition: number;
  foodRespawnInterval: number;
}

export interface FoodParticle {
  id: string;
  position: Vec2;
  nutrition: number;
  createdAt: number;
}

export interface EnvironmentState {
  foodParticles: FoodParticle[];
  totalFood: number;
  totalAgents: number;
}

export const DEFAULT_WORLD_CONFIG: WorldConfig = {
  bounds: {
    width: 1600,
    height: 900,
    x: 0,
    y: 0
  },
  foodSpawnRate: 10,
  maxFood: 500,
  foodNutrition: 100,
  foodRespawnInterval: 1000
};
