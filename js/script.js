
fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    document.getElementById('get-image').src=data.message;
});

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
    console.log(apiAge)
    let apiGender="https://api.genderize.io?name=" + name;
    let apiNation="https://api.nationalize.io/?name=" + name;

    let ageJson = getAgeInput(apiAge);
    // console.log(ageJson)
    let genderJson = getGenderInput(apiGender);
    let nationalityJson = getNationInput(apiNation);
    // console.log(ageJson)
    document.getElementById("final-results").classList.remove("result")
    document.getElementById("search-results").classList.add("result")
}


//     fetch(apiAge)
//   .then((response) => response.json())
//   .then((data) => console.log(data));


    search.addEventListener("click", startSearch);
    // reset.addEventListener("click", resetHandler)
    // reset.addEventListener("click",document.location.reload(true))


}