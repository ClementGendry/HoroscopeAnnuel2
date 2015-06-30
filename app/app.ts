/* --------------- IMPORTS --------------- */

/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, forwardRef, Parent} from 'angular2/angular2'; /*IMPORT DE FOREACH*/
import {ImageService, Image} from 'services/imageService';
import {InputService, BirthDate} from 'services/inputService';
import {SigneService, Signe} from 'services/signeService';


/* --------------- COMPONENT HOROSCOPE --------------- */

@Component({
    selector: "horoscope",
    appInjector: [ImageService, InputService]
})

@View({
    templateUrl: 'templates/main.html',
    directives: [forwardRef(()=>Result), NgFor],
})

class Horoscope {
    result: Result; /* DEF DU FILS : RESULT */

    inputService: InputService;
    birthDate: BirthDate;

    imageService: ImageService;
    images: Array<Image>;

    constructor(inputService: InputService, imageService: ImageService){

        this.inputService = inputService;
        this.birthDate = this.inputService.getBirthDate();

        this.imageService = imageService;
        this.images = this.imageService.getImage();
    }

    registerResult(result: Result) {
        this.result = result;
    }

    setDate(e, date: String){
        e.preventDefault();
        this.birthDate = this.inputService.setDate(date);
        console.log(this.birthDate);
        this.result.testSignes(this.birthDate);
    }

}


/* --------------- COMPONENT RESULT --------------- */

@Component({
	selector: "result",
    appInjector: [SigneService]
})

@View({
	templateUrl: 'templates/result.html',
    directives: [NgFor]
})

class Result{
    horoscope: Horoscope; /* DEF DU PARENT HOROSCOPE */

    signeService: SigneService;
    signes: Array<Signe>;

    constructor(signeService: SigneService, @Parent() horoscope: Horoscope){

        this.horoscope = horoscope;
        this.horoscope.registerResult(this);

        this.signeService = signeService;
        this.signes = this.signeService.getSignes();

    }

    testSignes(birthdate){
        console.log(birthdate);
        this.signeService.testSignes(birthdate);
    }


}

bootstrap(Horoscope);