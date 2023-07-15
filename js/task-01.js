const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const subItems = item.querySelectorAll('li');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${subItems.length}`);
});