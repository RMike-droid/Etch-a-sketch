const parent = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
    parent.appendChild(newDiv);
}