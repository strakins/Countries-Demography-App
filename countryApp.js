let countries;

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
            
                
                    <div class="card mx-3 mb-3"  style="width: 18rem;">
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

        document.getElementById("country-card").innerHTML = details;
    }