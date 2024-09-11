let num = 0;
function Add(){
    num = num+1
    document.getElementById('text_area').innerHTML = num
}

function Sub(){
    if(num>0){
        num = num-1
        document.getElementById('text_area').innerHTML = num
    }
    else{
        const a = setInterval(() => {
            document.getElementById('invalid').style.visibility = "visible"
        }, 200);

        setTimeout(() => {
            clearInterval(a)
            document.getElementById('invalid').style.visibility = "hidden"
        }, 1500);
    }
}