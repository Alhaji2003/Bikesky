// popupoverlay and popupbox function
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var openadded = document.querySelector(".btn")

openadded.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

// cancel button function

var cancelbtn = document.getElementById("cancel")

cancelbtn.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

// Selcet book-container,add button,bike-company-input,bike-owner-input,bike-description-input

var container = document.querySelector(".book-container")
var addbtn = document.getElementById("add")
var bikecompanyinput = document.getElementById("bike-company-input")
var bikeownerinput = document.getElementById("bike-owner-input")
var bikedescriptioninput = document.getElementById("bike-description-input")

addbtn.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-section")
    div.innerHTML = `<h1>${bikecompanyinput.value}</h1>
    <h3>${bikeownerinput.value}</h3>
    <p>${bikedescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// Delete button function

function deletebook(event) {
    event.target.parentElement.remove()
}





