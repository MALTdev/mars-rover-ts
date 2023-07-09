import {Planète} from "../topologie/planète.interface.ts";
import {Point} from "./point.ts";
import { useRover } from "../../composables/useRover.ts";

export class Position {
    private readonly _point: Point;
    private readonly _planète: Planète;

    constructor(point: Point, planète: Planète) {
        this._planète = planète;
        this._point = planète.Normaliser(point);
    }

    IncrémenterLatitudeSaufObstacle() : Position {
        return this.AllerADestinationSaufObstacle(this._point.IncrémenterLatitude());
    }

    DécrémenterLatitudeSaufObstacle() : Position {
        return this.AllerADestinationSaufObstacle(this._point.DécrémenterLatitude());
    }

    IncrémenterLongitudeSaufObstacle() : Position {
        return this.AllerADestinationSaufObstacle(this._point.IncrémenterLongitude());
    }

    DécrémenterLongitudeSaufObstacle() : Position {
        return this.AllerADestinationSaufObstacle(this._point.DécrémenterLongitude());
    }

    private AllerADestinationSaufObstacle(pointDestination: Point) : Position{
        const pointFinal = this._planète.SelonAccessibilité(pointDestination,
            () => {
                useRover().findObstacle(pointDestination._latitude._valeur, pointDestination._longitude._valeur)
                return this._point
            },
            () => pointDestination
        );

        return new Position(pointFinal, this._planète);
    }
}