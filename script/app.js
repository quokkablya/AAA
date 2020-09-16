let header = document.querySelector('.header'),
    main = document.querySelector('.main'),
    choice = document.querySelector('.choice');

header.style.display='none'
main.style.display='block';
choice.style.display='none';

function show(){
    header.style.display='block';
    main.style.display='none';
    choice.style.display='block';
}

setTimeout(show,1000);