/*

    FUNÇÕES IMPLEMENTADAS

*/

//Exercício 1
function quantidadeAprovados(arrAlunos) {
    return (arrAlunos.filter(x => parseFloat(x.nota) >= 70)).length
}

//Exercício 2
function montarNomesCompletos(arrUsuarios){
    return (arrUsuarios.map(x => {
        let novoObjeto = {"nome": x.primeiroNome + " " + x.segundoNome +  " " + x.terceiroNome, 
                          "age": x.age}
        return novoObjeto
    }))
}

//Exercício 3
function removerFeedbacksDuplicados(arrString){
    return(arrString.reduce((feedbacks, item) => (feedbacks.includes(item) ? feedbacks : [...feedbacks, item]), []))
}

//Exercício 4
function verificarPosicaoPacienteFila(strNome){
    return (pacientes.map((pessoa, indice) => {
        if (pessoa == strNome) return indice;
    }).filter(indice => indice != undefined).reduce((acc, indice) => acc + indice, 1))
}

//Exercício 5
function verificarUsuarioAutenticado(strNome){
    return usuarios5.find(objeto => objeto.nome == strNome)
}

/*

    CONSTANTES USADAS

*/

//Exercício 1
const alunos = [
    { nome: "Filipe Diogo", nota: "80" },
    { nome: "Enzo Miguel", nota: "77" },
    { nome: "Mateus Danilo", nota: "88" },
    { nome: "Olivia Stella", nota: "95" },
    { nome: "César Paulo", nota: "68" },
];

//Exercício 2
const usuarios2 = [ 
    {
      "primeiroNome": "Antonio",
      "segundoNome": "Freitas",
      "terceiroNome": "Oliveira",
      "age": 35
    },
    {
      "primeiroNome": "Manuel",
      "segundoNome": "Guedes",
      "terceiroNome": "Peixoto",
      "age": 23
    }        
];

//Exercício 3
const feedbacks = [
    "Melhorar responsividade do site",
    "Erros confusos",
    "Os botões são intuitivos",
    "Erros confusos",
];

//Exercício 4
const pacientes = [
    "Bento Raimundo Cavalcanti",
    "Oliver Samuel Cardoso",
    "Geraldo Ryan Danilo Carvalho",
    "Isis Tatiane Sophie Santos",
    "Clarice Esther Moraes",
];

//Exercício 5
const usuarios5 = [
    { nome : 'Tiago', autenticado: true },
    { nome : 'Miguel', autenticado: false},
    { nome : 'Priscila', autenticado: true },
    { nome : 'Luiz', autenticado: false},
    { nome : 'Ricardo', autenticado: true },
];

/*

    PARTE DOS TESTES

*/

//Exercício 1
console.log("Testando o código do exercício 1...")
console.log(quantidadeAprovados(alunos))
console.log("Exercício 1 concluído.")

//Exercício 2
console.log("\nTestando o código do exercício 2...")
console.log(montarNomesCompletos(usuarios2))
console.log("Exercício 2 concluído.")

//Exercício 3
console.log("\nTestando o código do exercício 3...")
console.log(removerFeedbacksDuplicados(feedbacks))
console.log("Exercício 3 concluído.")

// Exercício 4
console.log("\nTestando o código do exercício 4...")
console.log(verificarPosicaoPacienteFila("Isis Tatiane Sophie Santos"))
console.log("Exercício 4 concluído.")

//Exercício 5
console.log("\nTestando o código do exercício 5...")
console.log(verificarUsuarioAutenticado("Luiz"))
console.log("Exercício 5 concluído.")
