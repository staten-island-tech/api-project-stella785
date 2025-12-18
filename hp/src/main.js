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
                container.insertAdjacentHTML("beforeend", `
                    <div class = "cards">
                        <h2>id: ${spell.id}</h2>
                        <h2>name: ${spell.name}</h2>
                        <h2>incantation: ${spell.incantation || "None"}</h2>
                        <h2>effect: ${spell.effect}</h2>
                        <h2>is it verbal?: ${spell.canBeVerbal || "No"}</h2>
                        <h2>spell type: ${spell.type}</h2>
                        <h2>color: ${spell.light}</h2>
                        <h2>creator: ${spell.creator || "Unknown"}</h2>
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