const showCategoriesModal = document.querySelector(".categories");
const showCollapseCategories = document.querySelector('.collapse_categories')
const backDrop = document.querySelector(".backdrop");
const categories = document.querySelector(".categories_list_container");
const categoriesItems = document.querySelectorAll(".categories_item");

showCollapseCategories.addEventListener('click' , () => {
  window.scrollTo(0, 0);
  document.querySelector('.toggle_list').style.display = 'none'
  backDrop.style.display = "block";
  categories.style.zIndex = 2;
})

showCategoriesModal.addEventListener("click", () => {
  window.scrollTo(0, 0);
  backDrop.style.display = "block";
  categories.style.zIndex = 2;
});

categoriesItems.forEach((item) => {
  item.addEventListener("click", () => {
    backDrop.style.display = "none";
    categories.style.zIndex = 0;
  });
});

backDrop.addEventListener("click", () => {
  backDrop.style.display = "none";
  categories.style.zIndex = 0;
});
