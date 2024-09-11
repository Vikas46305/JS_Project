let count;
function Start(){
    let x = 0;
    count = setInterval(() => {
    x=x+1
    document.getElementById('text').innerHTML = x
}, 1000);
}

function Stop(){
    clearInterval(count)
    document.getElementById('text').innerHTML = 0
}
