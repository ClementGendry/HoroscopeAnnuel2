//IMPORT D'INPUTSERVICE ??
import {InputService, BirthDate} from 'inputService';

//Classe qui donne action aux Signes et leurs dates
export class SigneService {

    signes:  Array<Signe> = [];

    constructor(){
        this.signes.push(new Signe("belier", moment('21-03', 'DD-MM'), moment('20-04', 'DD-MM') ));
        this.signes.push(new Signe("taureau", moment('21-04', 'DD-MM'), moment('21-05', 'DD-MM') ));
        this.signes.push(new Signe("gemeaux", moment('22-05', 'DD-MM'), moment('21-06', 'DD-MM') ));
        this.signes.push(new Signe("cancer", moment('22-06', 'DD-MM'), moment('22-07', 'DD-MM') ));
        this.signes.push(new Signe("lion", moment('23-07', 'DD-MM'), moment('22-08', 'DD-MM') ));
        this.signes.push(new Signe("vierge", moment('23-08', 'DD-MM'), moment('22-09', 'DD-MM') ));
        this.signes.push(new Signe("balance", moment('23-09', 'DD-MM'), moment('22-10', 'DD-MM') ));
        this.signes.push(new Signe("scorpion", moment('23-10', 'DD-MM'), moment('22-11', 'DD-MM') ));
        this.signes.push(new Signe("sagittaire", moment('23-11', 'DD-MM'), moment('21-12', 'DD-MM') ));
        this.signes.push(new Signe("capricorne", moment('22-12', 'DD-MM'), moment('20-01', 'DD-MM') ));
        this.signes.push(new Signe("verseau", moment('21-01', 'DD-MM'), moment('19-02', 'DD-MM') ));
        this.signes.push(new Signe("poisson", moment('20-02', 'DD-MM'), moment('20-03', 'DD-MM') ));
    }

    getSignes(){
        return this.signes;
    }

    //FONCTION TESTSIGNES

    testSignes(birthDate: String){

        var dateInput = birthDate.date;
        //console.log('dateInput : '+dateInput);

        this.signes.forEach(function(signe){

            //console.log('dateDebut : 'moment(signe.dateDebut).isValid()); //True

            if(moment(dateInput, "DD-MM").isBetween(signe.dateDebut, signe.dateFin)){
                console.log(signe.nameSign+ '  YES');
                return signe.nameSign;
            } else {
                console.log(signe.nameSign + '  NOPE');
            }

        });

        return ;
    }

}

//Classe Signe
export class Signe {

    nameSign: String;
    dateDebut: String;
    dateFin: String;

    constructor(nameSign: String, dateDebut: String, dateFin: String){
        this.nameSign = nameSign;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

}