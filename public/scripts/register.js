// Form part referred to select State/City

const stateList = document.querySelector('select[name=state]');
const cityList = document.querySelector('select[name=city]');
stateList.addEventListener('change', getCities);
const url = 'https://gist.githubusercontent.com/cassiogroh/6b2b449a1e3774c08d752ec0fc9d7214/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json'; // Forked file to get all American states and its cities

fetch(url)
  .then(res => res.json())
  .then(resp => {
    let states = Object.getOwnPropertyNames(resp);
    let count = 1;

    for (state of states) { // Adding all the 50 states as select options
      stateList.innerHTML += `<option value='${count}'>${state}</option>`;
      count++;
    }
  })

function getCities() {
  cityList.innerHTML = "<option> Select a city </option>"; // Resets the city list if changes the state
  cityList.disabled = false; // Enables the select city field
  let stateId = document.querySelector('select[name=state]').value;
  let count = 1;

  if (stateId == 0) {
    cityList.disabled = true; // Disables the city's select if reselects to default
  } else {
    fetch(url)
      .then(res => res.json())
      .then(resp => {
        let state = Object.getOwnPropertyNames(resp)[stateId - 1]; // Getting the name of the state selected
        for (city of resp[state]) {
          cityList.innerHTML += `<option value='${count}'>${city}</option>` // Adding the cities from the referred state
          count++;
        }
      })
  }
}

// Selecting Items on the lower part of the form

let select = document.querySelectorAll('li[class=box]')

for (item of select) {
  item.addEventListener('click', addSelectClass)
}

function addSelectClass() {
  const item = event.target;

  item.classList.toggle('select');
}