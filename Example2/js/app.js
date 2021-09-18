// Crear publicaciones
const mainPostsArea = document.querySelector(".content");

const blogPostList = [
  {
    'encabezado': "Deserunt dignissimos ut possimus ut ut ipsum ab quaerat.",
    'publicacion': "Dolore excepturi qui corrupti dolores totam. Et voluptate et molestiae vero vel error sit nemo sed. Nam aut temporibus est. Consequuntur occaecati dolores. Eligendi alias at alias et ut consequatur."
  },
  {
    'encabezado': "Nam porro et. Iste omnis rerum hic et neque ea et veniam est.",
    'publicacion': "Facilis quod illum aut. Facilis quibusdam accusamus eius in. Commodi libero et veritatis reprehenderit reiciendis excepturi. Repellat nesciunt modi sed eum doloremque odio eos illum. Officiis sit quidem dolor qui modi sit. Quia assumenda neque minima occaecati dolores."
  },
  {
    'encabezado': "Provident repudiandae minima at molestiae ut eum qui",
    'publicacion': "Commodi natus blanditiis repellat dignissimos voluptatem ut occaecati voluptas itaque. Adipisci et hic officiis ex libero impedit. Distinctio maiores iste. Amet fuga similique. Esse sit sed rerum et consectetur unde velit."
  },
  {
    'encabezado': "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    'publicacion': "Temporibus ut rem, in odio perferendis neque delectus suscipit porro quasi corrupti voluptatum aliquid! Tenetur beatae delectus dolores in facilis et maxime."
  },
]

mainPostsArea.innerHTML = blogPostList.map((b) => {
  return `
    <article class="post">
      <h2 class="post__header">
        <a class="post__header-link" href="#">${b.encabezado}</a>
      </h2>
      <p class="post__paragraph">
        ${b.publicacion}
      </p>
      <span></span>
    </article>
  `;
}).join("");

// Crear subsecciones
const subsectionsArea = document.querySelector(".subsections");

const contentArticleList = [
  "Placeat quae voluptate ullam id quasi. Occaecati sed reiciendis molestiae quia ad ratione modi voluptatem veniam.",
  "Recusandae quibusdam perferendis ipsum ea excepturi ut aut. Molestias repudiandae est sint natus. Dolore sunt nisi ut ab molestiae adipisci error magnam libero.",
  "Neque architecto quos. Aut voluptatem et est expedita at. Consequatur maiores eos id occaecati cum vero aut illo qui. Voluptatibus a illo rerum id dolorem aut dignissimos."
]

contentArticleList.forEach((c, i) => {
  const customArticle = document.createElement('article');
  const articleHeader = document.createElement('h3');
  const articleParagraph = document.createElement('p');

  customArticle.classList = `subsections__article`;
  articleHeader.classList = "subsections__article-header";
  articleParagraph.classList = "subsections__article-paragraph";

  articleHeader.innerHTML = `Secci&oacute;n ${i+1}`;
  articleParagraph.innerHTML = c;

  // Agrego elemento H3 y Parrafo
  customArticle.appendChild(articleHeader);
  customArticle.appendChild(articleParagraph);
  
  // Agrego un elemento Articulo Completo
  subsectionsArea.appendChild(customArticle);
});