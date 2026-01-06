// import './style.css'

/////example
/* async function getData(poke) {
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
getData("Squirtle"); */

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

const apiURL = "https://wizard-world-api.herokuapp.com/Spells";

async function getData(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.status != 200) {
            throw new Error(response);
        } else {
            const data = await response.json();
            const spells = data;
            const container = document.querySelector(".container")
            spells.forEach(spell => {
                container.insertAdjacentHTML("afterbegin", `
                    <div id = "cards" class = " m-8 p-8 border-4 border-sky-900 bg-gray-200">
                        <div id="name" class ="font-bold underline underline-offset-4">${spell.name}</div>
                        <div id="id">Id: ${spell.id}</div>
                        <div id="incantation">Incantation: ${spell.incantation || "None"}</div>
                        <div id="effect">Effect: ${spell.effect}</div>
                        <div id="verbal">Is it verbal?: ${spell.canBeVerbal || "No"}</div>
                        <div id="type">Spell type: ${spell.type}</div>
                        <div id="color">Color: ${spell.light}</div>
                        <div id="creator">Creator: ${spell.creator || "Unknown"}</div>
                    </div>    
                    `)
                    //FIX THIS LATER
/*                 if (spell.canBeVerbal === true) {
                    console.log("Yes")
                } */
            })
        }
    } catch (error) {
        console.log(error);
    }
}
getData(apiURL);

function search(input) {
    const cards = document.querySelectorAll("#cards");
    const search = input.toLowerCase();
    cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        if (text.includes(search)) {
            card.style.display = "inline-block"
        } else {
            card.style.display = "none";
        }
    })
}
document.querySelector("#search input").addEventListener("input", (event) => {
    search(event.target.value);
});