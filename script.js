var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}

var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}
			else
				arr[i][j].innerText = ''
		}
	}
}

let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

GetPuzzle.onclick = function () {
	var xhrRequest = new XMLHttpRequest()
	xhrRequest.onload = function () {
		var response = JSON.parse(xhrRequest.response)
		console.log(response)
		board = response.board
		FillBoard(board)
	}
	xhrRequest.open('get', 'https://sugoku.herokuapp.com/board?difficulty=random')
	//we can change the difficulty of the puzzle the allowed values of difficulty are easy, medium, hard and random
	xhrRequest.send()
}

SolvePuzzle.onclick = () => {
	SudokuSolver(board, 0, 0);
};

// function SudokuSolver(board, i, j, n) {
// 	// Write your Code here
// }

function isValid( board,i, j, num)
{
    // Row and col check

    for(let x=0;x<9;x++)
    {
        if(board[i][x]==num || board[x][j]==num)
        {
            return false;
        }
    }

	//box check
    let rn= Math.sqrt(9);
    let si=i-i%rn;
    let sj=j-j%rn;

    for(let x=si;x< si+rn; x++)
    {
        for(let y=sj;y< sj+rn; y++)
        {
            if(board[x][y]==num)
            {
                return false;
            }
        }
    }
    return true;

}
function SudokuSolver(board, i, j)
{
    //base
    if(i==9)
    {
        //Print(board,n)
		FillBoard(board)
        return true;
    }
    //if we are outside board
    if(j==9)
    {
        return SudokuSolver(board,i+1,0);
    }

    // if cell is already filled -> just move ahead
    if(board[i][j]!=0)
    return SudokuSolver(board,i,j+1);

    // we try to fill cell with an appropriate number
    for(let num=1;num<=9;num++)
    {
        //check num can be filled 
        if(isValid(board,i,j,num))
        {
            board[i][j]=num;
            let subAns=SudokuSolver(board,i,j+1);
            if(subAns)
            {
                return true;
            }
            // Backtracking
            board[i][j]=0;
        }
    }
    return false;
}
