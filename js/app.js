document.addEventListener("DOMContentLoaded", function(){
        
// Zadanie 1 - oprogramowanie menu
    var nav = document.querySelector('.navbar li:first-of-type');
    var menu = document.querySelector('.dropdown-menu');

    nav.addEventListener('mouseenter', function(){
        menu.classList.add('visibility');
    });
    
    nav.addEventListener('mouseleave', function(){
        menu.classList.remove('visibility');
    });
    
    
// Zadanie 2 - oprogramowanie galerii - wersja beta    
    var picture = document.querySelectorAll('.chair');
    var chair = document.querySelectorAll('.chair>div');
    picture[0].addEventListener('mouseenter', function(){
        chair[0].classList.add('nonvisibility');
    });
    picture[0].addEventListener('mouseleave', function(){
        chair[0].classList.remove('nonvisibility');
    });
    picture[1].addEventListener('mouseenter', function(){
        chair[1].classList.add('nonvisibility');
    });
    picture[1].addEventListener('mouseleave', function(){
        chair[1].classList.remove('nonvisibility');
    });

//    for(var i=0; i < picture.length; i++){
//        console.log(i);
//        console.log(chair[i]);
//        console.log(picture.length);
//        picture[i].addEventListener('mouseenter', function(){
//            chair[i].classList.add('nonvisibility');
//        });
//        picture[i].addEventListener('mouseleave', function(){
//            chair[i].classList.remove('nonvisibility');
//        });
//    }
    
// Zadanie 3 - slider    
    var next = document.querySelector('#intro>div>div:last-child');
    var prev = document.querySelector('#intro>div>div:first-child');
    var list = document.querySelectorAll('.intro-img');
    var cont = document.querySelectorAll('.intro-content');
    var index = 0;
    console.log(list[index]);
    list[index].classList.add("visibility");
    cont[index].classList.add("visibility");
    
    next.addEventListener('click', function(){
        console.log("Działa next!");
        
        list[index].classList.remove("visibility");
        cont[index].classList.remove("visibility");
        index = index+1;
        
        if(index >= list.length){
            index = 0; 
        }
        
        list[index].classList.add("visibility");
        cont[index].classList.add("visibility");
    });
    
    prev.addEventListener('click', function(){
        console.log("Działa prev!");
        
        list[index].classList.remove("visibility");
        cont[index].classList.remove("visibility");
        index = index-1;
        
        if(index < 0){
            index = list.length-1; 
        }
        
        list[index].classList.add("visibility");
        cont[index].classList.add("visibility");
    });
});   