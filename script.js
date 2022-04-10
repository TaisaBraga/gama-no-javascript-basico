console.log('JS Carregado')

function validaCPF(cpf) {
  if (cpf.length != 11) {
    return false
  } else {
    /*O método substring() retorna a parte da string entre
     os índices inicial e final, ou até o final da string.*/
    var numeros = cpf.substring(0, 9)
    var digitos = cpf.substring(9)

    //variavel de incremento
    var soma = 0
    for (var i = 10; i > 1; i--) {
      /*O método charAt() retorna o caractere especificado 
      a partir de uma string.*/
      soma += numeros.charAt(10 - i) * i
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    //validacao do primeiro digito
    if (resultado != digitos.charAt(0)) {
      return false
    }

    soma = 0
    numeros = cpf.substring(0, 10)

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    //validacao do segundo digito
    if (resultado != digitos.charAt(1)) {
      return false
    }
    return true
  }
}

function validacao() {
  console.log('Iniciando validacao CPF')
  document.getElementById('success').style.display = 'none'
  document.getElementById('error').style.display = 'none'

  //pegar o valor (.value)
  var cpf = document.getElementById('cpf_digitado').value

  var resultadoValidacao = validaCPF(cpf)

  if (resultadoValidacao) {
    //pegar o estilo (.style)
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}
