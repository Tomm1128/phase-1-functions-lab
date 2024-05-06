// Code your solution in this file!



function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value

    if (distance >= 42){
        return distance - 42;
    } else{
        return 42 - distance;
    }
  }



  function distanceFromHqInFeet(distance) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    
    let blocks = distanceFromHqInBlocks(distance);
    return blocks * 264;
  }
  

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    let blockDiff;

    if (destination >= start){
        blockDiff = destination - start;
    } else{
        blockDiff = start - destination;
    }

    return blockDiff * 264;
  }



  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer

    let blockDiffFeet = distanceTravelledInFeet(start, destination);

    if (blockDiffFeet <= 400){
        return 0;
    } else if (blockDiffFeet > 400 && blockDiffFeet <= 2000){
        return (blockDiffFeet - 400) * .02;
    } else if (blockDiffFeet > 2000 && blockDiffFeet <= 2500){
        return 25;
    } else {
        return "cannot travel that far";
    }

  }



