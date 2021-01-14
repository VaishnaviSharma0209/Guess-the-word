function nextpage(){
    var player_1=document.getElementById("Player1").value;
    var player_2=document.getElementById("Player2").value;
    localStorage.setItem("Player 1 name",player_1);
    localStorage.setItem("Player 2 Name",player_2);
    window.location="game_page.html";
}