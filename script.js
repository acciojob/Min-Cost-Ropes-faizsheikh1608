function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a, b) => a - b);

    let totalCost = 0;

    // While there are more than one rope
    while (arr.length > 1) {
        // Take the two smallest ropes
        const first = arr.shift();
        const second = arr.shift();

        // Combine them
        const cost = first + second;
        totalCost += cost;

        // Insert the combined rope back and sort
        arr.push(cost);
        arr.sort((a, b) => a - b); // Resort the array
    }

    return totalCost;
}

module.exports=mincost;
