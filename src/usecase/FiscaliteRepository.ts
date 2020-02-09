import {StatutJuridique} from "../domain/entity/StatutJuridique";

export interface FiscaliteRepository {
    getTauxImpositionByStatutJuridique(statutJuridique: StatutJuridique);
}