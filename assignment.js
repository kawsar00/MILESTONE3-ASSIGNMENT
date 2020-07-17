// feetToMile (assignment No: 01)
function feetToMile(feet){
  var mile = feet / 5280;
  return mile;
}
var getmile = feetToMile(5280);
console.log("Your required Mile = " + getmile);


// woodCalculator (assignment No: 02)
function woodCalculator(chair, table, bed){
  var woodInChair = chair * 1;
  var woodInTable = table * 3;
  var woodInBed = bed * 5;
  var totalWood = woodInChair + woodInTable + woodInBed;
  return totalWood;
}
var woodresult = woodCalculator(10, 15, 2);
console.log("Total wood = " + woodresult + " cft");


// brickCalculator (assignment No: 03)
function brickCalculator(floorNo){
  var totalBricks;
  if(floorNo <=10){
    totalBricks = floorNo * 1000 * 15;
    return totalBricks;
  }
  else if(floorNo >10 && floorNo <=20){
    totalBricks = floorNo * 1000 * 12;
    return totalBricks;
  }
  else if(floorNo >20){
    totalBricks = floorNo * 1000 * 10;
    return totalBricks;
  }
}
var totalBrickResults = brickCalculator(15);
console.log("Total Brick is needed: "+ totalBrickResults);


// tinyFriend (assignment No: 04)
function tinyFriend(friendNames){
  var tiny = friendNames[0];
  for(var i = 0; i<friendNames.length; i++){
    var currentName = friendNames[i];
    if(currentName.length < tiny.length){
      tiny = currentName;
    }
  }
  return tiny;
}
var tinier = tinyFriend(["Rahim", "Rakibul", "Roky", "Rokimuzzaman", "Rafiul"]);
console.log("My tiny friends name is: " + tinier);