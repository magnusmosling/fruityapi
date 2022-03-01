const fruitycontainer = document.querySelector(".respons")

const url = "https://www.fruityvice.com/api/fruit/";

const proxy = "https://noroffcors.herokuapp.com/"

const fruitycontainer1 = proxy + url;


async function fetchAllFruits(){
    try {
        const fruitsRespons = await fetch (fruitycontainer1)
        const fruitsResponsJSON = await fruitsRespons.json();
        console.log("fruitsResponsJSON: ", fruitsResponsJSON);

        for (let i = 0; i < fruitsResponsJSON.length; i++) {
            console.log(fruitsResponsJSON[i]);

            fruitycontainer.innerHTML += `<div>
            <a <p>  ${fruitsResponsJSON[i].name} </p></a>
                </div>`
        }


    }catch(error){
        console.log(error);

    }
}
fetchAllFruits();