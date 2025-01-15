function turnon() {
   document.getElementById('myImage').src = 'lighton.png';
   document.getElementById('myImage1').src = 'lightoff.png';
   let btn2 = document.getElementById('btn2');
   btn2.innerHTML = 'Turn On';

   let btn3 = document.getElementById('btn3');
   btn3.innerHTML = 'Turn Off';
   btn3.style.backgroundColor = 'red';
   btn2.style.backgroundColor = 'green';


}
function turnoff() {
   document.getElementById('myImage').src = 'lightoff.png';
   document.getElementById('myImage1').src = 'lighton.png';
   let btn2 = document.getElementById('btn2');
   btn2.innerHTML = 'Turn Off';

   let btn3 = document.getElementById('btn3');
   btn3.innerHTML = 'Turn On';

   btn3.style.backgroundColor = 'green';
   btn2.style.backgroundColor = 'red';

}
