
// Abstract classes - No new object can be created from this class
// You can create a object from the class that has been inherited

abstract class TakePhotoMode {
    constructor(
        public camerMode: string,
        public filter: string
    ){}

    abstract getSepia(): void;

    getReelTime(): number {
        // some complex calcultation
        return 8;
    }
}

// subClass
class InstagramMode extends TakePhotoMode {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burts: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('Sepia')
    }
}

const take = new InstagramMode('test', 'filter', 3)
take.getReelTime(); 