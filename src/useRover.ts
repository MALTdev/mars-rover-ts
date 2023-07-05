import { ref } from "vue";

import { Point } from "./geometrie/point";
import { Position } from "./geometrie/position";
import { Entier } from "./math/Entier.ts";
import { Orientations } from "./topologie/orientations";
import { PlanèteAvecObstacles } from "./topologie/planeteAvecObstacles.ts";
import { PlanèteToroïdaleVide } from "./topologie/planeteToroïdale.ts";
import { CommandeComplexe } from "./rover/commande/CommandeComplexe.ts";
import { CommandeSimple } from "./rover/commande/CommandeSimple.ts";
import { InterpréteurRover } from "./rover/interpréteurRover.js";
import { RoverWithState } from "./rover/roverWithState.ts";

const rover = ref<RoverWithState>();
const planet = ref<PlanèteAvecObstacles>();
const interpreter = ref<InterpréteurRover>();

export const useRover = () => {
  const landRover = (): void => {
    const planetSkeleton = new PlanèteToroïdaleVide(new Entier(8));
    planet.value = new PlanèteAvecObstacles(planetSkeleton);
    planet.value.AjouterObstacle(1, 1);
    planet.value.AjouterObstacle(2, 2);
    planet.value.AjouterObstacle(7, 1);

    const landingPosition = new Position(
      new Point(new Entier(5), new Entier(2)),
      planet.value
    );

    rover.value = new RoverWithState(Orientations.Sud, landingPosition);
    interpreter.value = new InterpréteurRover(rover.value);
  };

  const executeCommand = (command: string): void => {
    const data = interpreter.value?.Interpréter(new CommandeSimple(command));
    rover.value = data?._rover;
    interpreter.value = data;
  };

  const executeSequence = (sequence: string): void => {
    const data = interpreter.value?.Interpréter(new CommandeComplexe(sequence));
    rover.value = data._rover;
    interpreter.value = data;
  };

  const isObstacle = (i: number, j: number): boolean => {
    return !planet.value?.EstAccessible(
      new Point(new Entier(i), new Entier(j))
    );
  };

  return {
    planet,
    rover,
    executeCommand,
    executeSequence,
    isObstacle,
    landRover,
  };
};
