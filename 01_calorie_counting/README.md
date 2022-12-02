# [Day 1: Calorie Counting](https://adventofcode.com/2022/day/1)

## Part 1

For the first part of this challenge I need to do the following:

1. Read in the input file.

For this, I learned about the node.js fs.readFileSync method. I was originally trying to just do fs.readFile, but found that that was happening asynchronously. Wasn't about about deal with that.

2. Make array of arrays by separating by line break.

Did this using the .split() method. I did it twice.
    - Once on a double new line (\n\n) for the line breaks
    - Again on the single new lines

This left me with an array of arrays where each array was a single elf. These were all string values though, so I had to go through and parse them back to integers.

3. Sum each array.

Did this using the .reduce() method to get the value for each elf

4. find the largest.

Found I could do this by just using the spread operator, and then calling Math.max() on it.

### Part 2