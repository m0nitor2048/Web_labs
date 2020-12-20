// * Inputs
const searchInput = document.getElementById("search_input");

const titleInput = document.getElementById("add-title");
const descriptionInput = document.getElementById("add-description");
const priceInput = document.getElementById("add-price");
const caratsInput = document.getElementById("add-carats");

// * Buttons
const searchButton = document.getElementById("search_button");
const searchCancelButton = document.getElementById("cancel_search_button");

const createButton = document.getElementById("create__button");
const removeButton = document.getElementById("remove_button");
const editButton = document.getElementById("edit_button");


const itemsContainer = document.getElementById("items_container");

let visibleStones = [];

const firebaseConfig = {
    apiKey: "AIzaSyB_4v5kWCwRfPiOMHLFQG9TOumVFhHdIzk",
    authDomain: "web-5-fa8e2.firebaseapp.com",
    databaseURL: "https://web-5-fa8e2.firebaseio.com",
    projectId: "web-5-fa8e2",
    storageBucket: "web-5-fa8e2.appspot.com",
    messagingSenderId: "31378350966",
    appId: "1:31378350966:web:8d19cd7083b35e1da79057",
    measurementId: "G-4NMWEFYEPX"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const stonesDB = database.ref('stones')

loadFirebase()
console.log("database: OK")
console.log(database);



//*/ --------- Add Card & send data to firebase ---------
createButton.addEventListener("click", (event) => {
    event.preventDefault();

    addItem()
    clearInputs();
});

const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
    caratsInput.value = "";
}

const validation = (title=titleInput.value, desc=descriptionInput.value,
                    price=priceInput.value, carats=caratsInput.value) => {
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
        return true;
    }
}

const addItem = (title=titleInput.value, desc=descriptionInput.value,
                 price=priceInput.value, carats=caratsInput.value) => {
    const generatedID = uuid.v1();
    const newItem = {
        id: generatedID,
        title,
        desc,
        price,
        carats,
    };
    if (validation() === true) {
        console.log("Good Push Data")
        stonesDB.push(newItem)
        //addItemToPage(newItem);
    } else {console.log("Bad Push Data")}
}

const getItemId = (id) => `item-${id}`;


const addItemToPage = ({id, title, desc, price, carats}) => {
    itemsContainer.insertAdjacentHTML(  //додає в html розмітку
        "afterbegin",
        itemTemplate({id, title, desc, price, carats})
    )
    console.log("New Item: " + id, title, desc, price, carats);
}

const itemTemplate = ({id, title, desc, price, carats}) => `
<div class="col-4 id="${getItemId(id)}">
<div class="box">
  <img src="img.jpg" alt="image" id="box-image"/>
  <h5>${title}</h5>
  <p>${desc}</p>
  <p>${price} $</p>
  <p>${carats} carats</p>
  <button onclick="editCard('${id}')" type="button" class="btn btn-info">Edit</button>
  <button onclick="removeCard('${id}')" type="button" class="btn btn-danger">Remove</button>
</div>
</div>`;


// --------- Warning alert ---------

const addWarning = (warning) => {

    itemsContainer.insertAdjacentHTML("afterbegin", warningTemplate(warning))
    console.log(warning);

    setTimeout(function() {
        document.getElementById(`warning-${warning}`).style.display = "none";
    }, 3000);
}

const warningTemplate = (warning) =>`<div id="warning-${(warning)}" class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Enter ${(warning)}!</strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;


// --------- Get Data from firebase ---------
function loadFirebase(){
    let ref = database.ref("stones");
    ref.on("value", getData, errData);
}

function getData(data) {
    stones = data.val();
    //console.log("7777777777777777")
    try {
        keys = Object.keys(data.val())
        //console.log("rrr" + data.val());
    } catch (error) {
        console.log("1 errData!");
        console.error(error);
        //console.log(data.val());
        if (data.val() === null){itemsContainer.innerHTML= ""}
        return null
    }
    itemsContainer.innerHTML = "";
    visibleStones = []
    keys.forEach((stone, index) => {
        let key = keys[index];
        console.log(key + " 22222222");
        stone = stones[key];
        const my_data = {
            id: stone.id,
            title: stone.title,
            desc: stone.desc,
            price: stone.price,
            carats: stone.carats,
        }
        addItemToPage(my_data)

        visibleStones.push(my_data)
        //foundStones.push(my_data)
        console.log(visibleStones)
    })}

function errData(error) {
    console.log("2 errData!");
    console.log(error);
}

// --------- Edit Data ---------

function editCard(id) {

    if (validation() === true){} else {return null}

    stonesDB.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                let key = childSnapshot.key;
                console.log("123467 " + snapshot.val()[key]);
                //let refVal = snapshot.val()[key]

                if (snapshot.val()[key].id === id){
                    //console.log(snapshot.val()[key].id);
                    //console.log(refVal.title);
                    console.log(" 1111111 " + titleInput.value);
                    database.ref("stones/" + key).update({
                        title: titleInput.value,
                        desc: descriptionInput.value,
                        price: priceInput.value,
                        carats: caratsInput.value
                    });
                    clearInputs()
                }
            });
        });
    //clearInputs()
}

// --------- Remove Data ---------
const removeCard = (id) => {
    stonesDB.once("value")
        .then(function(snapshot) {
            console.log(snapshot);
            snapshot.forEach(function(childSnapshot) {
                let key = childSnapshot.key;
                if (snapshot.val()[key].id === id){
                    database.ref("stones/" + key).remove();
                }
            });
        })
}

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderItemsList(searchingStonesObject(visibleStones));
})

const searchingStonesObject = (foundStones) => {
    foundStones = visibleStones.filter(
        visible => visible.title.search(searchInput.value) != -1
    )
    return foundStones
}


searchCancelButton.addEventListener("click", (event) => {
    event.preventDefault();

    searchInput.value = "";
    renderItemsList(visibleStones);
});

const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    items.forEach(element => {
        addItemToPage(element)
    })
}

// --------- sorting by price ---------
document.getElementById('flexSwitchCheckChecked').onclick = function() {
    let selected = document.querySelector('input[type=checkbox]');
    // console.log(selected.checked);
    // alert(selected.value);
    if (selected.checked === true) {
        console.log("sort on");

        let stonesObject = searchingStonesObject(visibleStones).slice();
        let sorted = stonesObject.sort((a, b) => (+a.price > +b.price) ? 1 : -1)
        //console.log(sorted);
        renderItemsList(sorted);

    } else {
        console.log("sort off")
        renderItemsList(searchingStonesObject(visibleStones));
    }
}

//*/ --------- total Count Button ---------

const calculateTotalCount = () => {
    let stones = searchingStonesObject(visibleStones)
    let credits = stones.map(stones => parseInt(stones.price));
    let total_expences = document.getElementById("total_expences")
    total_expences.innerHTML = credits.reduce((total, amount) => parseInt(total) + parseInt(amount));
}
