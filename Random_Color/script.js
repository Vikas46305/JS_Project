function Change(){
    const first = Math.floor(Math.random()*250);
    const second = Math.floor(Math.random()*250);
    const third = Math.floor(Math.random()*250);
    document.getElementById('color-box').style.backgroundColor = `rgb(${first},${second},${third})`
    document.querySelector('h2').innerHTML = `rgb(${first},${second},${third})`
}