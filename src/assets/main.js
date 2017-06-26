let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    if(answer == '' || attempt == ''){
      setHiddenFields
    }
}

function setHiddenFields (){
  //Set answer to integer between 0-9999
  answer = Math.floor(Math.random()*10000);

  //set answer to string and add zeroes if needed
  answer = answer.toString()

  while (answer.length < 4){
    answer = '0' + answer;
  }
  //set attemnts to 0
  attempt = 0;


}
