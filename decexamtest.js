function solution(A) {
  let maxSum = 0;
  let convertedArr = []; //Array to contain the full array after processing
  let commonSum = 0; //to add the individual pairs
  let arrOfSums = [];

  for (let i = 0; i < A.length; i++) {
    let convertedToString = A[i].toString(); //convert each array element to string
    let splitStrings = convertedToString.split(""); // split the resulting string into individual values
    // console.log(splitStrings);
    // let commonSum = 0;
    let joinedBack = []; //array to hold the split values when joined back together to be number pairs (still strings)
    let joinedBackConvToNum = []; //array to hold the number pairs after being converted back to number

    commonSum = 0;
    for (let j = 0; j < splitStrings.length; j++) {
      let convertedBackToNum = +splitStrings[j]; //convert the number pair strings to number

      commonSum += convertedBackToNum; //find the sum of each number pair

      // console.log("convertedBackToNum: " + convertedBackToNum);
      joinedBack = splitStrings.join(""); //join the number pair strings back together
      // console.log("when j is " + j + " " + "commonSum is " + commonSum);
      // return commonSum;
    }
    joinedBackConvToNum = +joinedBack;
    convertedArr.push(joinedBackConvToNum);
    arrOfSums.push(commonSum);

    // console.log(
    //   "when joined back is " + joinedBack + " common sum is ",
    //   commonSum
    // );
  }
  // console.log(convertedArr);
  // console.log(arrOfSums);
  for (let i = 0; i < convertedArr.length; i++) {
    if (arrOfSums[i] > arrOfSums[i + 1]) {
      maxSum = arrOfSums[i];
      convertedArr[i];
      console.log(maxSum);
      console.log(convertedArr);
    }
  }
}

solution([51, 71, 17, 42]);
// solution([42, 33, 60]);
// solution([51, 32, 43]);
