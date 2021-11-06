const inputSearch = document.querySelector('input[type=text]')
const btnSearch = document.querySelector('button#search')

const search = function() {
  console.log("Hola Mundo")
  inputSearch.value = ''
}

btnSearch.addEventListener('click', search)