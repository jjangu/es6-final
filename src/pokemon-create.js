'use strict';

const DEFAULT_LVL_INT = 1;

module.exports = (function (startingLevel) {
    const Pokemon = function(species, evolvesAt, evolvesTo, canEvolve) {
        let evolveIndex = 0;
        this.level = startingLevel;
        this.species = species;
        this.evolvesAt = evolvesAt;
        this.evolvesTo = evolvesTo;
        this.canEvolve = canEvolve;
        this.images = [];
        if ( this.images > 0 ) {
            this.imageSrc = this.images[evolveIndex];
        }
        
        // this.images
        // this.imageSrc = this.images[this.evolveIndex];
        // this.imageSrc = this.images[evolveIndex];

        this.eat = function (food) {
            this.level += food.level;
            if(this.canEvolve > 0 && this.level >= this.evolvesAt[evolveIndex]) {
                this.species = this.evolvesTo[evolveIndex];

                evolveIndex++;
                this.imageSrc = this.images[evolveIndex];

                this.canEvolve--;
            }
        };
    };

    const Bulbasaur = function() {
        Pokemon.call(this);
        let evolveIndex = 0;
        this.species = 'Bulbasaur';
        this.evolvesAt = [16,32];
        this.evolvesTo = ['Ivysaur', 'Venusaur'];
        this.canEvolve = 2;
        this.images = ['../assets/img/Bulbasaur.gif', '../assets/img/Ivysaur.gif', '../assets/img/Venusaur.gif'];
        this.imageSrc = this.images[evolveIndex];
        this.attack = function() {
            // console.log('Razor Leaf');
        };
        
    };

    const Charmander = function() {
        Pokemon.call(this);
        let evolveIndex = 0;
        this.species = 'Charmander';
        this.evolvesAt = [16,36];
        this.evolvesTo = ['Charmeleon', 'Charizard'];
        this.canEvolve = 2;
        this.images = ['../assets/img/Charmander.gif', '../assets/img/Charmeleon.gif', '../assets/img/Charizard.gif'];
        this.imageSrc = this.images[evolveIndex];
        this.attack = function() {
            // console.log('Flamethrower');
        };
        
    };

    const Squirtle = function() {
        Pokemon.call(this);
        let evolveIndex = 0;
        this.species = 'Squirtle';
        this.evolvesAt = [16,36];
        this.evolvesTo = ['Wartortle', 'Blastoise'];
        this.canEvolve = 2;
        this.images = ['../assets/img/Squirtle.gif', '../assets/img/Wartortle.gif', '../assets/img/Blastoise.gif'];
        this.imageSrc = this.images[evolveIndex];
        this.attack = function() {
            // console.log('Flamethrower');
        };
        
    };

    Bulbasaur.prototype = Pokemon;
    Charmander.prototype = Pokemon;

    return {
        Pokemon,
        Bulbasaur,
        Charmander,
        Squirtle
    };


})(DEFAULT_LVL_INT);


