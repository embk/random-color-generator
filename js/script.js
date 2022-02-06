function changeBackground() {

    myColors = '#' + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(6, '0');

    const bodyColor = document.querySelector('body');

    bodyColor.style.backgroundColor = myColors;

    const hexText = document.querySelector('h1');

    hexText.textContent = myColors;

    console.log(myColors);
}

changeBackground();


document.getElementById("col-btn").addEventListener("click", changeBackground);