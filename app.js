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

class playerShip {
    constructor(){
    this.hull = 20;
    this.firePower = 5;
    this.accuracy = .7;
    }
}

class enemyShip{
    constructor()

}

    function hull(min, max){
        return Math.floor(Math.random()* (max - min) + min);
    }
    
    console.log(hull(3, 6))
    
    function firePower(min, max){
        return Math.floor(Math.random()* (max - min) + min);
    }
    
    console.log(firePower(2, 4))
    
    function accuracy(min, max){
        // return Math.floor(Math.random()* (max - min) + min);
    }

    console.log(accuracy(.6, .8))





// class enemyShip {
//     constructor(){

//     }
// }


function attack (){
    if(/* Player ship is greater than enemy ship*/){
        // Player fire power is subtracted from the hull of the enemy 
    } 
    else(){

    }
    else if (//enemy ship is greater than enemy ship){
        // Enemy fire power is subtracted from the hull of the enemy
    }
     
        

        
    
}


function retreat (){

}

function onWards(){

}


//What modal would it be should it reset or pause 


