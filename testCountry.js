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
    })
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


const back = document.getElementById("back")
const hidemodal = document.querySelector(".countryModal")
back.addEventListener("click", () => {
    hidemodal.classList.toggle(show)
})

// search.addEventListener("input", () => {
//     console.log(search.value)
// })