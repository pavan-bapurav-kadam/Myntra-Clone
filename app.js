
// let item = {
    //     id: '001',
    //     image: '1 (1).jpg',
    //     company: 'Carlton London',
    //     item_name: 'Rhodium-Plated CZ Floral Studs',
    //     original_price: 1045,
    //     current_price: 606,
    //     discount_percentage:(42),
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
        //         stars: 4.5,
        //         count: 1400,
        //     },
        // }
        

let bagItems = [] 
onlode()
function onlode(){
    let bagItemsStr = localStorage.getItem('bagItems')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
    DisplayOnHomePage()
    displayBagItem()
}

function addToBag(itemId){
    bagItems.push(itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagItem()
}

function displayBagItem(){
    let bagItemsCountElement = document.querySelector(".bag-item-count")

    if(bagItems.length>0){
        bagItemsCountElement.style.visibility='visible'
        bagItemsCountElement.innerText = bagItems.length
    }else{
        bagItemsCountElement.style.visibility = 'hidden'
    }
}
function DisplayOnHomePage(){
            const itemContainerElement = document.querySelector(".items-container");
            if (!itemContainerElement){
                return;
            }
            let innerHtml = '';
            
            items.forEach(item => {
                innerHtml += `
                    <div class="item-container">
                        <img src="${item.image}" alt="">
                        <div class="rating">${item.rating.stars} | ${item.rating.count}</div>
                        <div class="company-name">${item.company}</div>
                        <div class="item-name">${item.item_name}</div>
                        <div class="price">
                            <span class="current-price">RS ${item.current_price}</span>
                            <span class="original-price">RS ${item.original_price}</span>
                            <span class="discount">(${item.discount_percentage}% OFF)</span>
                        </div>
                        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                    </div>`;
            });
            
            itemContainerElement.innerHTML = innerHtml;
            
}



