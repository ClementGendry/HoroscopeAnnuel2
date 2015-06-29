//IMPORT D'INPUTSERVICE ??
import {InputService, BirthDate} from 'inputService';

//Classe qui donne action aux Signes et leurs dates
export class SigneService {

    signes:  Array<Signe> = [];

    constructor(){
        this.signes.push(new Signe("belier", <Date>'21-03' , <Date>'20-04'));
        this.signes.push(new Signe("taureau", <Date>'21-04', <Date>'21-05'));
        this.signes.push(new Signe("gemeaux", <Date>'22-05', <Date>'21-06'));
        this.signes.push(new Signe("cancer", <Date>'22-06', <Date>'22-07'));
        this.signes.push(new Signe("lion", <Date>'23-07', <Date>'22-08'));
        this.signes.push(new Signe("vierge", <Date>'23-08', <Date>'22-09'));
        this.signes.push(new Signe("balance", <Date>'23-09', <Date>'22-10'));
        this.signes.push(new Signe("scorpion", <Date>'23-10', <Date>'22-11'));
        this.signes.push(new Signe("sagittaire", <Date>'23-11', <Date>'21-12'));
        this.signes.push(new Signe("capricorne", <Date>'22-12', <Date>'20-01'));
        this.signes.push(new Signe("verseau", <Date>'21-01', <Date>'19-02'));
        this.signes.push(new Signe("poisson", <Date>'20-02', <Date>'20-03'));
    }

    getSignes(){
        return this.signes;
    }

    //FONCTION TESTSIGNES

    testSignes(){

        this.signes.forEach(function(){
            if(moment(this.birthDate).isBetween(this.signes.dateDebut, this.signes.dateFin, 'month','day')){
                alert(this.signes.nameSign);
                /*return this.signes.nameSign;*/
            }
        });

    }

}

//Classe Signe
export class Signe {

    nameSign: String;
    dateDebut: Date;
    dateFin: Date;

    constructor(nameSign: String, dateDebut: Date, dateFin: Date){
        this.nameSign = nameSign;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

}