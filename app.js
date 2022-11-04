/*
1. The player's ship should be constant in terms of health and fire power 
2.   The Accuracy for the player ship should be randomized in a given range
3.   It shouls have a mid battle feature of retreating and continue button for every 
battle that happens
4.Enemy ship should only be repoduced 7 or 8 times
5.  Randomizing the 3 aspects
            -hull health
            -damage/fire power
            - accuracy -- this should always change it is alwyas chaging in every ship 
                ***Each randomizer should be a seperate function - 3 in total
6.Two classes should be the player class and the enemey class
7. the player class should have the stats, retreat method, a push forward/continue 
method 
8. UI has to interact with the js file and resulting in the file giving the appropiate
response
9. Function where the attack works then after that the other function where the enemy 
automatically attack the player after the player attacks
--------No right The function that is stated in 9 it usseless just make a comparision function and it attacks which ever is less than




*/

const enemies = [];
const currentTarget = [];


class playerShip {
    constructor(){
    this.hull = 20;
    this.firePower = 5;
    this.accuracy = .7;

return "Health - " + playerShip.hull + ', Fire Power - ' + playerShip.firePower + ', Accuracy - ' + playerShip.accuracy
    }
}

function createEnemy(name){
    let shipName = name;
   
    function hull(min, max){
        return Math.floor(Math.random()* (max - min) + min);
    }
           let hullHealth =  hull(3, 6);
              
         function firePower(min, max){
        return Math.floor(Math.random()* (max - min) + min);
     }
           let Power = firePower(2, 4);
             
         function accuracy(){
        return (Math.floor(Math.random() * 3 + 6) / 10);
    }
           let aim =  accuracy()

     return shipName + " : " + "Health - " + hullHealth + ", Damage - " + Power + ", Accuracy - " + aim
            
}


let enemy1 = createEnemy('Destroyer');
let enemy2 = createEnemy('Alpha');
let enemy3 = createEnemy('Beta');
let enemy4 = createEnemy('Zeta');
let enemy5 = createEnemy('Urnas');
let enemy6 = createEnemy('Appolo');
let enemy7 = createEnemy('Zeena');

let USS_Schwarzenegger = new playerShip;

let health = USS_Schwarzenegger.hull;
let damage = USS_Schwarzenegger.firePower;
let sight = USS_Schwarzenegger.accuracy;

document.querySelector(".playerStats").innerHTML = 'Hull: ' +  health, "Fire Power: " + damage, 'Accuracy: ' + sight; 



// console.log(enemy1);
// console.log(enemy2);
// console.log(enemy3);
// console.log(enemy4);
// console.log(enemy5);
// console.log(enemy6);
// console.log(enemy7);

enemies.push(enemy1)
enemies.push(enemy2)
enemies.push(enemy3)
enemies.push(enemy4)
enemies.push(enemy5)
enemies.push(enemy6)
enemies.push(enemy7)

console.log(enemies)

console.log(USS_Schwarzenegger);


// function attack (){
//     if(/* Player ship is greater than enemy ship*/){
//         // Player fire power is subtracted from the hull of the enemy 
//     } 
//     else(){

//     }
//     else if (//enemy ship is greater than enemy ship){
//         // Enemy fire power is subtracted from the hull of the enemy
//     }


    
// }


function retreat (/*The pattern should be when the enemyship is 0  */ ){
//It should be 
}

function onWards(){

}

//when the enemyship pass 7 ships the whole code as a whole should produce a modal where it states that it is over now
//What modal would it be should it reset or pause 


