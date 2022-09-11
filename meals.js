const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="picture of ${meal.strMealThumb}">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text"> ${meal.strInstructions.slice(0, 200)} ...</p>
                  <button type="button" class="btn btn-info"><a class="text-decoration-none text-dark" href="${meal.strYoutube}">Watch now</a></button>
                </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv)
    })
}


const searchFood = () => {
    const searchField = document.getElementById('search-meal');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}


const loadMealDetails = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));

}

const displayMealDetails = meal => {
    const mealCon = document.getElementById('meal-details');
    mealCon.innerHTML='';
    const NewDiv = document.createElement('div');
    NewDiv.classList.add('card')
    NewDiv.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0 , 500)}.</p>
            <p class="card-text"><small class="text-muted">Dish category ${meal.strCategory} </small></p>
        </div>
        </div>
    </div>        
    `;
    mealCon.appendChild(NewDiv);
}


loadMeals('');