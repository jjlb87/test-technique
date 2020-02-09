import {Adresse} from "./Adresse";
import {StatutJuridique} from "./StatutJuridique";

export class Entreprise {
    public siret: string;
    public denomination: string;
    public adresse: Adresse;
    public statut: StatutJuridique;

    constructor(siret: string, denomination: string, statut: StatutJuridique) {
        this.siret = siret;
        this.denomination = denomination;
        this.statut = statut;
    }

    getStatut(){
        return this.statut;
    }
}

export class EntrepriseBuilder {
    public siret: string;
    public denomination: string;
    public adresse: Adresse;
    public statut: StatutJuridique;
    constructor() {
    }

    setSiret(siret: string) {
        this.siret = siret;
        return this;
    }
    setDenomination(denomination: string) {
        this.denomination = denomination;
        return this;
    }
    setStatutJuridique(statutJuridique: StatutJuridique) {
        this.statut = statutJuridique;
        return this;
    }

    build() {
        return new Entreprise(this.siret, this.denomination, this.statut)
    }
}