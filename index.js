function distanceFromHqInBlocks(pickLocation){
 const headquarters = 42
 const distanceFromHqInBlocks = Math.abs(headquarters - pickLocation)
 return distanceFromHqInBlocks
 }

function distanceFromHqInFeet(pickLocation){
    const sizeofblock = 264
    const headquarters = 42
    const distanceFromHqInBlocks = Math.abs(headquarters - pickLocation)
    const distanceFromHqInFeet = distanceFromHqInBlocks * sizeofblock
    return distanceFromHqInFeet
}
function distanceTravelledInFeet(start, destination){
    const distanceTravelledInFeet = Math.abs(start - destination) * 264
    return distanceTravelledInFeet
}
function calculatesFarePrice(start, destination){
    const distanceTravelledInFeet = Math.abs(start - destination) * 264
    if (distanceTravelledInFeet <= 400){
        return 0
    }else if(distanceTravelledInFeet > 400 && distanceTravelledInFeet<= 2000){
        const fareprice = 0.02 * (distanceTravelledInFeet - 400)
        return fareprice
    }else if(distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}