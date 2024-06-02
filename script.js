document.addEventListener('DOMContentLoaded', function() {

    const permanentItems = [
        {
            "name": "Conjunto Moletom Urso",
            "image": "img/i1.webp",
            "size": "1, 2, 3, 4, 6, 8",
            "description": "Prepare sua pequena para aventuras confortáveis com nosso conjunto de moletom para crianças femininas! Este conjunto é perfeito para mantê-la quentinha e estilosa durante as brincadeiras e atividades do dia a dia. Com uma blusa de moletom e calças combinando, ela estará pronta para enfrentar qualquer clima. Feito com materiais macios e duráveis, este conjunto oferece conforto incomparável enquanto ela se diverte explorando o mundo ao seu redor. Nosso conjunto de moletom é a escolha perfeita para meninas cheias de energia e personalidade!",
            "price": "150,90"
        },
        {
            "name": "Conjunto Moletom Ursos",
            "image": "img/i2.webp",
            "size": "1, 2, 3, 4, 6, 8",
            "description": "Prepare sua pequena para aventuras confortáveis com nosso conjunto de moletom para crianças femininas! Este conjunto é perfeito para mantê-la quentinha e estilosa durante as brincadeiras e atividades do dia a dia. Com uma blusa de moletom e calças combinando, ela estará pronta para enfrentar qualquer clima. Feito com materiais macios e duráveis, este conjunto oferece conforto incomparável enquanto ela se diverte explorando o mundo ao seu redor. Nosso conjunto de moletom é a escolha perfeita para meninas cheias de energia e personalidade!",
            "price": "143,90"
        },
        {
            "name": "Conjunto Moletom Hoodie",
            "image": "img/i3.webp",
            "size": "1, 2, 3, 4, 6, 8",
            "description": "Prepare sua pequena para aventuras confortáveis com nosso conjunto de moletom para crianças femininas! Este conjunto é perfeito para mantê-la quentinha e estilosa durante as brincadeiras e atividades do dia a dia. Com uma blusa de moletom e calças combinando, ela estará pronta para enfrentar qualquer clima. Feito com materiais macios e duráveis, este conjunto oferece conforto incomparável enquanto ela se diverte explorando o mundo ao seu redor. Nosso conjunto de moletom é a escolha perfeita para meninas cheias de energia e personalidade!",
            "price": "196,90"
        },
        {
            "name": "Short Meia Malha",
            "image": "img/v1.webp",
            "size": "1, 2, 3, 4, 6, 8",
            "description": "Prepare sua pequena para aproveitar dias ensolarados com nosso adorável short de meia malha! Este short é perfeito para proporcionar conforto e estilo durante as brincadeiras ao ar livre ou para um look descontraído em casa. Feito com um tecido macio e respirável de meia malha, oferece uma sensação suave e fresca contra a pele, mantendo-a confortável durante todo o dia. Com um ajuste confortável e uma cintura elástica, permite movimentos livres e fácil colocação. Além disso, seu design versátil e moderno combina facilmente com camisetas, regatas e blusas, proporcionando uma infinidade de opções para criar looks divertidos e descolados. Nosso short de meia malha é uma escolha perfeita para acompanhar sua pequena em todas as aventuras de verão!",
            "price": "44,90"
        },
        {
            "name": "Blusa Meia Malha",
            "image": "img/v2.webp",
            "size": "1, 2, 3, 4, 6, 8",
            "description": "Eleve o estilo casual da sua pequena com nossa encantadora blusa de meia malha! Esta blusa é perfeita para criar looks confortáveis e cheios de charme para diversas ocasiões. Feita com um tecido de meia malha macio e respirável, proporciona uma sensação suave e fresca durante todo o dia. Seu design versátil e moderno apresenta detalhes encantadores, como estampas divertidas ou bordados delicados, adicionando um toque especial ao visual. Com mangas curtas para maior conforto nos dias mais quentes e uma silhueta relaxada, esta blusa é uma escolha ideal para brincar, estudar ou simplesmente relaxar com estilo. Nossa blusa de meia malha é a peça perfeita para adicionar um toque de elegância descontraída ao guarda-roupa da sua pequena!",
            "price": "54,90"
        },
        {
            "name": "Vestido Estampa de Girafa",
            "image": "img/v3.webp",
            "size": "1, 2, 3, 4, 6, 8",
            "description": "Encante sua pequena princesa com nosso adorável vestido infantil feminino! Este vestido é uma escolha encantadora para ocasiões especiais, festas ou simplesmente para adicionar um toque de elegância ao seu dia a dia. Com um design delicado e detalhes encantadores, como estampas florais ou bordados delicados, este vestido é a combinação perfeita de estilo e conforto. Feito com tecidos de alta qualidade e acabamento impecável, garante um ajuste confortável e liberdade de movimento para que ela possa brincar e se divertir com facilidade. Nosso vestido infantil é a escolha ideal para tornar sua pequena ainda mais radiante e confiante em qualquer ocasião!",
            "price": "63,90"
        },      
    ];
    
    function initializeLocalStorage() {
        if (!localStorage.getItem('clothes')) {
            localStorage.setItem('clothes', JSON.stringify(permanentItems));
        }
    }

    initializeLocalStorage();

    let clothes = JSON.parse(localStorage.getItem('clothes'));

    const clothesForm = document.getElementById('clothes-form');

    function displayManageList() {
        const manageList = document.getElementById('manage-list');
        if (manageList) {
            manageList.innerHTML = '';
            clothes.forEach((item, index) => {
                const clothingItem = document.createElement('div');
                clothingItem.classList.add('clothing-item');
                clothingItem.innerHTML = `
                    <div class="clothing-text">
                        <span>${item.name}</span>
                    </div>
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <button data-index="${index}">Excluir</button>`;
                manageList.appendChild(clothingItem);
            });
            manageList.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', function() {
                    let index = this.getAttribute('data-index');
                    clothes.splice(index, 1);
                    localStorage.setItem('clothes', JSON.stringify(clothes));
                    displayManageList();
                });
            });
        }
    }

    if (clothesForm) {
        clothesForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const image = document.getElementById('image').value;
            const size = document.getElementById('size').value;
            const description = document.getElementById('description').value;
            const price = document.getElementById('price').value;
            const clothingItem = {
                name,
                image,
                size,
                description,
                price
            };
            clothes.push(clothingItem);
            localStorage.setItem('clothes', JSON.stringify(clothes));
            clothesForm.reset();
            displayManageList();
        });
    }

    const list = document.getElementById('list');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayName = document.getElementById('overlay-name');
    const overlayDescription = document.getElementById('overlay-description');
    const overlaySize = document.getElementById('overlay-size');
    const overlayPrice = document.getElementById('overlay-price');

    function displayClothes(targetList) {
        targetList.innerHTML = '';
        clothes.forEach((item, index) => {
            const clothingItem = document.createElement('div');
            clothingItem.classList.add('clothing-item');
    
            const anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                showOverlay(item); 
            });
            anchor.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image" data-index="${index}">
                <div class="clothing-text">
                    <h3>${item.name}</h3>
                    <p>R$ ${item.price}</p>
                </div>
            `;
            clothingItem.appendChild(anchor);
            targetList.appendChild(clothingItem);
        });
    }

    function showOverlay(item) {
        overlayImage.src = item.image;
        overlayName.textContent = item.name;
        overlayDescription.textContent = item.description;
        overlaySize.textContent = item.size;
        overlayPrice.textContent = item.price;
    
        overlay.classList.add('show');
    }

    try {
        document.querySelector('.close').addEventListener('click', function() {
            overlay.classList.remove('show');
        });

        document.getElementById('buy-btn').addEventListener('click', function() {
            const overlayItemName = overlayName.textContent;
            const overlayItemPrice = overlayPrice.textContent;
            alert(`Compra realizada com sucesso para ${overlayItemName} por R$${overlayItemPrice}`);
        });
    
        list.addEventListener('click', function(event) {         
            if (event.target.classList.contains('item-image')) {
                const index = event.target.getAttribute('data-index');
                const selectedItem = clothes[index];
                showOverlay(selectedItem);
                event.stopPropagation();
            } else if (event.target.tagName === 'H3') {
                const clothingItem = event.target.closest('.clothing-item');
                if (clothingItem) {
                    const index = clothingItem.querySelector('.item-image').getAttribute('data-index');
                    const selectedItem = clothes[index];
                    showOverlay(selectedItem);
                    event.stopPropagation();
                }
            }
        });
    } catch (error) {
        console.error(error);
    }

    if (list) {
        displayClothes(list);
    }

    displayManageList();

});