import {Entreprise} from "../domain/entity/Entreprise";
import {EntrepriseService} from "./EntrepriseService";
import {FiscaliteRepository} from "./FiscaliteRepository";

export class EntrepriseInteractor implements EntrepriseService {

    private fiscaliteRepository: FiscaliteRepository;

    constructor(fiscaliteRepository: FiscaliteRepository) {
        this.fiscaliteRepository = fiscaliteRepository;
    }

    calculerImpot(entreprise: Entreprise, chiffreAffaire: number) {
        if(!entreprise) {
            return new Error("entreprise should be provided ")
        }
        if(!chiffreAffaire) {
           return new Error("chiffre d'affaire should be provided ")
        }
        const tauxImposition = this.fiscaliteRepository.getTauxImpositionByStatutJuridique(entreprise.getStatut());
        if(!tauxImposition) {
            return new Error("taux d'imposition cannot be applied ")
        }
        return (tauxImposition / 100) * chiffreAffaire;
    }


}