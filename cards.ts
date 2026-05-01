export enum Farben {
    Rosen,
    Schellen,
    Schilten,
    Eicheln
}

export enum Werte {
    Ass,
    Koenig,
    Ober,
    Under,
    Banner,
    Neun,
    Acht,
    Sieben,
    Sechs

}


export class Card {
    constructor(public farben: Farben, public werte: Werte) { }

    beats(other: Card): boolean {
        if (this.werte < other.werte) return true;
        if (this.werte > other.werte) return false;
        if (this.werte == other.werte) return this.vergleichFarben(this.farben, other.farben);


    }

    private vergleichFarben(a: Farben, b: Farben): boolean {
        if (a == b) return false;
    }


}