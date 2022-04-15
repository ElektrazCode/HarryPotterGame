const booksUrl = "https://the-harry-potter-database.herokuapp.com/api/1/books/all";
// const spellsUrl = "https://fedeperin-harry-potter-api-en.herokuapp.com/spells";
const spellsUrl = "https://the-harry-potter-database.herokuapp.com/api/1/spells/all";
const charactersUrl = "https://fedeperin-harry-potter-api-en.herokuapp.com/characters";
const potionsUrl = "https://the-harry-potter-database.herokuapp.com/api/1/potions/all";



document.querySelector('.books').addEventListener('click', getBooks);
document.querySelector('.characters').addEventListener('click', getCharacters);
document.querySelector('.spells').addEventListener('click', getSpells);
document.querySelector('.potions').addEventListener('click', getPotions);

// fetch( "https://the-harry-potter-database.herokuapp.com/api/1/spells/all")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((e) => console.log(e));

function getBooks() {

document.querySelector('.swiper').hidden = false;
    
if(document.querySelectorAll('.swiper-slide')!==null){
    document.querySelectorAll('.swiper-slide').forEach(e => e.remove());
}

fetch(booksUrl)
	.then((res) => res.json())
	.then((data) => {
		data.forEach(book => {
            const card = document.createElement('div');
            card.className = 'swiper-slide';
            document.querySelector('.swiper-wrapper').append(card);

            const cardHeader = document.createElement('div');
            cardHeader.className = 'cardHeader';
            card.append(cardHeader);
            
            const cardbody = document.createElement('div');
            cardbody.className = 'cardbody';
            card.append(cardbody);

            const title = document.createElement('h2');
            title.innerText = book.title;
            cardHeader.appendChild(title);
            // console.log(`Book no.${book.id}`)

            const author = document.createElement('h3');
            author.innerText = book.author;
            cardHeader.appendChild(author);
            
            const release = document.createElement('h3');
            release.innerText = book.publish_date[1].US;
            cardHeader.appendChild(release);

            const picture = document.createElement('img');
            picture.src = book.book_covers[1].URL;
            cardbody.appendChild(picture);

            // const description = document.createElement('p');
            // description.innerText = book.description;
            // cardbody.appendChild(description);
        })
	})
	.catch((e) => console.log(e));
}
function getCharacters() {

    document.querySelector('.swiper').hidden = false;

    if(document.querySelectorAll('.swiper-slide')!==null){
        document.querySelectorAll('.swiper-slide').forEach(e => e.remove());
    }

    fetch(charactersUrl)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(character => {

                const card = document.createElement('div');
                card.className = 'swiper-slide';
                document.querySelector('.swiper-wrapper').append(card);
    
                const cardHeader = document.createElement('div');
                cardHeader.className = 'cardHeader';
                card.append(cardHeader);
                
                const cardbody = document.createElement('div');
                cardbody.className = 'cardbody';
                card.append(cardbody);
    
                const name = document.createElement('h2');
                name.innerText = character.character;
                cardHeader.appendChild(name);
    
                const house = document.createElement('h3');
                house.innerText = character.hogwartsHouse;
                cardHeader.appendChild(house);
    
                const picture = document.createElement('img');
                picture.src = character.image;
                cardbody.appendChild(picture);
            })
        })
        .catch((e) => console.log(e));
        
}
function getSpells() {

    document.querySelector('.swiper').hidden = false;

    if(document.querySelectorAll('.swiper-slide')!==null){
        document.querySelectorAll('.swiper-slide').forEach(e => e.remove());
    }

    fetch(spellsUrl)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(spell => {

                const card = document.createElement('div');
                card.className = 'swiper-slide';
                // card.className = 'swiper-scroll';
                document.querySelector('.swiper-wrapper').append(card);
    
                const cardHeader = document.createElement('div');
                cardHeader.className = 'cardHeader';
                card.append(cardHeader);
                
                const cardbody = document.createElement('div');
                cardbody.className = 'cardbody';
                card.append(cardbody);
    
                const spellName = document.createElement('h2');
                spellName.innerText = spell.name;
                cardHeader.appendChild(spellName);
    
                const spellType = document.createElement('h3');
                spellType.innerText = spell.spell_type;
                cardHeader.appendChild(spellType);
                
                const picture = document.createElement('img');
                picture.src = 'images/wand3.jpg';
                picture.style.width = "150px";
                picture.style.height = "150px";
                picture.style.borderRadius="50%";
                cardbody.appendChild(picture);

                const description = document.createElement('p');
                description.innerText = spell.description;
                cardbody.appendChild(description);
                
            })
        })
        .catch((e) => console.log(e));
        
    }

    function getPotions() {

        document.querySelector('.swiper').hidden = false;

        if(document.querySelectorAll('.swiper-slide')!==null){
            document.querySelectorAll('.swiper-slide').forEach(e => e.remove());
        }
    
        fetch(potionsUrl)
            .then((res) => res.json())
            .then((data) => {
                data.forEach(potion => {
    
                    const card = document.createElement('div');
                    card.className = 'swiper-slide';
                    // card.className = 'swiper-scroll';
                    document.querySelector('.swiper-wrapper').append(card);
        
                    const cardHeader = document.createElement('div');
                    cardHeader.className = 'cardHeader';
                    card.append(cardHeader);
                    
                    const cardbody = document.createElement('div');
                    cardbody.className = 'cardbody';
                    card.append(cardbody);
        
                    const potionName = document.createElement('h2');
                    potionName.innerText = potion.name;
                    cardHeader.appendChild(potionName);
        
                    // const spellType = document.createElement('h3');
                    // spellType.innerText = spell.spell_type;
                    // cardHeader.appendChild(spellType);
                    
                    const picture = document.createElement('img');
                    let ImgSource = 'images/Potion' + Math.round(Math.random()*3 +1) + '.jpg';
                    picture.src = ImgSource;

                    picture.style.width = "150px";
                    picture.style.height = "200px";
                    picture.style.borderRadius="50%";
                    cardbody.appendChild(picture);
    
                    const description = document.createElement('p');
                    description.innerText = potion.description;
                    cardbody.appendChild(description);
                    
                })
            })
            .catch((e) => console.log(e));
            
        }