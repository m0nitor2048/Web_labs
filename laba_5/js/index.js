// const { addItemToPage } = require("../PureJSDragNDrop- example/js/dom_util");
// import {
//     EDIT_BUTTON_PREFIX,
//   } from "./dom_util.js";
//*/ --------- Buttons ---------

const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("cancel_search_button");
const searchInput = document.getElementById("search_input");
const createButton = document.getElementById("create__button");
const removeButton = document.getElementById("remove_button");

const itemsContainer = document.getElementById("items_container");

let stones = [];


const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    };
};

searchButton.addEventListener("click", (event) => {     // ? why need event here
    event.preventDefault();
    const foundStones = stones.filter(
        stone => stone.title.search(searchInput.value) != -1
    );
    
    renderItemsList(foundStones);
    //cosole.log(foundStones);
});


searchCancelButton.addEventListener("click", (event) => {
    event.preventDefault();

    searchInput.value = "";
    renderItemsList(stones);
});

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
removeButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("remove");

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

//*/ --------- Add Card ---------

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
    }
}

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

    if (!title) {
        addWarning("title");
        // alert("Enter title!")
    } else if (!desc) {
        addWarning("description");
    } else if (!price) {
        addWarning("price");
    } else if (!carats) {
        addWarning("carats");
    } else {
        stones.push(newItem);
        addItemToPage(newItem);
        sendToFirebase()
    }
};

//mdb.Alert.getInstance(document.getElementById('placement-example')).show();

const addItemToPage = ({id, title, desc, price, carats}) => {
    itemsContainer.insertAdjacentHTML(  //додає в html розмітку
        "afterbegin",
        itemTemplate({id, title, desc, price, carats})
    )
    console.log(stones);
};


const getItemId = (id) => `item-${id}`;


// template string ->  `qwerty`
const itemTemplate = ({id, title, desc, price, carats}) => `
<div class="col-4 id="${getItemId(id)}">
<div class="box">
  <img src="img.jpg" alt="" id="box-image"/>
  <h5>${title}</h5>
  <p>${desc}</p>
  <p>${price}$</p>
    <p>${carats} carats</p>
  <button id="edit_button" type="button" class="btn btn-info">Edit</button>
  <button id="remove_button" type="button" class="btn btn-danger">Remove</button>
</div>
</div>`;

//*/ --------- warning alert ---------
const addWarning = (warn) => {

    addWarningToPage(warn);
    setTimeout(function() {
        document.getElementById(`warning-${warn}`).style.display = "none";
    }, 3000);
};

// const warningTemplate = (warn) => `
// <div id="warning-${(warn)}" class="alert alert-warning" role="alert">
// Enter ${(warn)}!
// </div>`;

const warningTemplate = (warn) =>`<div id="warning-${(warn)}" class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Enter ${(warn)}!</strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;

const addWarningToPage = (warn) => {
    itemsContainer.insertAdjacentHTML(  //додає в html розмітку
        "afterbegin",
        warningTemplate(warn)
    )
    console.log(warn);
}



//*/ --------- total Count Button ---------
const totalCountBtn = document.getElementById("count__button");

console.log(stones)

totalCountBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    let credits = stones.map(stones => parseInt(stones.price));
    document.getElementById("total_expences").innerHTML = credits.reduce((total, amount) => parseInt(total) + parseInt(amount));
});

//*/ --------- sorting by price ---------
document.getElementById('flexSwitchCheckChecked').onclick = function() {
    var selected = document.querySelector('input[type=checkbox]');
    // console.log(selected.checked);
    // alert(selected.value);
    if (selected.checked === true) {
        console.log("sort on");
        let sortedArray = stones.slice();
        const sorted = sortedArray.sort((a, b) => (+a.price > +b.price) ? 1 : -1)
        //console.log(sorted);
        renderItemsList(sorted);

    } else if (selected.checked === false){
        console.log("sort off")
        //console.log(stones);
        renderItemsList(stones);
    } else { alert("WTF -_-") }

}


renderItemsList(stones);
console.log(stones);