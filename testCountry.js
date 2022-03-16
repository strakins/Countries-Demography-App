const countryElement = document.querySelector(".pickCountries")
const search = document.querySelector(".search")
const dropDown = document.querySelector(".dropDown")
const dropElem =  document.querySelector(".drop")
const region = document.querySelectorAll(".region")
const regionName = document.getElementsByClassName("regionName")
const countryName = document.getElementsByClassName("countryName")
// const search = document.getElementsByClassName("regionName")



async function allCountries() {
    const url = await fetch("https://restcountries.com/v2/all")
    const res = await url.json();
    console.log(res)
    res.forEach (element => {
        displayCountry(element)
    });
}
allCountries()

function displayCountry(data) {
    const countryHolder = document.createElement("div")
    countryHolder.classList.add("countryHolder")
    countryHolder.innerHTML =  
    `
                    <div class="card mx-2 mb-3" style="width: 18rem;">
                        <img src="${data.flag}"  class="card-img img-fluid" alt= ${data.name}>
                        <div class="card-body" id="country-choice">
                        <h4 class="card-title countryName">${data.name} </h4>
                        <h5 class="population">Population: ${data.population.toLocaleString("en-US")}</h5>
                        <h5 class="card-text regionName">Region: ${data.region}</h5>
                        <h5 class="capital">Capital: ${data.capital}</h5>
                        </div>
                    </div>
    `

    countryElement.appendChild(countryHolder)
    countryHolder.addEventListener("click", () => {
        showCountryDetails(data)
        console.log(showCountryDetails(data))
    })
}



dropDown.addEventListener("click", ()=> {
    dropElem.classList.toggle("showDropDown")
    // console.log("hello")
})

region.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element);
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText) || element.innerText=="All") {
                elem.parentElement.parentElement.style.display="grid"
            }else{
                elem.parentElement.parentElement.style.display="none"
            }
        });
    })
});

search.addEventListener("input", () => {
    console.log(search.value.toUpperCase())
    Array.from(countryName).forEach(elem => {
        console.log(elem.innerText);
        if(elem.innerText.toUpperCase().includes(search.value.toUpperCase())) {
            elem.parentElement.parentElement.style.display="grid"
        }else{
            elem.parentElement.parentElement.style.display="none"
        }
    })
});

// search(element => {
//     element.addEventListener("keyup", () => {
//         console.log(element)
//     })
// })

// Variable Declaration to switch background color: target the id and body 
const colorSwitch = document.getElementById("switch-background");
colorSwitch.onclick = () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        document.getElementById("switch-background").innerText = "Light Mode"        
    }else {
        document.getElementById("switch-background").innerText = "Dark Mode"
        // document.getElementById("switch-background").innerHTML = 
    }
};


const showModal = document.querySelector(".countryModal")
function showCountryDetails(data) {
    showModal.classList.toggle("show")
    showModal.innerHTML = `
    
        <div class="p-5">
            <h5 class="btn" id="back"><i class="fa-solid fa-left-long"></i> Back</h5>
        </div>
        <div class="p-4 d-flex align-items-center justify-content-evenly">
            <div>
                <img src="${data.flag}" alt="country-flag" class="country-details-img">
            </div>
            <div class="" id="country-description">
                <h2 class="fw-bold">${data.name}</h2>
                <div class="d-flex pt-5">
                    <div>
                        <h6><strong>Native Name:</strong> ${data.nativeName}</h6>
                        <h6><strong>Population:</strong> ${data.population.toLocaleString("en-US")}</h6>
                        <h6><strong>Region:</strong> ${data.region}</h6>
                        <h6><strong>Sub Region:</strong> ${data.subregion}</h6>
                        <h6><strong>Capital:</strong> ${data.capital}</h6>
                    </div>
                    <div class="mx-5">
                        <h6><strong>Top Level Domain: </strong>${data.topLevelDomain}</h6>
                        <h6><strong>Currencies: </strong>${data.currencies.map(elem => elem.symbol)}</h6>
                        <h6><strong>Languages:</strong> ${data.languages.map(elem => elem.name)}</h6>
                    </div>
                </div>
                <div class="d-flex py-3">
                    <h5 class="me-3 pt-2"><strong>Border Countries:</strong></h5>
                    <button id="back"  class="btn me-3">${data.borders}</button>
                </div>
            </div>
        </div>
    `
    // const back = document.querySelector(".back")
    back.addEventListener("click", () => {
        showModal.classList.toggle("show")
    })
}
// search.addEventListener("input", () => {
//     console.log(search.value)
// })