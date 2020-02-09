import {Entreprise} from "../domain/entity/Entreprise";

export interface EntrepriseService {
    calculerImpot(entreprise: Entreprise, chiffreAffaire: number)
}