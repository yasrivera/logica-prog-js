/* FUNÇÕES */

/**
 * 
 * Função para validar o dado fornecido como argumento para a função `sistemaInfoClientes()`. O dado fornecido precisa ser um vetor e não pode ser vazio.
 * @param {Object} cliente - Vetor com objetos contendo as informações de cada cliente
 */
function validarVetor(arr){
    if (!Array.isArray(arr)) throw new TypeError("Os dados devem estar contidos em um array.")
    if (arr.length === 0) throw new RangeError("O vetor inserido não pode ser vazio.")
}

/**
 * 
 * Função para validar o nome de determinado cliente. O nome deve ser uma string não vazia, não podendo ser `null` ou `undefined`.
 * @param {Object} cliente - Vetor com objetos contendo as informações de cada cliente
 */
function validarNome(cliente){
    if(cliente.nome === null || cliente.nome === undefined ) {
        throw new TypeError("O nome do cliente " + cliente.id + " não pode ser null ou undefined.")
    } else if (typeof(cliente.nome) !== "string") {
        throw new TypeError("O nome do cliente " + cliente.id + " deve ser do tipo string.")
    }
    if (cliente.nome.length === 0) throw new RangeError("O nome do cliente " + cliente.id + " deve ser uma string não vazia.")
}

/**
 * 
 * Função para validar o email de determinado cliente. O email deve ser uma string não vazia, não podendo ser `null` ou `undefined`.
 * @param {Object} cliente - Vetor com objetos contendo as informações de cada cliente
 */
function validarEmail(cliente){
    if (typeof(cliente.email) !== "string") throw new TypeError("O e-mail do cliente " + cliente.id + " deve ser do tipo string.") 
    if (cliente.email.length === 0) throw new RangeError("O e-mail do cliente " + cliente.id + " deve ser uma string não vazia.")
    if(cliente.email === null || cliente.email === undefined ) throw new TypeError("O e-mail do cliente " + cliente.id + " não pode ser null ou undefined.") 
}

/**
 * 
 * Função para validar a idade de determinado cliente. A idade deve ser um número inteiro maior que 18, não podendo ser `null` ou `undefined`.
 * @param {Object} cliente - Vetor com objetos contendo as informações de cada cliente
 */
function validarIdade(cliente){
    if(cliente.idade === null || cliente.idade === undefined ) {
        throw new TypeError("A idade do cliente " + cliente.id + " não pode ser null ou undefined.")
    } else if (!Number.isInteger(cliente.idade)) {
        throw new TypeError("A idade do cliente " + cliente.id + " deve ser um número inteiro.")
    }  
    if (cliente.idade <= 18) throw new RangeError("A idade do cliente " + cliente.id + " deve ser maior do que 18.")  
}

/**
 * 
 * Função para validar o telefone de determinado cliente. O telefone pode ser `null` ou `undefined`, mas se for uma string, precisa seguir um dos seguintes formatos:
 * - (xx)xxxx-xxxx ou (xx)xxxxxxxx (sem hífen) ou xxxxxxxxxx (sem hífen e parênteses)
 * - (xx)xxxxx-xxxx ou (xx)xxxxxxxxx (sem hífen) ou xxxxxxxxxxx (sem hífen e parênteses)
 * @param {Object} cliente - Vetor com objetos contendo as informações de cada cliente
 */
function validarTelefone(cliente){
    const telefoneFormato = new RegExp("^\\(?[0-9]{2}\\)?\\s?[0-9]{4,5}\\-?[0-9]{4}$")
    if ((cliente.telefone !== null && cliente.telefone !== undefined) && (typeof(cliente.telefone) === "string")){
        if (!telefoneFormato.test(cliente.telefone)){
            throw new TypeError("O telefone do cliente " + cliente.id + " precisa ser de um formato válido. Por exemplo, (xx)xxxxx-xxxx ou (xx)xxxx-xxxx (não necessariamente com o hífen '-' ou os parênteses).")
        }
    }
}

/**
 * 
 * Função para calcular e retornar a média de idade de todos os clientes.
 * @param {Array} clientes - Vetor com objetos contendo as informações de cada cliente
 * @returns {Number}
 */
function mediaIdadeClientes(clientes){
    return (clientes.reduce((acc, cliente) => {
        acc += cliente.idade
        return acc
    }, 0)) / (clientes.length)
}


/**
 * 
 * Função para retornar um objeto (ou mapa) de compras de cada cliente, de acordo com o id do mesmo.
 * @param {Array} clientes - Vetor com objetos contendo as informações de cada cliente
 * @returns {Object}
 */
function retornarComprasClientes(clientes){
    return clientes.reduce((acc, cliente) => {
        acc[cliente.id] = cliente.compras
        return acc
    }, {})
}

/**
 * 
 * Função para retornar o valor médio de compras de todos os clientes.
 * @param {Array.<Object>} clientes - Vetor com objetos contendo as informações de cada cliente
 * @returns {Number}
 */
function valorMedioComprasClientes(clientes){
    return Math.round(clientes.reduce((acc, cliente) => {
        const valorTotalCliente = cliente.compras.reduce((acc, item) => acc += item.valor, 0)
        acc += valorTotalCliente
        return acc
    }, 0) / clientes.length)
}

/**
 * 
 * Função para executar as funcionalidades requeridas pelo sistema: retornar a média de idade dos clientes, retornar um objeto com as compras de cada cliente e retornar o valor médio de compras de todos os clientes.
 * @param {Array} clientes - Vetor com objetos contendo as informações de cada cliente
 * @param {Number} codFuncao - Código para escolher qual função será executada. Se for 1, executamos a função `mediaIdadeClientes()`; se for 2, executamos a função `retornarComprasClientes()`; se for 3, executamos a função `valorMedioComprasClientes()`.
 * @returns 
 */

function sistemaInfoClientes(clientes, codFuncao){
    try {
        validarVetor(clientes)
        
        clientes.forEach((cliente) => {
            validarEmail(cliente)
            validarNome(cliente)
            validarIdade(cliente)
            validarTelefone(cliente)
        })

        switch(codFuncao) {
            default:
                throw new RangeError("Função não encontrada. Digite um valor entre 1 e 3.")
            case 1:
                return mediaIdadeClientes(clientes);
            case 2: 
                return retornarComprasClientes(clientes);
            case 3:
                return valorMedioComprasClientes(clientes);
        }
    } catch (error) {
        return error.message;
    }
}