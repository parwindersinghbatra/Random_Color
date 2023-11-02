const ColorChange = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randonColor = "#" + randomNumber.toString(16)
    document.body.style.backgroundColor = randonColor
    document.getElementById('colortxt').innerText = randonColor
  
    // changeColor('yellow');
}       

