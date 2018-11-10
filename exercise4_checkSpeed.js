/*
1. Print out 'Ok' if speed is lower than speed limit plus the speed required to get a point.
2. Print out points if speed is higher than speed limit.
3. Print out 'Licence suspended' if points are more than 12.
4. Test different numbers around the borderlines: 
*/

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    
    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    if (points >= 12)
    console.log('Licence suspended');
    else
    console.log(`Points: ${points}`); 
}

checkSpeed(70);
checkSpeed(74.9);
checkSpeed(75);
checkSpeed(100);
checkSpeed(129);
checkSpeed(129.9);
checkSpeed(130);