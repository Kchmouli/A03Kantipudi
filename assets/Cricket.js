function calaverage(){
    let innings = parseInt(document.getElementById("innings").value);
    let runs = parseInt(document.getElementById("runs").value);
    let notouts = parseInt(document.getElementById("notouts").value);
    let ballsfaced = parseInt(document.getElementById("ballsfaced").value);
    if(innings == "" || runs == "" || ballsfaced == ""){
    alert("Please enter values. It shouldn't be blank!");
    throw Error("Value should'nt be empty");
    }
    if(innings <= 0 || runs <= 0 || ballsfaced <= 0){
    alert("Value shouldnt be 0 or negative number Please enter a positive number!")
    throw Error('Value shouldnt be 0 or negative number');
    }
    if(notouts < 0){
    alert ("Not outs shouldn't be negative!");
    throw Error("Value shouldn't be negative number");
    }
    if(notouts > innings){
    alert("Notouts cant be greater than no of innings Please enter valid input");
    throw Error("Not outs shouldn't be greater than innings")
    }
    let average = averagebatsman( runs, innings, notouts);
    (document.getElementById("ave").value) = average;
    let strikerate = ((runs/ballsfaced)*100).toFixed(2);
    (document.getElementById("SR").value)= strikerate;
}
function averagebatsman(runs, innings, notouts){
        return (runs/(innings-notouts)).toFixed(2);
}
function calaveragebowler(){
    let wickets = parseInt($("#wickets").val());
    let runsconceded = parseInt($("#runsconceded").val());
    let ballsbowled = parseInt($("#ballsbowled").val());
    if(wickets == "" || runsconceded == "" || ballsbowled == ""){
        alert("Please enter values. It shouldn't be blank!");
        throw Error("Value should'nt be empty");
        }
        if(ballsbowled <= 0){
        alert("Value shouldnt be 0 or negative number Please enter a positive number!")
        throw Error('Value shouldnt be 0 or negative number');
        }
        if(wickets < 0 || runsconceded < 0){
        alert ("Wickets and runsconceded shouldn't be negative!");
        throw Error("Value shouldn't be negative number");
        }
    let economy = (runsconceded/(ballsbowled/6)).toFixed(2);
    (document.getElementById("economy").value)=economy;
    let averageb = (runsconceded/wickets).toFixed(2);
    (document.getElementById("aveb").value)=averageb;
    let strikerateb = (ballsbowled/wickets).toFixed(2);
    (document.getElementById("SRb").value)=strikerateb; 
}
