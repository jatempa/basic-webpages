const main = document.querySelector("main");

const mainGoal = document.createElement("h3");
const mainGoalDescription = document.createElement("p");
const syllabus = document.createElement("h3");
const content = document.createElement("section");

mainGoal.innerText = "Objetivo";
mainGoal.className = "subheading";
main.appendChild(mainGoal);

mainGoalDescription.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda enim aspernatur repudiandae ratione accusamus. Recusandae quibusdam quidem fugit, itaque doloribus distinctio possimus eius expedita eveniet unde dolores aut cupiditate.";
mainGoalDescription.id = "main-objective";

main.appendChild(mainGoalDescription);

syllabus.innerText = "Temario";
syllabus.className = "subheading";
main.appendChild(syllabus);

content.id = "content";

const topicsList = [
  {
    title: "Unidad 1 - Introducci&oacute;n",
    topics: ["Tema 1", "Tema 2", "Tema 3"],
  },
  {
    title: "Unidad 2 - HTML y CSS",
    topics: ["Tema 1", "Tema 2", "Tema 3"],
  },
  {
    title: "Unidad 3 - CSS avanzado",
    topics: ["Tema 1", "Tema 2", "Tema 3"],
  },
  {
    title: "Unidad 4 - Control de versiones",
    topics: ["Tema 1", "Tema 2", "Tema 3"],
  },
  {
    title: "Unidad 5 - Pruebas y Despliegue",
    topics: ["Tema 1", "Tema 2", "Tema 3"],
  },
];

function MyReact() {
  return {
    createElement: function (type, values) {
      switch (type) {
        case "article":
          return `<article>${values}</article>`;
        case "h3":
          return `<h3 class=${values.className}>${values.children}</h3>`;
        case "ul":
          return `
            <ul>
              ${values.map((value) => `<li>${value}</li>`).join("")}
            </ul>
          `;
      }
    },
  };
}

function createTopicList(strings, topics) {
  const react = new MyReact();

  return topics
    .map((topic) =>
      react.createElement(
        "article",
        `
          ${react.createElement("h3", {
            children: topic.title,
            className: strings,
          })}
          ${react.createElement("ul", topic.topics)}
        `
      )
    )
    .join("");
}

content.innerHTML = createTopicList`topic-title ${topicsList}`;

main.appendChild(content);
