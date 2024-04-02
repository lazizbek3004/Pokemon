console.log(pokemons.length);
// gonna create box div 
// then first picture then index num then name
// ok lets go
let all  = document.querySelector('.all')
console.log(pokemons[0].name);

for(let i=0;i<pokemons.length ;i++){
    let box = document.createElement('div')
    box.className = 'box';
    all.appendChild(box)
    let image = document.createElement('img')
    image.className = 'image'
    image.src = pokemons[i].img
    box.appendChild(image)
    let span = document.createElement('span')
    span.className = 'index'
    span.textContent = i+1; 
    box.appendChild(span)
    let div = document.createElement('div')
    div.className = 'text'
    div.textContent = pokemons[i].name;
    box.appendChild(div)

}

