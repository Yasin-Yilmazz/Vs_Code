const fetchCountry = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      renderError(`Something went wrong: ${res.status}`);
      throw new Error();
    }

    const data = await res.json();
    renderCountry(data[0]);
  } catch (error) {
    console.log(error);
  }
};

const getCountryNames = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const names = data.map((country) => country.name.common);
    names.sort();
    names.forEach((country) => getSelect(country));
  } catch (error) {
    renderError(error);
  }
};
getCountryNames();

const getSelect = (country) => {
  const createOption = document.createElement("option");
  createOption.value = country;
  createOption.textContent = country;
  const select = document.querySelector("select");
  select.append(createOption);
};

const renderError = (err) => {
  const countriesDiv = document.querySelector(".countries");
  countriesDiv.innerHTML = `
  <h1 class="text-danger">${err}</h1>
<img src="../img/150320221117049980314.png" alt="">
  `;
};

const renderCountry = (country) => {
  const countriesDiv = document.querySelector(".countries");
  const {
    capital,
    name: { common },
    region,
    flags: { svg },
    languages,
    currencies,
  } = country;

  const language = renderLanguage(languages);
  const currency = getCurrency(currencies);
  const newCountry = document.createElement("div");
  newCountry.classList.add("d-flex", "justify-content-center", "mt-4");
  newCountry.innerHTML = `
    <div class="card" style="width: 18rem">
        <img src="${svg}" class="card-img-top" alt="${common} flag" />
        <div class="card-body">
          <h5 class="card-title">${common}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fa-solid fa-earth-europe"></i> ${region}</li>
          <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${capital}</li>
          <li class="list-group-item"><i class="fa-solid fa-language"></i> ${language}</li>
          <li class="list-group-item"><i class="fa-solid fa-money-bill-wave"></i> ${currency}</li>
        </ul>
      </div>`;

  document.querySelector(".cards").innerHTML = "";
  document.querySelector(".cards").append(newCountry);
};

const renderLanguage = (languages) => {
  return Object.values(languages).join(" ");
};

const getCurrency = (currencies) => {
  return `${Object.entries(currencies)[0][1].symbol || ""} ${
    Object.entries(currencies)[0][1].name
  }`;
};

const dropdown = document.querySelector("select");
dropdown.onchange = (e) => {
  fetchCountry(dropdown.options[dropdown.selectedIndex].text);
};
