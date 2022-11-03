/*
1. The player's ship should be constant in terms of health and fire power 
2.   The Accuracy for the player ship should be randomized in a given range
3.   It shouls have a mid battle feature of retreating and continue button for every 
battle that happens
4.Enemy ship should only be repoduced 7 or 8 times
5.  Randomizing the 3 aspects
            -hull health
            -damage/fire power
            - accuracy
                ***Each randomizer should be a seperate function - 3 in total
6.Two classes should be the player class and the enemey class
7. the player class should have the stats, retreat method, a push forward/continue 
method 
8. UI has to interact with the js file and resulting in the file giving the appropiate
response
9. Function where the attack works then after that the other function where the enemy 
automatically attack the player after the player attacks



*/

class playerShip {
    constructor(){
    this.hull = 20;
    this.firePower = 5;
    this.accuracy = .7;
    }
}

function createEnemyShips(hull, firePower, accuracy){




}


// class enemyShip {
//     constructor(){

//     }
// }

function hullHealth(min, max){
    return Math.floor(Math.random()* (max - min) + min);
}

console.log(hullHealth(3, 6))

function firePower(min, max){
    return Math.floor(Math.random()* (max - min) + min);
}

console.log(firePower(2, 4))

function accuracy(min, max){
    // return Math.floor(Math.random()* (max - min) + min);
}

function retreat (){

}

function onWards(){

}

console.log(accuracy(.6, .8))

