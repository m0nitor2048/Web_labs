// const { addItemToPage } = require("../PureJSDragNDrop- example/js/dom_util");



const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("cancel_find_button");
const searchInput = document.getElementById("search_input");
const createButton = document.getElementById("create__button");
const removeButton = document.getElementById("remove_button");

const itemsContainer = document.getElementById("items_container");

let stones = [];

searchButton.addEventListener("click", (event) => {     // ? why need event here
    event.preventDefault();
    const foundStones = stones.filter(
        stone => stone.title.search(searchInput.value) != -1
    );
    // cosole.log(foundStones);
    renderItemsList(foundStones);
});

const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    };
}
// searchCancelButton.addEventListener("click", () => {

// });

// searchInput.addEventListener("click", () => {

// });

// dev tools -> Network -> Preserve log
createButton.addEventListener("click", (event) => {
    // Prevents defoult page reload on submit
    event.preventDefault();

    // const {title, description, price, carats} = values;
    const {title, description, price, carats} = getInputValues();

    clearInputs();

    addItem({
        title: title,
        desc: description,
        price,
        carats,
    });
});

// */--------- REMOVE BUTTON -----------
removeButton.addEventListener("click", () => {
    
    console.log("13");

});
// function delete_row(e)
// {
//     e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
// };
// function removeElement(elementId) {
//     // Removes an element from the document.
//     var element = document. getElementById(elementId);
//     element. parentNode. removeChild(element);
// }


const titleInput = document.getElementById("add-title");
const descriptionInput = document.getElementById("add-description");
const priceInput = document.getElementById("add-price");
const caratsInput = document.getElementById("add-carats");


const getInputValues = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
        carats: caratsInput.value
    };
};


const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
    caratsInput.value = "";
}


const addItem = ({title, desc, price, carats}) => {
    const generatedID = uuid.v1();

    const newItem = {
        id: generatedID,
        title,
        desc,
        price,
        carats,
    };

    stones.push(newItem);

    addItemToPage(newItem);
}


const addItemToPage = ({id, title, desc, price, carats}) => {
    itemsContainer.insertAdjacentHTML( //додає в html розмітку
        "afterbegin",
        itemTemplate({id, title, desc, price, carats})
    )
}


const getItemId = (id) => `item-${id}`;

// template string ->  ``qwerty`
const itemTemplate = ({id, title, desc, price, carats}) => `
<div class="col-4 id="${getItemId(id)}">
<div class="box">
  <img src="img.jpg" alt="" />
  <h5>${title}</h5>
  <p>${desc}</p>
  <p>${price}</p>
    <p>${carats}</p>
  <button id="remove_button" type="button" class="btn btn-danger">Remove</button>
</div>
</div>`;

// const addItemToPage = ({ _id: id, title, description }, onEditItem, onRemoveItem) => {
//     itemsContainer.insertAdjacentHTML(
//       "afterbegin",
//       itemTemplate({ id, title, description })
//     );
renderItemsList(stones);