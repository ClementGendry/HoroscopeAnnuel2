//Classe qui donne action aux images stockées
export class ImageService {

    images:  Array<Image> = [];
    constructor(){
        this.images.push(new Image("/img/back.jpg"));
        this.images.push(new Image("/img/balance.png"));
        this.images.push(new Image("/img/belier.png"));
        this.images.push(new Image("/img/cancer.png"));
        this.images.push(new Image("/img/capricorne.png"));
        this.images.push(new Image("/img/gemeaux.png"));
        this.images.push(new Image("/img/lion.png"));
        this.images.push(new Image("/img/poisson.png"));
        this.images.push(new Image("/img/sagittaire.png"));
        this.images.push(new Image("/img/scorpion.png"));
        this.images.push(new Image("/img/taureau.png"));
        this.images.push(new Image("/img/verseau.png"));
        this.images.push(new Image("/img/vierge.png"));
    }

    getImage(){
        return this.images;
    }

}

//Classe Image
export class Image {

    src: String;

    constructor(src: String){
        this.src = src;
    }

}