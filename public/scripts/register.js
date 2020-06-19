// Form part referred to select State/City

const stateList = document.querySelector('select[name=state]');
const cityList = document.querySelector('select[name=city]');
stateList.addEventListener('change', getCities);
const url = 'https://gist.githubusercontent.com/cassiogroh/6b2b449a1e3774c08d752ec0fc9d7214/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json'; // Forked file to get all American states and its cities

const prom = Promise.resolve(fetch(url).then(res => res.json())) // Using AJAX to fetch the states and cities from url

prom.then(resp => {
  let states = Object.getOwnPropertyNames(resp);

  states.map(state => {
    stateList.innerHTML += `<option value='${state}'>${state}</option>`;
  })
})

function getCities() {
  cityList.innerHTML = "<option> Select a city </option>"; // Resets the city list if changes the state
  cityList.disabled = false; // Enables the select city field
  let state = document.querySelector('select[name=state]').value; // Getting the name of the selected state
  console.log(state)

  if (state == 0) {
    cityList.disabled = true; // Disables the city's select if reselects to default
  } else {

    prom.then(resp => {
      resp[state].map(city => {
        cityList.innerHTML += `<option value='${city}'>${city}</option>` // Adding the cities from the referred state
      })
    })
  }
};

// Selecting Items on the lower part of the form

let select = document.querySelectorAll('li[class=box]')

for (item of select) {
  item.addEventListener('click', addSelectClass) // Adding click listener for all the cards
}

function addSelectClass() {
  const item = event.target;
  item.classList.toggle('select');
}