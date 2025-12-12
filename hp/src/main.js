import './style.css'

/////example
async function getData(poke) {
    try {
        //get data from api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        if (response.status != 200) {
            throw new Error(response);
        } else {
            //converts response into json we can use
            const data = await response.json();
            //console.log(data);
            document.getElementById("api-response").textContent = data.name;
        }
    } catch (error) {
        console.log(error);
    }
}
getData("Squirtle");

/////my code

let data = [
    {
        id: "",
        name: "",
        incantation: "",
        effect: "",
        canBeVerbal: "",
        type: "",
        ligt: "",
        creator: "" 
    }
]

async function getData(spells) {
    try {
        //get data from api
        const response = await fetch(`https://wizard-world-api.herokuapp.com/Spells${spells}`);
        if (response.status != 200) {
            throw new Error(response);
        } else {
            //converts response into json we can use
            const data = await response.json();
            //console.log(data);
            document.getElementById("api-response").textContent = data.name;
        }
    } catch (error) {
        console.log(error);
    }
}
getData("Opening Charm");