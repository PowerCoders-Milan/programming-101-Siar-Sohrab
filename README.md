## PseudoCode Excercises

in this module you'll learn and practice how to think like a developer and understand the art of decomposing problems.

## what is PseudoCode?

Pseudo-code is a "language" where you can write all of your coding logic without writing one line of language-specific code. Remember that you're here to learn how to code, not a specific language. 

That's why understanding how to decompose the problem it's really important, it's exactly what a developer has to be good at, this process of problem-solving can be applied to any coding language then.

### how to solve excercises

1. READ THE PROBLEM until you can explain it to your buddy in :uk:
2. CONTSTRAINTS
   1. find your constraints
   2. write them down
   3. order them from the most to the less general
3. LIST OF ACTIONS
   1. think all the possible actions
   2. write them down
   3. order them from the first one to the last one that has to be executed
4. GENERALIZE ACTIONS
5. WRITE THE SOLUTION

### Crossing The River

```
A farmer with a fox, a goose and a sack of corn needs to cross a river.
The farmer has a rowboat, but there is room for only the farmer and one of his three items.
Unfortunately, both the fox and the goose are hungry.
The fox cannot be left alone with the goose, or the fox will eat the goose.
The goose cannot be left alone with the corn, or the goose will eat the corn.
```
How does the farmer get everything across the river?

#### BLOCKLY

![Solution on Blockly](https://github.com/PowerCoders-Milan/introduction-to-programming/blob/main/blockly.png)

[View it on Blockly](https://blockly-demo.appspot.com/static/demos/code/index.html?lang=en#yck22k)

#### pseudocode
```javascript
//crossing_river.js
//insert your pseudocode below
/* 
1. Transport the goose to the other side
2. Row back alone
3. Transport the fox to the other side
4. Take goose back to original side
5. Transport the sack of corn to the other side (leave goose behind)
6. Row back alone
7. Transport the goose to the other side
*/

//paste your code below
var side, leftSide, rightSide, item, goose, fox, sack_of_corn;

// Describe this function...
function crossTheRiver() {
  window.alert('crossing the river');
}

// Describe this function...
function takeItem(side) {
  window.alert('taking Item');
  item = leftSide.shift();
}

// Describe this function...
function leaveItem(side) {
  window.alert('leaving Item');
  side.push(item);
}


leftSide = [goose, fox, sack_of_corn];
rightSide = [];
while (leftSide) {
  if (leftSide[0] == sack_of_corn && item == goose) {
    leaveItem(leftSide);
  }
  takeItem(leftSide);
  crossTheRiver();
  leaveItem(rightSide);
  if (rightSide[0] == goose && rightSide[1] == fox) {
    takeItem(rightSide);
  }
  crossTheRiver();
}
```

### Have a Good Work!!!
