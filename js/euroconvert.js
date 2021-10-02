function convert(){
    var euroemreal = document.getElementById("testeMoeda").innerHTML;
    var euro = document.getElementById("inserir").value;
    
    var real = euro * euroemreal;  //(cel * 9/5) + 32;
    
    document.getElementById("real").innerHTML = real.toFixed(2);
    
    
    }