{
  const titleClickHandler = function (event) {
    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event, titleClickHandler);

    /* remove class 'active' from all article links  */
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector:', articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle:', targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

    /* const links = document.querySelectorAll('.titles a');
  console.log(links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  } */
  };
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = 'post-author';

  const generateTitleLinks = function (customSelector = '') {
    /* remove contents of titleList */
    console.log = customSelector;
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(
      optArticleSelector,
      customSelector
    );
    console.log = (optArticleSelector, customSelector);
    /* find all the articles and save them to variable: articles */
    /* ... */

    let html = '';
    console.log(html);
    for (let article of articles) {
      /* get the article id */

      const articleId = article.getAttribute('id');

      /* find the title element */

      /* get the title from the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */

      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        '</span></a></li>';
      console.log(linkHTML);

      /* insert link into titleList */

      // titleList.innerHTML = titleList.innerHTML + linkHTML;

      titleList.insertAdjacentHTML('beforeend', linkHTML);
    }
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();

  const generateTags = function () {
    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector, '.post');

    /* START LOOP: for every article: */

    for (let article of articles) {
      /* find tags wrapper */
      const tagsList = article.querySelectorAll(optArticleTagsSelector);
      console.log(tagsList);
      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* START LOOP: for each tag */

      for (let tag of articleTagsArray) {
        /* generate HTML of the link */
        const linkHTML =
          '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        console.log(linkHTML);
        /* add generated code to HTML variable */
        html = html + linkHTML;

        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsList.innerHTML = html;
      /* END LOOP: for every article: */
    }
  };

  generateTags();

  const tagClickHandler = function (event) {
    /* prevent default action for this event */
    event.preventDefault();
    console.log = tagClickHandler;
    /* make a new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagsLinks = clickedElement.getAttribute('href');
    /* START LOOP: for each found tag link */
    for (let tagLink of tagsLinks) {
      /* add class active */
      tagLink.classList.add('active');
      console.log = tagLink;
      /* END LOOP: for each found tag link */
    }
  };
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  

  const addClickListenersToTags = function () {
    /* find all links to tags */
    const tagsLinks = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (let tagLink of tagsLinks) {
      /* add tagClickHandler as event listener for that link */
      tagLink.clickedElement.add(tagClickHandler);
      /* END LOOP: for each link */
    }
  };

  addClickListenersToTags();
}

const generateAuthors = function () {
  const articles = document.querySelectorAll(
    optArticleAuthorSelector,
    'post-author'
  );
  for (let article of articles) {
    const authorList = article.querySelectorAll(optArticleAuthorSelector);
    let html = '';
    const articleAuthor = article.getAttribute('data-author');


  }
  authorList.innerHTML = html;

generateAuthors();
}


const authorClickHandler = function ('[data-author="' + author + '"]') {
  const clickedElement = this  ;

  const href = clickedElement.getAttribute('href');

  const activeLink = document.querySelectorAll('.active');

  const author = href.replace('#tag-', '');

  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  for (let activeAuthor of activeAuthor) {

    activeAuthor.classList.remove('active');
  };
  const authorsLinks = clickedElement.getAttribute('href');
  
  for (let authorLink of authorsLinks) {

    authorLink.classList.add('active');
    console.log = authorLink;
};
}
authorClickHandler();


const addClickListenersToAuthors = function() {

  const authorsLinks = document.querySelectorAll('a[href^="#author-"]');

  for (let authorLink of authorsLinks) {

    authorLink.clickedElement.add(authorClickHandler);
  }
}


addClickListenersToAuthors();

