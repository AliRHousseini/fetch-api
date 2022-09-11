// fetching the dog image and putting it in the image part
fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    document.getElementById('get-image').src=data.message;
});

//fetching age, gender, and nantionality
//redundant functions need to be reduced to one
window.onload = () => {
const getAgeInput = (api) =>{
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.age)
        document.getElementById('get-age').innerHTML=data.age;
    });
    }

const getGenderInput = (api) =>{
fetch(api)
.then((response) => response.json())
.then((data) => {
    console.log(data.gender)
    document.getElementById('get-gender').innerHTML=data.gender;
});
}   

const getNationInput = (api) =>{
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.country[0].country_id)
        document.getElementById('get-nation').innerHTML=data.country[0].country_id;
        document.getElementById('get-nation2').innerHTML=data.country[1].country_id;
    });
    }


let startSearch = (e) => {
    const name = document.getElementById("input-name").value; 
    const apiAge="https://api.agify.io/?name=" + name;
    let apiGender="https://api.genderize.io?name=" + name;
    let apiNation="https://api.nationalize.io/?name=" + name;
    let ageJson = getAgeInput(apiAge);
    let genderJson = getGenderInput(apiGender);
    let nationalityJson = getNationInput(apiNation);
    document.getElementById("final-results").classList.remove("visibile")
    document.getElementById("search-results").classList.add("visibile")
}

search.addEventListener("click", startSearch);

}