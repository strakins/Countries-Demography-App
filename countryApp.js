const allCountries = document.getElementById("country-card");
const regions = document.getElementById("selected-region");
// To track user typing into the searchbar, use id of the input
let searchBar = document.getElementById("search-bar");
// Initilize countries globally to make it accessible from any part of the the code
let countries;


// Variable Declaration to switch background color: target the id and body 
const colorSwitch = document.getElementById("switch-background");
const main = document.getElementById("main")
const search =  document.getElementById("search-bar")
const countryChoice = document.getElementById("country-choice")
const body = document.body;
// console.log(searchBar)
const colors = ["hsl(207, 26%, 17%)", "hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)", "hsl(0, 0%, 98%)", "hsl(200, 15%, 8%)"];

// DArk Mode Switch Functionality
colorSwitch.addEventListener("click", changeBackground);
function changeBackground() {
        // document.getElementById("switch-background").innerText = "Light Mode"
        body.style.backgroundColor = colors[0];
        body.style.color = colors[1];
        // search.style.backgroundColor = colors[2]
        main.style.backgroundColor = colors[2]        
}


// Add event listener with keyup to track user countryname input
searchBar.addEventListener('keyup', (e) => {
    // set all entries from users to uppercase as the API will not recognize lowercase and the search functionality may not respond
    const countryName = e.target.value.toUpperCase();
    const userInput = countries.filter((country) => {
        return (
            country.name.toUpperCase().includes(countryName) || country.alpha3Code.toUpperCase().includes(countryName)
        );

    });
    // consolelog your output to confirm your code is not breaking
    console.log(userInput)

    // Use the display function to print 
    display(userInput)
});



// Add event listener To filter Region Not Working as of 13/3/2022 
regions.addEventListener("click", (e) => {
    const regionList = e.target.value;
    // console.log(regionList)
    const selectedRegion = countries.filter((country) => {
        return(
            country.region.includes(regionList)
        );

    });
    console.log(selectedRegion)
    // display(selectedRegion)
});


// Calling the countries api

    fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => display(data))
    .catch(err => console.log("Error", err));

    function display(countriesData) {
        console.log(countriesData)
        countries = countriesData;
        
        let details = "";
        countries.forEach(country => {
            details += `
            
                
                    <div class="card mx-2 mb-3"  style="width: 18rem;">
                        <img src=${country.flag} class="card-img" alt= ${country.name} flag>
                        <div class="card-body bg-secondary text-white" id="country-choice">
                        <h4 class="card-title country">${country.name} </h4>
                        <h5 class="population">Population: ${country.population}</h5>
                        <h5 class="card-text region">Region: ${country.region}</h5>
                        <h5 class="capital">Capital: ${country.capital}</h5>
                        </div>
                    </div>
               
            
            
            `
        })

        allCountries.innerHTML = details;

        
    }

    