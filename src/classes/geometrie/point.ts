import {Entier} from "../math/Entier.ts";

export class Point{
    private readonly _latitude: Entier;
    private readonly _longitude: Entier;

    constructor(latitude: Entier, longitude: Entier) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    public Modulo2D(modulo: Point) {
        const latitude = this._latitude.Modulo(modulo._latitude);
        const longitude = this._longitude.Modulo(modulo._longitude);

        return new Point(latitude, longitude);
    }

    public IncrémenterLatitude() : Point {
        return new Point(this._latitude.Incrémenter(), this._longitude);
    }

    public DécrémenterLatitude() : Point {
        return new Point(this._latitude.Décrémenter(), this._longitude);
    }

    public IncrémenterLongitude() : Point {
        return new Point(this._latitude, this._longitude.Incrémenter());
    }

    public DécrémenterLongitude() : Point {
        return new Point(this._latitude, this._longitude.Décrémenter());
    }

    public equals(other: Point): boolean {
        return this._latitude.equals(other._latitude) && this._longitude.equals(other._longitude);
    }
}