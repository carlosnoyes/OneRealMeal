const recipeGrid = document.getElementById('recipe-grid');
const searchInput = document.getElementById('recipe-search');
const filterButtons = document.querySelectorAll('[data-filter]');

let allRecipes = [];
let activeFilter = 'all';

const renderRecipes = (recipes) => {
  if (!recipeGrid) return;
  recipeGrid.innerHTML = recipes
    .map(
      (recipe) => `
      <article class="recipe-card">
        <span class="label">${recipe.category}</span>
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <div class="pill-list">
          <span class="pill">${recipe.time}</span>
          <span class="pill">${recipe.tag}</span>
        </div>
        <a class="btn btn-secondary" href="/recipes/recipe.html">View recipe</a>
      </article>
    `
    )
    .join('');
};

const applyFilters = () => {
  const query = searchInput ? searchInput.value.toLowerCase() : '';
  const filtered = allRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(query);
    const matchesFilter = activeFilter === 'all' || recipe.filters.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });
  renderRecipes(filtered);
};

if (recipeGrid) {
  fetch('/assets/data/recipes.json')
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data;
      renderRecipes(allRecipes);
    });
}

if (searchInput) {
  searchInput.addEventListener('input', applyFilters);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    applyFilters();
  });
});
