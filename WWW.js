var title = document.createElement(`div`);
title.innerHTML = `<div class="p1"><b><h1>Tic-Tac-Toe</h1></b></div>`;
document.body.append(title);

var nonscript = document.createElement(`noscript`);
nonscript.innerHTML = `Please on JS`;
document.body.append(nonscript);

var tittle = document.createElement(`title`);
tittle.innerHTML = `Tic-Tac-Toe`;
document.head.append(tittle);

// Попытка добавления поля в js

  var field1 = document.createElement(`table`)
  field1.id = "field1";
  var i = 1
  field1.innerHTML = `
  <tr>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
  </tr>
  <tr>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
  </tr>
  <tr>
    <td><div></div></td>
    <td><div></div></td>
    <td><div></div></td>
  </tr>`
   while(i <= 3 )
   {
    document.body.append(field1);
    i++;
   }

// Функция добавления элементов на поле

var cells = document.querySelectorAll('#field1 td');
var currentPlayer = "☓";
var gameOver = false;

var button12 = document.createElement('div');
  button12.innerHTML = '<button type="button" class="btn btn-outline-danger">Restart</button>';
  button12.id = `button13`;
  button12.addEventListener('click', function() {
    // Получаем все ячейки на поле
    var cells1 = document.querySelectorAll('#field1 td div');
  
    // Очищаем содержимое каждой ячейки
    cells1.forEach(function(cell) {
      cell.textContent = '';
      gameOver = false;
    });
  
    // Возвращаем текущему игроку значение "X"
    currentPlayer = "☓";
  });
  
  document.body.append(button12);

function footer()
{
  let footer1 = document.createElement(`footer`);
  footer1.innerHTML = " <b> @by Myxamor228 </b>";
  document.body.append(footer1);
}
footer()

var modal = document.createElement(`div`);
modal.innerHTML = `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Информация о победителе</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p id="winnerInfo">Победитель: <span id="winnerSpan"></span></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
    </div>
  </div>
</div>
</div>`;
document.body.append(modal);

function announceWinner(player) {
  var winnerSpan = document.getElementById('winnerSpan');
  var winnerInfo = document.getElementById('winnerInfo');
  winnerInfo.textContent = "Победитель: " + player;
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
}

function checkWinner(player) {
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some(function(combo) {
    var a = cells[combo[0]].textContent;
    var b = cells[combo[1]].textContent;
    var c = cells[combo[2]].textContent;

    return a === player && b === player && c === player;
  });
}

function checkTie() {
  var allCellsFilled = true;
  cells.forEach(function(cell) {
    if (cell.textContent === '') {
      allCellsFilled = false;
    }
  });

  if (allCellsFilled && !checkWinner("☓") && !checkWinner("O")) {
    player = "Ничья";
    announceWinner(player);
    // alert("Ничья!");
    gameOver = true;
  }
}

cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        var div = this.querySelector('div');
        if (div !== null && div.textContent === "" && !gameOver) {
            div.textContent = currentPlayer;
            if (checkWinner(currentPlayer)) {
                // alert(currentPlayer + " выиграл!");
                announceWinner(currentPlayer);
                 gameOver = true;
            } else {
                currentPlayer = (currentPlayer === "☓") ? "O" : "☓";
                checkTie();
            }
            
        }
    });
});