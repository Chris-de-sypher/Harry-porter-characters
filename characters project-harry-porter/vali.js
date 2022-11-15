// url fetched from hp-api.herokuapp
const url = "https://hp-api.herokuapp.com/api/characters" ;
// called by dom to place the mappeditems
const usersCharacters = document.querySelector('.charcters-profile');
// search input called from the dom
const search = document.querySelector('#search');
// never used
const searchIcon = document.querySelector('.fa-magnifying-glass');
// an empty array which was later used to store all characters after being fetched
let charactersPlace = []



// adding eventlistenner to the search input, the keyup event simply means that the action takes place after the key is being pressed
search.addEventListener("keyup", (e)=>{
    e.preventDefault();
    // getting the values input after the key is being pressed and it's being converted to a lowercase 
    const searcString = e.target.value.toLowerCase();
    // created a variable and asigned the filtered result to the variable--filteredCharacters
    const filteredCharacters = charactersPlace.filter(item => {
        return(
        item.name.toLowerCase().includes(searcString) || item.house.toLowerCase().includes(searcString) || item.gender.toLowerCase().includes(searcString)|| item.species.toLowerCase().includes(searcString)
        );
    })
    // we passed the result from the filteredCharacters as a paramerter to the charactersMap which returns a new array
    charactersMap(filteredCharacters)
})


async function personCharacters(){
const fetches = await fetch(url);
charactersPlace = await fetches.json();
charactersMap(charactersPlace);
}

async function charactersMap(characters){
    const charctersOutputs = await characters.map(item => {
        return `<div class="card">
        <div class="card-grid">
        <div class="card-img">
            <img src="${item.image}" alt="">
        </div>
        <div class="card-text">
            <h2>${item.name}</h2>
            <p>${item.species}</p>
            <p>${item.house}</p>
            <p>${item.gender}</p>
        </div>
    </div>
    </div>`
    })
    .join('')
    usersCharacters.innerHTML = charctersOutputs;
}
personCharacters();
