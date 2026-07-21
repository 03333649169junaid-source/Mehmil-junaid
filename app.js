//let fleet = ["Ship1","Ship2","Ship3","Ship4"];
//fleet.push("Ship5");
//fleet.pop ();
//fleet.unshift("ScoutShip");

//fleet.shift();

//let newFleeet =fleet.slice(1 , 3);

//fleet.splice(2 , 1 , "TreasureShip");

//console.log(newFleeet);
//console.log(fleet);

//challenge2

//let windSpeed = 80;
//let waveHeight = 6;
//let fuel = 20;

//if (windSpeed > 70 && fuel < 30){
   // console.log("Dock immediately");
//}
//else if (waveHeight > 5 || windSpeed != 0){
   // console.log("Full speed ahead");
//}
//challenge3

//let enemyShips = ["Enemy1","Enemy2","Enemy3"];

//for (let i = 0 ;i < enemyShips.length; i++){
    //console.log("Attack " + enemyShips[i] + "!");
//}
//chalenge4

//let enemySquadrons = [["E1" ,"E2" ,"E3" ,"E4" ,"E5"]];

//for(let i = 0; i < enemySquadrons.length; i++){
   // for(let m = 0; m < enemySquadrons[i].length; m++){
      //  console.log("Attack " + enemySquadrons[i][m] + "!")
   // }
//}
//final task

let fleet =["Ship1","Ship2","Ship3","ship4"];

for  (let i = 0; i < fleet.length; i++){
    if (fleet[i] ==="Ship2"){
        console.log(fleet[i] = "survived!");
    }
}

fleet.splice(1 , 1);

console.log("Ships survived: " + fleet.length);