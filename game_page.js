player1=localStorage.getItem("Player 1 name");
player2=localStorage.getItem("Player 2 Name");
console.log(player2 + player1);
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML= player1;
document.getElementById("player2_name").innerHTML= player2;
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("question").innerHTML="Question Turn:" + player1;
document.getElementById("answer").innerHTML="Answer Turn:" + player2;

function send_word(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);


    charAt1=word.charAt(1);
    console.log(charAt1);
    Divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(Divide_2);
    console.log(charAt2);
    Minus1=word.length-1;
    charAt3=word.charAt(Minus1);
    console.log(charAt3);


    remove1=word.replace(charAt1,"_ ");
    remove2=remove1.replace(charAt2,"_ ");
    remove3=remove2.replace(charAt3,"_ ");
    console.log(remove3);

    question="<h4 id='question'>Q:" +remove3+ "</h4>";
    input="<br>Answer<input type='text' id='input_box'>";
    Check="<br><br><button class='btn btn-danger' id='btn_check' onclick='check()'>Check</button>";
    row=question+input+Check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";
}
question_turn="player_1";
answer_turn="player_2";

function check(){
    get_answer=document.getElementById("input_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(question_turn=="player_1"){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else{
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
    }
    if (question_turn=="player_1"){
        question_turn="player_2";
        answer_turn="player_1";
        document.getElementById("question").innerHTML="Question Turn-" + player2;
        document.getElementById("answer").innerHTML="Answer Turn-" + player1;
    }
    else{
        question_turn="player_1";
        answer_turn="player_2";
        document.getElementById("question").innerHTML="Question Turn-" + player1;
        document.getElementById("answer").innerHTML="Answer Turn-" + player2;
    }
    document.getElementById("output").innerHTML="";
}