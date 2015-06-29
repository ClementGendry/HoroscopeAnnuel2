//Classe qui check la date de l'input
export class InputService {

    birthDate:  Date;

    constructor(){
    }

    // récupère la valeur des inputs
    getInputDates(){
        return this.birthDate;
    }

    setDate(date: Date) {
        this.birthDate = <Date> new BirthDate(date);
    }

}

//Classe BirthDate
export class BirthDate {

    date: Date;

    constructor(date: Date){
        this.date = date;
    }

}

