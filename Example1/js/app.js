const main = document.querySelector('main')

const mainGoal = document.createElement('h3')
const mainGoalDescription = document.createElement('p')
const syllabus = document.createElement('h3')

mainGoal.innerText = 'Objetivo'
mainGoal.className = 'subheading'
main.appendChild(mainGoal)

mainGoalDescription.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda enim aspernatur repudiandae ratione accusamus. Recusandae quibusdam quidem fugit, itaque doloribus distinctio possimus eius expedita eveniet unde dolores aut cupiditate.'
mainGoalDescription.id = 'main-objective'

main.appendChild(mainGoalDescription)

syllabus.innerText = 'Temario'
syllabus.className = 'subheading'
main.appendChild(syllabus)