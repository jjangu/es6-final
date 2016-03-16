'use strict';

const Main = require('./pokemon-create');

module.exports = {
    ToTheDom: function () {

        let box = document.getElementById('box');
        let myPokemon = document.createElement('div');

        let select = document.getElementById('inputPokemon');
        // console.log(select.options[select.selectedIndex].value);
        select.addEventListener('change', function() {
            let selectedValue = select.options[select.selectedIndex].value;
            if (selectedValue === 'Charmander') {
                // console.log('charmander');

                let whosThatPokemon = new Main.Charmander();

                let myPokemonImage = document.createElement('img');
                let myPokemonLevel = document.createElement('p');
                let myPokemonSpecies = document.createElement('p');
                let instructionsText = document.createElement('p');

                myPokemonImage.setAttribute('src', whosThatPokemon.imageSrc);
                // console.log(whosThatPokemon.imageSrc);
                myPokemonLevel.innerHTML = 'Level ' + whosThatPokemon.level;
                instructionsText.innerHTML = 'Click to feed 1 Rare Candy';
                myPokemonSpecies.innerHTML = 'Species: ' + whosThatPokemon.species;
                


                myPokemonImage.addEventListener('click', function(){
                    whosThatPokemon.eat({level:1});
                    myPokemonImage.setAttribute('src', whosThatPokemon.imageSrc);
                    myPokemonLevel.innerHTML = 'Level ' + whosThatPokemon.level;
                    myPokemonSpecies.innerHTML = 'Species: ' + whosThatPokemon.species;

                }, false);

                myPokemon.appendChild(myPokemonSpecies);
                myPokemon.appendChild(myPokemonLevel);
                myPokemon.appendChild(instructionsText);
                myPokemon.appendChild(myPokemonImage);

                
                
            }

            if (selectedValue === 'Bulbasaur') {
                let whosThatPokemon = new Main.Bulbasaur();
                
                let myPokemonImage = document.createElement('img');
                let myPokemonLevel = document.createElement('p');
                let myPokemonSpecies = document.createElement('p');
                let instructionsText = document.createElement('p');


                myPokemonImage.setAttribute('src', whosThatPokemon.imageSrc);
                myPokemonLevel.innerHTML = 'Level ' + whosThatPokemon.level.toString();
                instructionsText.innerHTML = 'Click to feed 1 Rare Candy';
                myPokemonSpecies.innerHTML = 'Species: ' + whosThatPokemon.species;
                

                myPokemonImage.addEventListener('click', function(){
                    whosThatPokemon.eat({level:1});

                    myPokemonImage.setAttribute('src', whosThatPokemon.imageSrc);
                    myPokemonLevel.innerHTML = 'Level ' + whosThatPokemon.level;
                    myPokemonSpecies.innerHTML = 'Species: ' + whosThatPokemon.species;

                }, false);

                myPokemon.appendChild(myPokemonSpecies);
                myPokemon.appendChild(myPokemonLevel);
                myPokemon.appendChild(instructionsText);
                myPokemon.appendChild(myPokemonImage);
                
            }

            if (selectedValue === 'Squirtle') {
                let whosThatPokemon = new Main.Squirtle();
                
                let myPokemonImage = document.createElement('img');
                let myPokemonLevel = document.createElement('p');
                let myPokemonSpecies = document.createElement('p');
                let instructionsText = document.createElement('p');


                myPokemonImage.setAttribute('src', whosThatPokemon.imageSrc);
                myPokemonLevel.innerHTML = 'Level ' + whosThatPokemon.level.toString();
                instructionsText.innerHTML = 'Click to feed 1 Rare Candy';
                myPokemonSpecies.innerHTML = 'Species: ' + whosThatPokemon.species;
                

                myPokemonImage.addEventListener('click', function(){
                    whosThatPokemon.eat({level:1});

                    myPokemonImage.setAttribute('src', whosThatPokemon.imageSrc);
                    myPokemonLevel.innerHTML = 'Level ' + whosThatPokemon.level;
                    myPokemonSpecies.innerHTML = 'Species: ' + whosThatPokemon.species;

                }, false);

                myPokemon.appendChild(myPokemonSpecies);
                myPokemon.appendChild(myPokemonLevel);
                myPokemon.appendChild(instructionsText);
                myPokemon.appendChild(myPokemonImage);
            }
        }, false);

        

        // box.innerHTML = '';
        box.appendChild(myPokemon);

    }
};