import { ref } from "vue";

import { Point } from "../classes/geometrie/point";
import { Position } from "../classes/geometrie/position";
import { Entier } from "../classes/math/Entier.ts";
import { Orientations } from "../classes/topologie/orientations";
import { PlanèteAvecObstacles } from "../classes/topologie/planeteAvecObstacles.ts";
import { PlanèteToroïdaleVide } from "../classes/topologie/planeteToroïdale.ts";
import { CommandeComplexe } from "../classes/rover/commande/CommandeComplexe.ts";
import { CommandeSimple } from "../classes/rover/commande/CommandeSimple.ts";
import { InterpréteurRover } from "../classes/rover/interpréteurRover.js";
import { RoverWithState } from "../classes/rover/roverWithState.ts";

const rover = ref<RoverWithState>();
const planet = ref<PlanèteAvecObstacles>();
const interpreter = ref<InterpréteurRover>();

const obstaclesMap = ref<
  { coords: { latitude: number; longitude: number }; found: boolean }[]
>([]);

export const useRover = () => {
  const landRover = (): void => {
    const planetSkeleton = new PlanèteToroïdaleVide(new Entier(8));
    planet.value = new PlanèteAvecObstacles(planetSkeleton);

    [
      [1, 1],
      [2, 2],
      [7, 1],
    ].forEach(([latitude, longitude]) => {
      planet.value?.AjouterObstacle(latitude, longitude);
      obstaclesMap.value.push({
        coords: {
          latitude,
          longitude,
        },
        found: false,
      });
    });

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

  const findObstacle = (i: number, j: number): void => {
    obstaclesMap.value.filter(
      ({ coords }) => coords.latitude === i && coords.longitude === j
    )[0].found = true;
  };

  const isObstacle = (i: number, j: number): boolean => {
    return !planet.value?.EstAccessible(
      new Point(new Entier(i), new Entier(j))
    );
  };

  const isFound = (i: number, j: number): boolean => {
    return (
      obstaclesMap.value.filter(
        ({ coords }) => coords.latitude === i && coords.longitude === j
      )[0]?.found || false
    );
  };

  return {
    planet,
    rover,
    executeCommand,
    executeSequence,
    findObstacle,
    isObstacle,
    isFound,
    landRover,
  };
};
