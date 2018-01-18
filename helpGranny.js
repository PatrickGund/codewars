function tour(friends, fTowns, distTable) {
  let sum = 0;
  let distances = [];
  function rightTri (a,b) {
  return Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
}
let towns = fTowns1.map(town => {
  if(friends.includes(town[0])) return town[1];
})
towns.forEach(town => {
  let val = distTable.indexOf(town);
  if(val > -1) distances.push(distTable[val+1]);
})
  for(let i = 0; i<distances.length-1; i++){
   sum += rightTri(distances[i+1], distances[i]);
  }
  sum += distances[0];
  sum += distances[distances.length-1];
    return Math.floor(sum);
}