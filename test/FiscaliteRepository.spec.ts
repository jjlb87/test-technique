import {InMemoryFiscaliteRepository} from "../src/infrastructure/InMemoryFiscaliteRepository";
import {StatutJuridique} from "../src/domain/entity/StatutJuridique";
import {FiscaliteRepository} from "../src/usecase/FiscaliteRepository";


describe("Fiscalite suite tests", () => {

    test('should apply 25% tax for Auto-Entreprise', () => {
        //Arrage
        let fiscaliteRepository : FiscaliteRepository = new InMemoryFiscaliteRepository();

        //Act
        const tauxImposition = fiscaliteRepository.getTauxImpositionByStatutJuridique(StatutJuridique.AUTO_ENTREPRISE)

        //Assert
        expect(tauxImposition).toBe(25);
    })

    test('should apply 33% tax for SAS', () => {
        //Arrage
        let fiscaliteRepository : FiscaliteRepository = new InMemoryFiscaliteRepository();

        //Act
        const tauxImposition = fiscaliteRepository.getTauxImpositionByStatutJuridique(StatutJuridique.SAS)

        //Assert
        expect(tauxImposition).toBe(33);
    })


})
