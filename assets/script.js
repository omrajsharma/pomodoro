var min = 25;
var sec = 00;

// document.getElementById('counterCount').innerHTML = `${min}:${sec}`


function start(){
    interval = setInterval(() => {
        if(sec == 0){
            sec = 59;
            min--;
        }
        document.getElementById('counterCount').innerHTML= `${min}:${sec}`;
        sec--;
        if(min ==0 && sec == 0){
            stop();
            document.getElementById('counterCount').innerHTML = 'Woohoo 🎉';
        }
    }, 1000);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    stop();
    min = 25;
    sec = 0;
    document.getElementById('counterCount').innerHTML = '25:00';
}