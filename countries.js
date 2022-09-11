const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countryRoad(data))
}

const countryRoad = countriesList => {
    const containerDiv = document.getElementById('countries-container');
    countriesList.forEach(country => {
        const NewDiv = document.createElement('div');
        NewDiv.classList.add('country');
        console.log(country);
        NewDiv.innerHTML=`
        <h3> Name ${country.name.common}</h3>
        <p> Flag   ${country.flag}</p>
        <p> Capital:  ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        containerDiv.appendChild(NewDiv);
    });
}

const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    console.log(country);
    const countryDetail = document.getElementById('country-container');
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <div style="background:black;padding:20px;margin:20px;">
        <img src="${country.flags.png}"></div>
    `
}



loadCountries();