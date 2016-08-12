document.addEventListener("DOMContentLoaded", function(){
        
    var dropDownList = document.querySelectorAll('.drop_down_list');
    var listLabel = document.querySelectorAll('.list_label');
    var order = document.querySelectorAll('.panel_left *');
    var orderValue = document.querySelectorAll('.panel_right *');
    var li = document.querySelectorAll('.list_panel>li');
    var input = document.querySelector('[id="transport"]');
    var sum = document.querySelector('.sum strong');
    
    function priceCalculate(){
        var price = 0;
        for(var i=0; i<orderValue.length;i++){
            var item = orderValue[i].innerText;
            if(item == ""){
                console.log("item === NaN");
            }else{
               price+=parseInt(item);
            };
            
        };
        sum.innerText = price + " zł";
        return price;
    };
    
          
    for(var i =0; i < dropDownList.length; i++){
        
        dropDownList[i].addEventListener('click', function(){
            this.querySelector('.list_panel').classList.toggle('visible');
        });
        
        dropDownList[i].addEventListener('mouseleave', function(){
            this.querySelector('.list_panel').classList.remove('visible');
        });
        
    };
     
    
    for(var i =0; i < li.length; i++){
        if(i<3){
            li[i].addEventListener('click', function(){
                listLabel[0].innerText = this.innerText;
                order[0].innerText = "Chair " + this.innerText;
                switch(this.innerText){
                    case "Clair":
                        orderValue[0].innerText = 200;
                        break;
                    case "Margarita":
                        orderValue[0].innerText = 250;
                        break;
                    case "Selena":
                        orderValue[0].innerText = 300;
                        break;
                    default:
                        orderValue[0].innerText = "";     
                }
                priceCalculate();
            });
        } else if (i<6) {
            li[i].addEventListener('click', function(){
                listLabel[1].innerText = this.innerText;
                order[1].innerText = this.innerText;
                switch(this.innerText){
                    case "Czerwony":
                        orderValue[1].innerText = 80;
                        break;
                    case "Czarny":
                        orderValue[1].innerText = 100;
                        break;
                    case "Pomarańczowy":
                        orderValue[1].innerText = 120;
                        break;
                    default:
                        orderValue[1].innerText = "";     
                }
                priceCalculate();
            });
        } else {
            li[i].addEventListener('click', function(){
                listLabel[2].innerText = this.innerText;
                order[2].innerText = this.innerText;
                switch(this.innerText){
                    case "Tkanina":
                        orderValue[2].innerText = 0;
                        break;
                    case "Skóra":
                        orderValue[2].innerText = 100;
                        break;
                    default:
                        orderValue[2].innerText = "";     
                }
                priceCalculate();
            });
        }
    };
    
    
    input.addEventListener('change',function(){
        if(input.checked === true){
            order[3].innerText = "Transport";
            orderValue[3].innerText = 50;
        } else {
            order[3].innerText = "";
            orderValue[3].innerText = "";
        }
        priceCalculate();
    });
    
});   