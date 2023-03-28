let puzzle = new Array(9);

function create_puzzle(){
    for (var i = 0; i < puzzle.length; i++) {
        puzzle[i] = new Array(9).fill(0);
    }
}

function create_sudoku(){
    create_puzzle();
    
    let rand_number;
    let ok;
    for(let i = 0;i<9;i++){
        for(let j=0;j<9;j++){
            ok = true;
            rand_number = Math.floor(Math.random() * 9 + 1);

            // 가로 체크
            for (k = 0; k < j; k++) {
                if (puzzle[i][k] == rand_number) {
                    --j;
                    ok=false;
                    break;
                }
            }

            // 세로 체크
            for (k=0; k<i;k++){
                if(puzzle[k][j] == rand_number){
                    --j;
                    ok=false;
                    break;
                }
            }

            // 3x3 체크
            let sero = Math.floor(i/3)*3;
            let garo = Math.floor(j/3)*3;

            for(x = sero; x<sero+3; x++){
                for(y = garo; y<garo+3; y++){
                    if((x==i) && (y==j)) continue;
                    if(puzzle[x][y] == rand_number){
                        --j;
                        ok=false;
                        break;
                    }
                    if(ok==false) break;
                }
            }

            if(ok) puzzle[i][j] = rand_number;
        }
    }
}


function generateTable() {
  create_sudoku();

  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (var i = 0; i < 9; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 9; j++) {
          var cell = document.createElement("td");
          cell.textContent = puzzle[i][j];
          row.appendChild(cell);
      }
      tableBody.appendChild(row);
  }
}
