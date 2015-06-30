//IMPORT D'INPUTSERVICE ??
import {InputService, BirthDate} from 'inputService';

//Classe qui donne action aux Signes et leurs dates
export class SigneService {

    signes:  Array<Signe> = [];

    constructor(){
        this.signes.push(new Signe("Belier", "Cessez la guerre avec les Capricornes, vous n'êtes pas si différents entre bêtes à cornes.", moment('21-03', 'DD-MM'), moment('20-04', 'DD-MM') ));
        this.signes.push(new Signe("Taureau", "Cessez de foncer vers des draps rouges.", moment('21-04', 'DD-MM'), moment('21-05', 'DD-MM') ));
        this.signes.push(new Signe("Gemeaux", "La fratrie n'est pas toujours facile, mais sinon, ça ne serait pas la famille.", moment('22-05', 'DD-MM'), moment('21-06', 'DD-MM') ));
        this.signes.push(new Signe("Cancer", "La crabe est un crustacé délicieux, c'est bien pour ça qu'on vous mange.", moment('22-06', 'DD-MM'), moment('22-07', 'DD-MM') ));
        this.signes.push(new Signe("Lion", "Avant de rugir, tourner votre langue 7 fois entre vos crocs.", moment('23-07', 'DD-MM'), moment('22-08', 'DD-MM') ));
        this.signes.push(new Signe("Vierge", "Stop au blague facile à votre sujet.", moment('23-08', 'DD-MM'), moment('22-09', 'DD-MM') ));
        this.signes.push(new Signe("Balance", "La vie a autant nuance de gris, qu'il existe le nombre de pâtes.", moment('23-09', 'DD-MM'), moment('22-10', 'DD-MM') ));
        this.signes.push(new Signe("Scorpion", "Pique... ouille.. arrêtez d'attaquer !", moment('23-10', 'DD-MM'), moment('22-11', 'DD-MM') ));
        this.signes.push(new Signe("Sagittaire", "Le Lion est votre meilleur ami, espérons que vous aurez mieux la tête dans les étoiles.", moment('23-11', 'DD-MM'), moment('21-12', 'DD-MM') ));
        this.signes.push(new Signe("Capricorne", "Votre sagesse et votre patiente payeront, à moins qu'un Bélier vous percute.", moment('22-12', 'DD-MM'), moment('20-01', 'DD-MM') ));
        this.signes.push(new Signe("Verseau", "Vous avez autant de paradoxes qu'il y a des vagues dans l'océan, posez-vous.", moment('21-01', 'DD-MM'), moment('19-02', 'DD-MM') ));
        this.signes.push(new Signe("Poisson", "Apprenez à nager, sinon, la noyade sera inévitable.", moment('20-02', 'DD-MM'), moment('20-03', 'DD-MM') ));
    }

    getSignes(){
        return this.signes;
    }

    //FONCTION TESTSIGNES

    testSignes(birthDate: String){

        var inputSignValue = '';
        var inputSignDesc = '';
        var dateInput = birthDate.date;
        //console.log('dateInput : '+dateInput);

        this.signes.forEach(function(signe){

            //console.log('dateDebut : 'moment(signe.dateDebut).isValid()); //True

            if(moment(dateInput, "DD-MM").isBetween(signe.dateDebut, signe.dateFin)){

                inputSignValue = signe.nameSign;
                inputSignDesc = signe.descSign;
            }

        });

        return [inputSignValue, inputSignDesc];
    }

}

//Classe Signe
export class Signe {

    nameSign: String;
    descSign: String;
    dateDebut: String;
    dateFin: String;

    constructor(nameSign: String, descSign: String, dateDebut: String, dateFin: String){
        this.nameSign = nameSign;
        this.descSign = descSign;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

}