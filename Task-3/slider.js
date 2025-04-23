const container = document.getElementById('container');
const mini = document.getElementsByClassName('minImg');
console.log(mini)
let img=['./Images/slide1.jpeg','./Images/slide2.jpeg','./Images/slide3.jpeg','./Images/slide4.jpeg','./Images/slide5.jpeg']

let i=0;

setInterval(() => {
    mini[i].classList.remove('active');
    i++;
    
    if(i==img.length)
    {
        i=0;
    }
    mini[i].classList.add('active');
    container.style.transitionDuration='1s';
    container.style.backgroundImage='url("'+img[i]+'")';
},1000);
// const next = () =>{

    
// }

const prev =()=>{

    mini[i].classList.remove('active');
    i--;
    
    if(i==-1)
    {
        i=img.length-1;
    }
    mini[i].classList.add('active');
    container.style.transitionDuration='1s';
    container.style.backgroundImage='url("'+img[i]+'")';

}




