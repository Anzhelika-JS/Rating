//необходимо звёздочки сделать кликабельными

const ratingItemsList = document.querySelectorAll('.rating_item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach( item =>
    item.addEventListener('click', () => {
        const {itemValue} = item.dataset;
    
    item.parentNode.dataset.totalValue = itemValue;
})
);