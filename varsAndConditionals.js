let jonSnowAttack = 35
let jamieLannisterAttack = 35

let jonSnowHealth = 100
let jonSnowDefense = 0



// create an if statement to console.log whomever has the higher attack value

if (jonSnowAttack > jamieLannisterAttack){
    console.log('Fatality: Jon Snow Wins')
} else if (jamieLannisterAttack < jonSnowAttack){
    console.log('Fatality: Jamie Lannister Wins')
} else {
    console.log('Draw')
}

jonSnowDefense =+ 10

// if else block to determine if jon can survive an attack from jamie
//if jon doesn't have enough health to survive, console.log his death
// otherwise, update his health to reflect the damange from the attack


if (jonSnowHealth <= jamieLannisterAttack -jonSnowDefense){
    console.log("Jon is dead")
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack
    console.log(jonSnowHealth)
}

// add 50 health to jon unless that will exceed 100, in which case, cap the healing value to 100

if (jonSnowHealth + 50 > 100){
    jonSnowHealth = 100
    } else {
        jonSnowHealth += 50
    }

let coinLandsHeads = true

// if(coinLandsHeads === false){
//     console.log("the fight continues")
// } else {
//     console.log("Jon makes his escape")
// }

// if(!coinLandsHeads){ // this is another way to write the above code
//     console.log("the fight continues")
// } else {
//     console.log("Jon makes his escape")
// }

// const myName = "Derrick"

// if(myName){
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }


// write a loop that will run 5 attacks on jon, accounting for his health and defense vs jamie's attack
// console.lot his health after each attack

// for (let n = 0; n < 5; n++){
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(jonSnowHealth)
// }

for (let n = 0; n < 5; n++){
   if(jonSnowHealth <= 0){
        console.log("jon has died")
   } else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(`Jon Snow's health has been reduced to ${jonSnowHealth}`)
   }
}


//write the above code as a while loop


while (jonSnowHealth > 0) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(jonSnowHealth)
    if (jonSnowHealth <= 0) {
        console.log("bye bye jon")
    }
}