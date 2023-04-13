//Pages Async

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
var url;
var res;
var i;
var dataa="";

// const fetchPokemons = async () => {
// 	for (let i = 1; i <= pokemons_number; i++) {
// 		await getPokemon(i);
// 	}
// };

// const getPokemon = async id => {
// 	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
// 	const res = await fetch(url);
// 	pokemon = await res.json();

// 	gotoPage(1);
//   //console.log(pokemon);
  
// };



//Page number
var data;
var currentPage=1;
var countsPerPage=9;  //9

async function gotoPage(pageNumber){
    currentPage=pageNumber;
    let end=(currentPage*10);
    let start=end - 9;
    dataa="";
    
    for( i=start;i<end;i++){
    async function getPokemon(i){
        url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        res = await fetch(url);
        pokemon = await res.json();
        //console.log(pokemon);
    
        console.log(pokemon.name);
        //console.log(pokemon.abilities[0].ability.name);
        //console.log(pokemon.moves[0].move.name);
        console.log(pokemon.weight);
        
   
        dataa = 
        `<div class="row col-lg-4 col-md-6 col-sm-12">
            <div class="card border-secondary mb-3" style="width: 20rem; height: 24rem; margin-top:20px; margin-left:45px">
              <h4 class="card card-header card-title">${pokemon.name}</h4>

              <div class="card-body text-primary">
                <div>
                  
                </div>
                <div class="characs">
                  <p style="text-align: center;"> Ability: ${pokemon.abilities[0].ability.name}</p>
                  <p style="text-align: center;"> Move: ${pokemon.moves[0].move.name}</p>
                  <p style="text-align: center;"> Weight: ${pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>`;
          //document.getElementsByClassName("row").innerHTML=dataa;
        }
        getPokemon(i);
        
    } //document.getElementsByClassName("row").innerHTML=dataa;
	
    document.getElementsByClassName("row").innerHTML=dataa;
             
}

gotoPage(1);
// gotoPage(2);
// gotoPage(3);



async function previous(){
    currentPage--;
    let end=(currentPage*10);
    let start=end - 9;
    dataa="";
    
    for( i=start;i<end;i++){
    async function getPokemon(i){
        url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        res = await fetch(url);
        pokemon = await res.json();
        //console.log(pokemon);
    
        console.log(pokemon.name);
        console.log(pokemon.abilities[0].ability.name);
        console.log(pokemon.moves[0].move.name);
        console.log(pokemon.weight);
        
   
        dataa = 
        `<div class="row col-lg-4 col-md-6 col-sm-12">
            <div class="card border-secondary mb-3" style="width: 20rem; height: 24rem; margin-top:20px; margin-left:45px">
              <h4 class="card card-header card-title">${pokemon.name}</h4>

              <div class="card-body text-primary">
                <div>
                  
                </div>
                <div class="characs">
                  <p style="text-align: center;"> Ability: ${pokemon.abilities[0].ability.name}</p>
                  <p style="text-align: center;"> Move: ${pokemon.moves[0].move.name}</p>
                  <p style="text-align: center;"> Weight: ${pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>`;
          //document.getElementsByClassName("row").innerHTML=dataa;
        }
        getPokemon(i);
        
    } //document.getElementsByClassName("row").innerHTML=dataa;
	
    document.getElementsByClassName("row").innerHTML=dataa;
 
}

async function next(){
    currentPage++;
    let end=(currentPage*10);
    let start=end - 9;
    dataa="";
    
    for( i=start;i<end;i++){
    async function getPokemon(i){
        url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        res = await fetch(url);
        pokemon = await res.json();
        //console.log(pokemon);
    
        console.log(pokemon.name);
        console.log(pokemon.abilities[0].ability.name);
        console.log(pokemon.moves[0].move.name);
        console.log(pokemon.weight);
        
   
        dataa = 
        `<div class="row col-lg-4 col-md-6 col-sm-12">
            <div class="card border-secondary mb-3" style="width: 20rem; height: 24rem; margin-top:20px; margin-left:45px">
              <h4 class="card card-header card-title">${pokemon.name}</h4>

              <div class="card-body text-primary">
                <div>
                  
                </div>
                <div class="characs">
                  <p style="text-align: center;"> Ability: ${pokemon.abilities[0].ability.name}</p>
                  <p style="text-align: center;"> Move: ${pokemon.moves[0].move.name}</p>
                  <p style="text-align: center;"> Weight: ${pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>`;
          //document.getElementsByClassName("row").innerHTML=dataa;
        }
        getPokemon(i);
        
    } //document.getElementsByClassName("row").innerHTML=dataa;
	
    document.getElementsByClassName("row").innerHTML=dataa;
       
}



// document.querySelector("#prevButton").addEventListener("click", previous, false);
// document.querySelector("#nextButton").addEventListener("click", next, false);

document.querySelector("#pg1").addEventListener("click", async () => gotoPage(1));
document.querySelector("#pg2").addEventListener("click", async () => gotoPage(2));
document.querySelector("#pg3").addEventListener("click", async () => gotoPage(3));
// document.querySelector("#pg4").addEventListener("click", () => gotoPage(4), false);
// document.querySelector("#pg5").addEventListener("click", () => gotoPage(5), false);

//Dummy
// document.querySelector("#pg4").addEventListener("click", () => gotoPage(4), false);
// document.querySelector("#pg5").addEventListener("click", () => gotoPage(5), false);