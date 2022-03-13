const allCountries = document.getElementById("country-card");
// To track user typing into the searchbar, use id of the input
const searchBar = document.getElementById("search-bar")
// console.log(searchBar)


// Initilize countries globally to make it accessible from any part of the the code
let countries;


// Add event listener with keyup i.e anytime a button is pressed on the keyboard
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
                        <div class="card-body bg-secondary text-white">
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

    