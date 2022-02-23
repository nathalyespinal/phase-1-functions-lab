const hq = 42
function distanceFromHqInBlocks(pickuplocation){
    if (pickuplocation <= hq){
    return hq - pickuplocation;
    } else if (pickuplocation > hq ) {
    return pickuplocation -hq;
}
}


function distanceFromHqInFeet(locationInBlocks) {
return distanceFromHqInBlocks(locationInBlocks) * 264
}



function distanceTravelledInFeet (start, destination) {
return Math.abs(destination - start) * 264 
}


function calculatesFarePrice(start, destination) {

// four potential return values, based on distance travelled in feet
// calculate the distance traveled in feet

let feetTravelled = distanceTravelledInFeet(start, destination)

if(feetTravelled<=400){
    return 0
}else if (feetTravelled>=400 && feetTravelled<=2000){
    return (feetTravelled - 400 ) * 0.02
}else if (feetTravelled >=2000 && feetTravelled<2500){
    return 25
}else { 
  return 'cannot travel that far'
}



// const fare = distanceTravelledInFeet - 400 * .02


// if (distace >= 2500)
// return 'cannot travel that far'
}

// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. 
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
// Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
//Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.


// //1320 feet 



