



const fruitycontainer = document.querySelector(".fruity-container")

const url = "https://www.fruityvice.com/api/fruit/all";

const proxy = "https://noroffcors.herokuapp.com/"

const fruitycontainer1 = proxy + url;


async function fetchAllFruits(){
    try {
        const fruitsRespons = await fetch (fruitycontainer1)
        const fruitsResponsJSON = await fruitsRespons.json();
        console.log("fruitsResponsJSON: ", fruitsResponsJSON);

        for (let i = 0; i < fruitsResponsJSON.length; i++) {
            console.log(fruitsResponsJSON[i]);

            fruitycontainer.innerHTML += `<div class="fruit-card">
            <a href="./details.html?name=${fruitsResponsJSON[i].name} "> <p>   ${fruitsResponsJSON[i].name} </p></a>
            <p>   ${fruitsResponsJSON[i].id} </p>
            <p>   ${fruitsResponsJSON[i].family} </p>
                </div>`
        }


    }catch(error){
        console.log(error);

    }
}
fetchAllFruits();

