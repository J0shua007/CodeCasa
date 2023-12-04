function convert() {
    let Fahrenheit = document.getElementById("Fahrenheit");
    let Celcius = document.getElementById("celcius");
    let result = document.getElementById("result");
    if (Fahrenheit.value == "") {
        const fahrenheit = (Number(Celcius.value) * 9/5) + 32;   
        result.innerText =  Celcius.value+"°C = "+ fahrenheit.toFixed(2) +"°F";
        if (Math.ceil(fahrenheit) <= 96.7) {
            result.style.color ="#84bef0";
        } 
        else if (Math.ceil(fahrenheit) >= 96.8 && Math.ceil(fahrenheit) <= 99.0) {
            result.style.color ="greenyellow";
        }
         else if (Math.ceil(fahrenheit) >= 99.3 && Math.ceil(fahrenheit) <= 101) {
            result.style.color ="yellow";
        }
        else if (Math.ceil(fahrenheit) >= 102 && Math.ceil(fahrenheit) < 103) {
            result.style.color ="#ffb74d";
        }
        else if(Math.ceil(fahrenheit) >= 103){
            result.style.color ="red";
        }
        Celcius.value = "";
        
   } 
    else if(Celcius.value == "") {
        const celsius = (Number(Fahrenheit.value) - 32) * 5/9;
        result.innerText = Fahrenheit.value+"°F = "+ celsius.toFixed(1) +"°C";

        if (Math.ceil(celsius) <= 35.9) {
            result.style.color ="#84bef0";
        } 
        else if (Math.ceil(celsius) >= 36.0 && Math.ceil(celsius) <= 37.3) {
            result.style.color ="greenyellow";
        }
         else if (Math.ceil(celsius) >= 37.4 && Math.ceil(celsius) <= 38.3) {
            result.style.color ="yellow";
        }
        else if (Math.ceil(celsius) >= 38.4 && Math.ceil(celsius) <= 39.2) {
            result.style.color ="#ffb74d";
        }
        else if(Math.ceil(celsius) >= 39.3){
            result.style.color ="red";
        }
    Fahrenheit.value = "";
   };
   }
   