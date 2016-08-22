document.addEventListener("DOMContentLoaded", function(){
        
// Zadanie 1 - oprogramowanie menu
    var nav = document.querySelector('.navbar li:first-of-type');
    var menu = document.querySelector('.dropdown-menu');

    nav.addEventListener('mouseenter', function(){
        menu.classList.add('visible');
    });
    
    nav.addEventListener('mouseleave', function(){
        menu.classList.remove('visible');
    });
    
    
// Zadanie 2 - oprogramowanie galerii - wersja beta    
    var picture = document.querySelectorAll('.chair');
    var chair = document.querySelectorAll('.chair>div');
    picture[0].addEventListener('mouseenter', function(){
        chair[0].classList.add('invisible');
    });
    picture[0].addEventListener('mouseleave', function(){
        chair[0].classList.remove('invisible');
    });
    picture[1].addEventListener('mouseenter', function(){
        chair[1].classList.add('invisible');
    });
    picture[1].addEventListener('mouseleave', function(){
        chair[1].classList.remove('invisible');
    });

    
// Zadanie 3 - slider    
    var next = document.querySelector('#intro>div>div:last-child'); //div odpowiedzialny za wyświetlanie obrazków
    var prev = document.querySelector('#intro>div>div:first-child');    //div odpowiedzialny za wyświetlanie opisów
    var list = document.querySelectorAll('.intro-img'); //wszystkie obrazki
    var cont = document.querySelectorAll('.intro-content'); //wszystkie opisy
    
    //Ustawienie widocznego pierwszego obrazka oraz opisu
    var index = 0;
    console.log(list[index]);
    list[index].classList.add("visible");
    cont[index].classList.add("visible");
    
    //Następny obrazek oraz opis
    next.addEventListener('click', function(){
        console.log("Działa next!");
        
        list[index].classList.remove("visible");
        cont[index].classList.remove("visible");
        index = index+1;
        
        if(index >= list.length){
            index = 0; 
        }
        
        list[index].classList.add("visible");
        cont[index].classList.add("visible");
    });
    
    //Poprzedni obrazek oraz opis
    prev.addEventListener('click', function(){
        console.log("Działa prev!");
        
        list[index].classList.remove("visible");
        cont[index].classList.remove("visible");
        index = index-1;
        
        if(index < 0){
            index = list.length-1; 
        }
        
        list[index].classList.add("visible");
        cont[index].classList.add("visible");
    });
});   