const inputCep = document.querySelector("#cep")
const btnBuscar = document.querySelector("#btn-buscar")
const inputBairro = document.querySelector("#bairro")
const inputEstado = document.querySelector("#estado")
const inputLogradouro = document.querySelector("#logradouro")
const inputCidade = document.querySelector("#cidade")
const inputNumero = document.querySelector("#numero")
const inputComplemento = document.querySelector("#complemento")


async function pegarEndereco() {


    inputBairro.value = ""
    inputCidade.value = ""
    inputEstado.value = ""
    inputLogradouro.value = ""



    let valueInputCep = inputCep.value

    try {
        let response = await fetch(`https://viacep.com.br/ws/${valueInputCep}/json/`)
        let data = await response.json()
        if (data.erro == "true") {

             inputNumero.setAttribute("disabled", "");
        inputComplemento.setAttribute("disabled", "");



            alert("CEP INVALIDO!");
            return
        }

        inputBairro.value = data.bairro;
        inputCidade.value = data.localidade;
        inputEstado.value = data.estado;
        inputLogradouro.value = data.logradouro;


        inputNumero.removeAttribute("disabled")
        inputComplemento.removeAttribute("disabled")

    } catch (error) {

        alert("CEP INVALIDO!");

    }


}

function mask() {

    let valueInputCep = inputCep.value
    let lengthInputCep = valueInputCep.length

    if (lengthInputCep == 5) {
        inputCep.value += "-"
    }
}

btnBuscar.addEventListener(`click`, pegarEndereco)

inputCep.addEventListener(`keypress`, mask)