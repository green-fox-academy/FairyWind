// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %

for (let i = 1; i <= 8; i++){
    var chessBoard = '';
    for (let j = 1; j <= 8; j++){
       if((i + j) % 2 === 0){
           chessBoard += '%';
       }
       else{
           chessBoard += ' ';
       }
   }
   console.log(chessBoard);
}
