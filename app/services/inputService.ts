//Classe qui check la date de l'input
export class InputService {

    birthDate:  BirthDate;

    constructor(){
    }

    // récupère la valeur des inputs
    getBirthDate(){
        return this.birthDate;
    }

    setDate(date: String) {
        this.birthDate = new BirthDate(date);
        return this.birthDate;
    }

}

//Classe BirthDate
export class BirthDate {

    date: String;

    constructor(date: String){
        this.date = date;
    }

}

