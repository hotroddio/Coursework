// Question 1
// Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions:

//   The opening brackets:

//   - Must match with the corresponding closing brackets of the same type

//   - Must be closed in the correct order

//   - Should have a corresponding opening bracket of the same type

const s = "({[{]})";

function correctChar(s) {
  const stack = [];
  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let openingChar = stack.pop();
      if (char === ")" && openingChar === "(") {
        continue;
      } else if (char === "}" && openingChar === "{") {
        continue;
      } else if (char === "]" && openingChar === "[") {
        continue;
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(correctChar(s));

// Question 2
// There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back.

// You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase.

// Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. If a person has no more tickets to buy, he or she will leave the line.

// Return the time spent for the individual at position k (0-indexed) to finish buying tickets.

// Example:

// Input: tickets = [2,3,2], k = 2
// Output: 6

function timeToBuyTickets(tickets, k) {
  // ticket.length is to verify a populated array & to iterate over the array length.
  const n = tickets.length;
  // queue returns an array with the numbers representing the index values of the length of n.
  const queue = Array.from({ length: n }, (_, i) => i); // Create an array representing the queue
  return recursionHelper(queue, tickets, k, 0);
}
function recursionHelper(queue, tickets, k, time) {
  if (queue.length === 0) {
    return time;
  }
  // queue = [0,1,2,3,4]
  const currentPerson = queue.shift(); // Get the front person from the queue
  // currentPerson = 0 and queue = [1,2,3,4]
  // currentPerson = 1 and queue = [2,3,4,0]
  // currentPerson = 2 and queue = [3,4,0,1]
  if (currentPerson === k && tickets[currentPerson] === 0) {
    return time; // Return the time if it's the target person
  }
  if (tickets[currentPerson] > 0) {
    // Reduce the number of tickets for the current person by one. tickets = [1,3,1,4,5]
    // Reduce the number of tickets for the current person by one. tickets = [1,2,1,4,5]
    // Reduce the number of tickets for the current person by one. tickets = [1,2,0,4,5]
    tickets[currentPerson]--;
    // taking currentPerson(0) & pushing it to the back of the queue array [1,2,3,4,0]
    // taking currentPerson(1) & pushing it to the back of the queue array [2,3,4,0,1]
    // taking currentPerson(1) & pushing it to the back of the queue array [3,4,0,1,2]
    queue.push(currentPerson); // Send the current person to the end of the queue
  }
  return recursionHelper(queue, tickets, k, time + 1); // Recursive call
}
// Example usage
const tickets = [2, 3, 1, 4, 5];
const k = 2;
const timeTaken = timeToBuyTickets(tickets, k);
//   console.log(Time taken for person at position ${k} to finish buying tickets: ${timeTaken} seconds);

//   Question 3
// You are given an array heights representing the heights of students in a class. The students are standing in a line, and their heights are listed in the order they appear from left to right. The school wants to arrange the students in a non-decreasing order by their heights. However, when they rearrange the students, a few may end up in different positions from their original positions.

// You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

// Example:

// Input: heights = [1,1,4,2,1,3]
// Output: 3

function heightChecker(heights) {
  let count = 0;
  let heightsCopy = heights.map((item) => item);
  heightsCopy.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== heightsCopy[i]) {
      count++;
    }
  }
  return count;
}

heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));
