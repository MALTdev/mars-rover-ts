import {Orientation} from "./topologie/orientation.ts";
import {Position} from "./geometrie/position.ts";
import {EtatRover} from "./EtatRover.ts";

export class Rover {
    private _etat: EtatRover;

    constructor(orientation: Orientation, position: Position) {
        this._etat = new EtatRover(orientation, position);
    }

    TourneADroite() : EtatRover {
        return this._etat = this._etat.WithRotationHoraire();
    }

    TourneAGauche(): EtatRover {
        return this._etat = this._etat.WithRotationAntihoraire();
    }

    Avancer() : EtatRover {
        return this._etat = this._etat.WithAvancement();
    }

    Reculer(): EtatRover {
        return this._etat = this._etat.WithRecul();
    }
}