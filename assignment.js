// feetToMile (assignment No: 01)
function feetToMile(feet){
  var mile = feet / 5280;
  return mile;
}
var getmile = feetToMile(5280);
console.log(getmile);


// woodCalculator (assignment No: 02)
function woodCalculator(chair, table, bed){
  var woodInChair = chair * 1;
  var woodInTable = table * 3;
  var woodInBed = bed * 5;
  var totalWood = woodInChair + woodInTable + woodInBed;
  return totalWood;
}
var woodresult = woodCalculator(5, 10, 2);
console.log(woodresult);

// brickCalculator (assignment No: 03)

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
console.log(tinier);