/**
 * AI agent configuration and types
 */

export interface Vec2 {
  x: number;
  y: number;
}

export enum AgentState {
  IDLE = 'IDLE',
  MOVING = 'MOVING',
  INTERACTING = 'INTERACTING',
  EATING = 'EATING',
  REPRODUCING = 'REPRODUCING',
  DEAD = 'DEAD'
}

export interface AgentConfig {
  id: string;
  initialPosition: Vec2;
  initialVelocity?: Vec2;
  energy: number;
  maxEnergy: number;
  size: number;
  color: number;
  speed: number;
  visionRange: number;
  decayRate: number;
}

export interface AgentSensors {
  nearbyFoodPositions: Vec2[];
  nearbyAgents: string[];
  wallsInVision: boolean;
  currentEnergy: number;
}

export interface AgentMemory {
  lastActions: AgentAction[];
  exploredAreas: Vec2[];
  foodLocations: Vec2[];
}

export enum AgentAction {
  MOVE_UP = 'MOVE_UP',
  MOVE_DOWN = 'MOVE_DOWN',
  MOVE_LEFT = 'MOVE_LEFT',
  MOVE_RIGHT = 'MOVE_RIGHT',
  IDLE = 'IDLE',
  EAT = 'EAT',
  REPRODUCE = 'REPRODUCE'
}
