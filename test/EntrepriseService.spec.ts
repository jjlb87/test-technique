import {EntrepriseBuilder} from "../src/domain/entity/Entreprise";
import {EntrepriseInteractor} from "../src/usecase/EntrepriseInteractor";
import {EntrepriseService} from "../src/usecase/EntrepriseService";
import {AutoEntreprise} from "../src/domain/entity/AutoEntreprise";
import {SasEntreprise} from "../src/domain/entity/SasEntreprise";
import {StatutJuridique} from "../src/domain/entity/StatutJuridique";
import {FiscaliteRepository} from "../src/usecase/FiscaliteRepository";


describe("Enpreprise Service test suite", () => {

    let entrerpiseService: EntrepriseService;
    let fiscaliteRepository: FiscaliteRepository;

    beforeEach(() => {
        fiscaliteRepository = {} as FiscaliteRepository;
        entrerpiseService = new EntrepriseInteractor(fiscaliteRepository);
    });

    test('should calculate impôt for Auto-Entreprise', () => {
        //Arrage
        const enreprise: AutoEntreprise = new EntrepriseBuilder()
            .setSiret("1234")
            .setDenomination("Entreprise A")
            .setStatutJuridique(StatutJuridique.AUTO_ENTREPRISE)
            .build();

        fiscaliteRepository.getTauxImpositionByStatutJuridique = jest
            .fn()
            .mockReturnValue("25");

        //Act
        const montantImpot = entrerpiseService.calculerImpot(enreprise, 1000);

        //Assert
        expect(montantImpot).toBe(250);
    })

    test('should calculate impôt for SAS', () => {
        //Arrage
        const enreprise: SasEntreprise = new EntrepriseBuilder()
            .setSiret("4567")
            .setDenomination("Entreprise B")
            .setStatutJuridique(StatutJuridique.SAS)
            .build();

        fiscaliteRepository.getTauxImpositionByStatutJuridique = jest
            .fn()
            .mockReturnValue("33");

        //Act
        const montantImpot = entrerpiseService.calculerImpot(enreprise, 1000);

        //Assert
        expect(montantImpot).toBe(330);
    })
})
