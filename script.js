let ingredientes = [];
let custos = []

document.getElementById("envio").addEventListener("click", function(event) {
    event.preventDefault();

    let ingrediente = document.getElementById("ingrediente").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let quantidade = parseFloat(document.getElementById("quantidade").value);
    let quantia = parseFloat(document.getElementById("quantidadereceita").value);

    let custoreceita = (preco / quantidade) * quantia;

    ingredientes.push({
        nome: ingrediente
    })
    custos.push(custoreceita);

    let custo = 0;

    for (var i=0; i < custos.length; i++) {
        custo += custos[i];
    }
    console.log(ingredientes, custos);
    document.getElementById("addingrediente").innerText = "O ingrediente '" + ingrediente + "' custou: R$" + custoreceita.toFixed(2) + "💸";

    document.getElementById("resultado").innerText = "A receita custou: R$ "+ custo.toFixed(2) + "💸";
});
