function convert(){
    var euroemreal = document.getElementById("testeMoeda").innerHTML;
    var euro = document.getElementById("inserir").value;
    
    var real = euro * euroemreal;  //(cel * 9/5) + 32;
    
    document.getElementById("real").innerHTML = real.toFixed(2);    
    
}

function pegar_cotacao(callback){

    $.ajax({

        url: "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL",
        type: "GET",
        dataType: "json",
        success: function(data){
            callback(data);
        },
        error: function(){
            alert("erro na requisição");
        }        
    });
}
    
function usar_cotacao(moeda){
    
    var euroatual = moeda.EURBRL.ask;
    console.log(euroatual);

    var euroatualformatado = parseFloat(euroatual);

    $("#testeMoeda").html(euroatualformatado.toFixed(2));
        
    //document.getElementById("testeMoeda").innerHTML = euroatualformatado.toFixed(2);

}

pegar_cotacao(usar_cotacao);

var ano_atual = new Date;

ano_atual = ano_atual.getFullYear();

document.getElementById("current_year").innerHTML = ano_atual;