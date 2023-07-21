const itemsList = document.querySelectorAll('.item');

console.log("Number of categories:", itemsList.length);

itemsList.forEach(function (item) {
  console.log("Category:", item.children[0].textContent);
  console.log("Elements:", item.children[1].children.length);
});