'use strict';

class Pirates {
    constructor(name) {
        this.name = name;
        this.counter = 0;
        this.status = 'Live';
        this.captain = false;
    }

    drinkSomeRum() {
        counter++;
    }

    howsItGoingMate() {
        if (this.counter <= 4) {
            console.log('Pour me anudder!');
        }
        else if (this.counter > 20) {
            this.status = 'Dead';
            console.log('he\'s dead.');
        }
        else {
            this.status = 'Passed Out';
            console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
        }
    }

    brawl(x) {
        if (x.status = 'live') {
            if (Math.random() < 0.33333) {
                this.status = 'Dead';
            }
            else if (Math.random() > 0.66666) {
                x.status = 'Dead';
            }
            else {
                this.status = 'Passed Out';
                x.status = 'Passed Out';
            }
        }



    }
    isCaptain() {
        this.captain = true;
    }
    // die(){
    //     if (this.counter > 20){
    //         console.log('he\'s dead.');
    //     }
    // }
}



module.exports = Pirates;