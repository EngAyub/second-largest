// Good Luck 💪🏾
function secondLargest(ak) {
    ak.sort(function(a, b) {
      return b - a;
    });
    return ak[1];
  }
  console.log(secondLargest([44, 55, 66, 79, 88])); // 79
  console.log(secondLargest([10, 30, 86, 60, 90]));  //86
  console.log(secondLargest([67, 22, 19, 12, 80]));  // 67


