const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);




const printReadmeData = readmeDataArr => {
    for (let i= 0; i < readmeDataArr.length; i++){

    console.log(readmeDataArr[i]);
    }
    console.log('================');

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
  };
  
  printReadmeData(readmeDataArgs);