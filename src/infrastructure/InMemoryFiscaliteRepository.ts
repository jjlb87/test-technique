import {FiscaliteRepository} from "../usecase/FiscaliteRepository";
import {StatutJuridique} from "../domain/entity/StatutJuridique";

export class InMemoryFiscaliteRepository implements FiscaliteRepository {

    public tauxByStatutJuridiqueMap : Map<StatutJuridique, number> = new Map<StatutJuridique, number>();

    constructor() {
        this.tauxByStatutJuridiqueMap.set(StatutJuridique.SAS, 33);
        this.tauxByStatutJuridiqueMap.set(StatutJuridique.AUTO_ENTREPRISE, 25);
    }

    getTauxImpositionByStatutJuridique(statutJuridique: StatutJuridique): number {
       return this.tauxByStatutJuridiqueMap.get(statutJuridique);
    }

}