# Sudoku-Solver

# Description
This solver uses a backtracking algorithm

Create a recursive function that takes a grid.
Check for any unassigned location. If present then assign a number from 1 to 9.
Create a function that checks after assigning the current index the grid becomes unsafe or not. This involves checking the number in given row, given column or the given subMatrix.
If any recursive call returns true, then recursively call the function for next empty box. If no recursive call returns true then return false.
If there is no unassigned location then return true.

# Live Link
Link: https://sudoku-sol-ketan.netlify.app

# Screenshot
![image](https://user-images.githubusercontent.com/68148063/208246252-cd5c2f4f-718b-45b7-b7bc-1b5c4793ace0.png)
