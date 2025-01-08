// array e objetos

// ao inves de criar varias variaveis eu posso criar uma lista de coisas e armazenar nela, o chamado ARRAY

// let ingrediente1 = "agua";
// let ingrediente2 = "massa";
// let ingrediente3 = "corante";

//array (Armazena apenas valores)
let ingredientes = ["farinha", "agua", "sal", "corante"];

// Aqui não, esse Array com objetos eu posso add propriedades aos objetos... Lista de propriedades
let personagem = {
    nome: "Dário", 
    nivel: 10,
    forca: 800,
    magia: 200,
    vida: 1000,
    mana: 200
};


/*

Criando as funções
    -Para criar as funções eu preciso percorrer tres etapas, e são elas:
        1) input - a coleta de dados para ela processar
        2) processamento - o que ela vai fazer
        3) output - entrega o meu retorno
*/


// Função normal
function somar(a, b) {
    let resultado = a + b
    return resultado
}

// Arrow function
let somar2 = (a, b) => {
    let resultado = a + b
    return resultado
} //essa variavel "Se torna uma function" pq o que eu vou armazenar nela é uma funciton


let x = somar(15, 20)
let y = somar(34, 23894)
console.log(x, y);  //assim o meu console.log vai exibir pra mim o valor que a minha função vai retornar