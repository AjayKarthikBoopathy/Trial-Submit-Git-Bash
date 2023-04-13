//Pokemon API Redo

//img-${pokemon.sprites.front_default}
//img-${pokemon.sprites.other.home.front_default}
//svg-${pokemon.sprites.other.dream_world.front_default}

var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
//to add multiple classes to the same element with DOM
row.classList.add("row","m-3");
container.append(row);

document.body.append(container);

const pokemons_number = 50;
var pokemon;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	pokemon = await res.json();
	createPokemonCard(pokemon);
  //console.log(pokemon);
  
};

function createPokemonCard(pokemon) {
	
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	

	row.innerHTML += 
        `<div class="row col-lg-4 col-md-6 col-sm-12">
            <div class="card border-secondary mb-3" style="width: 20rem; height: 24rem; margin-top:20px; margin-left:45px">
              <h4 class="card card-header card-title">${name}</h4>

              <div class="card-body text-primary">
                <div>
                  <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" class="center"
                   style="height: 7rem; width: 13rem; margin-top: 5px; margin-bottom: 34px;
                   margin-left: auto; margin-right: auto; text-align: center;" alt="${name}" />
                </div>
                <div class="characs">
                  <p style="text-align: center;"> Ability: ${pokemon.abilities[0].ability.name}</p>
                  <p style="text-align: center;"> Move: ${pokemon.moves[0].move.name}</p>
                  <p style="text-align: center;"> Weight: ${pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>`;

	

	
}

fetchPokemons();


//Page number
var data;
var currentPage=1;
var countsPerPage=9;  //9

function gotoPage(pageNumber){
    currentPage=pageNumber;
    let end=(currentPage*9);
    let start=end - 9;

    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}

function previous(){
    currentPage--;
    let end=(currentPage*5);
    let start=end - 5;

    let tabledata="";
    for(let i=start;i<end ;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
    }
    document.getElementById("table-body").innerHTML=tabledata;
}


function next(){
    currentPage++;
    let end=(currentPage*5);
    let start=end - 5;
    
    
    let tabledata="";
    for(let i=start;i<end;i++){
        tabledata += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>`;
        
    }
    console.log(data);
    document.getElementById("table-body").innerHTML=tabledata;
}



document.querySelector("#prevButton").addEventListener("click", previous, false);
document.querySelector("#nextButton").addEventListener("click", next, false);

document.querySelector("#pg1").addEventListener("click", () => gotoPage(1), false);
document.querySelector("#pg2").addEventListener("click", () => gotoPage(2), false);
document.querySelector("#pg3").addEventListener("click", () => gotoPage(3), false);
