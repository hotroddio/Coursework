// 1. Write a code to create a new stack and push each character of the string onto the stack. Then, pop each character from the stack to get the reversed string.

const stack = new Stack();
const inputString = "Hello World";

for (let i=0; i < inputString.length; i++) {
    stack.push(inputString[i]);
}

let reversedString = "";

while (!stack.isEmpty()) {
    reversedString += stack.pop();
    }

    console.log(reversedString);

// 2.  Write a code to create a queue and add elements. Remove an element from the front of the queue and view the first element in the queue without removing it. Then, check if the queue is empty.

let queue = [];

// add elements to queue

queue.push(10);
queue.push(20);
queue.push(30);

// remove an element from the from of the queue.

let firstElement = queue.shift();
console.log(firstElement);

// view the first element in the queue without removing it

let frontElement = queue[0];
console.log (frontElement);

// Check if the queue is empty

let queueIsEmpty = queue.length === 0;
console.log(queueIsEmpty);

// 3.Complete the below-given code for bubble sort: 

function bubbleSort(arr) {
    var len = arr.length;
    for (var i=0; i < len -1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}