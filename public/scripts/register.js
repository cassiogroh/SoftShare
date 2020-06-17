
let cities = require('./usaCities');

const stateList = document.querySelector('select[name=state]');
const cityList = document.querySelector('select[name=city]');
stateList.addEventListener('change', getCities);

cities = cities.map(c => ({ name: c.city, state: c.state }));

const groupedCities = {};
const stateArray = [];
cities.forEach(c => {
    const stateName = c.state.replace(' ', '');
    if (!groupedCities[stateName]) {
        groupedCities[stateName] = [];
        stateArray.push(stateName);
    }
    groupedCities[stateName].push(c);
});

let count = 1;
for (const state of stateArray) {
    stateList.innerHTML += `<option value='${count}'>${state}</option>`
    count += 1;
}

function getCities() {
    cityList.disabled = false;
    // let count = 1;

    let stateId = document.querySelector('select[name=state]').value;
    let state = stateArray[stateId - 1];

    for (let i = 0; i < groupedCities[state].length; i++) {
        cityList.innerHTML += `<option value='${i}'>${groupedCities[state][i].name}</option>`
    }
}
