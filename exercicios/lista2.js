/*

FUNÇÕES

*/

function calcularVolumeDeCaixas(arr){
    return arr.reduce((acc, caixa) => {
        acc += caixa.reduce((acc, lado) => acc *= lado)
        return acc
    }, 0)
}

function obterValorComDesconto(arr){
    return arr.reduce((acc, item) => {
        const objAtualizado = {
            valorOriginal: item.valorOriginal,
            valorComDesconto: item.valorOriginal * ((100 - item.porcentagemDoDesconto) / 100)
        }
        acc.push(objAtualizado)
        return acc
    }, [])
}

function ordenarPorPrecosMaisBaixos(arr){
    return arr.sort((item1, item2) => item1.preco - item2.preco)
}

/*

DADOS

*/

const caixas = [
    [4, 2, 4],
    [3, 3, 3],
    [1, 1, 2],
    [2, 1, 1],
  ];

const descontos = [
  { valorOriginal: 1500, porcentagemDoDesconto: 50 },
  { valorOriginal: 89, porcentagemDoDesconto: 20 },
  { valorOriginal: 100, porcentagemDoDesconto: 75},
];

const bebidas = [
  {
    nome: "suco de pessego",
    preco: 5,
  },
  {
    nome: "suco de uva",
    preco: 6.5,
  },
  {
    nome: "suco de manga",
    preco: 5.5,
  },
];

/*

TESTES

*/

console.log("Volume:", calcularVolumeDeCaixas(caixas))
console.log("Valores com desconto: ", obterValorComDesconto(descontos))
console.log("Preços das bebidas:", ordenarPorPrecosMaisBaixos(bebidas))