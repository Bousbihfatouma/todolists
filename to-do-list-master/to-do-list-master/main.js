let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
/*Ce code est utilisé pour ajouter des tâches à une liste de choses à faire dans une page HTML. Voici une explication pour chaque ligne de code:

let addToDoButton = document.getElementById('addToDo');
Cette ligne crée une variable nommée "addToDoButton" qui stocke l'élément HTML avec l'ID "addToDo". Cet élément est probablement un bouton que l'utilisateur cliquera pour ajouter une nouvelle tâche à la liste.

let toDoContainer = document.getElementById('toDoContainer');
Cette ligne crée une variable nommée "toDoContainer" qui stocke l'élément HTML avec l'ID "toDoContainer". Cet élément est probablement un conteneur dans lequel les tâches seront affichées.

let inputField = document.getElementById('inputField');
Cette ligne crée une variable nommée "inputField" qui stocke l'élément HTML avec l'ID "inputField". Cet élément est probablement une zone de texte où l'utilisateur peut entrer une nouvelle tâche.

addToDoButton.addEventListener('click', function(){...})
Cette ligne ajoute un écouteur d'événement "click" sur le bouton "addToDoButton". Lorsque l'utilisateur clique sur le bouton, la fonction anonyme entre les accolades sera exécutée.

var paragraph = document.createElement('p');
Cette ligne crée un nouvel élément HTML "p" qui sera utilisé pour afficher le texte de la nouvelle tâche.

paragraph.classList.add('paragraph-styling');
Cette ligne ajoute une classe CSS "paragraph-styling" à l'élément "paragraph". Cette classe peut être utilisée pour appliquer un style particulier à l'élément.

paragraph.innerText = inputField.value;
Cette ligne définit le texte de l'élément "paragraph" en récupérant la valeur actuelle de l'élément "inputField".

toDoContainer.appendChild(paragraph);
Cette ligne ajoute l'élément "paragraph" en tant qu'enfant de l'élément "toDoContainer". Cela a pour effet d'afficher la nouvelle tâche dans la liste des choses à faire.

inputField.value = "";
Cette ligne réinitialise la valeur de l'élément "inputField" à une chaîne vide, effaçant ainsi le texte que l'utilisateur a entré pour la nouvelle tâche.

paragraph.addEventListener('click', function(){...})
Cette ligne ajoute un écouteur d'événement "click" à l'élément "paragraph". Lorsque l'utilisateur clique sur l'élément, la fonction anonyme entre les accolades sera exécutée.

paragraph.style.textDecoration = "line-through";
Cette ligne définit le style CSS "text-decoration" de l'élément "paragraph" sur "line-through", ce qui a pour effet de barrer le texte de la tâche pour indiquer qu'elle est terminée.

paragraph.addEventListener('dblclick', function(){...})
Cette ligne ajoute un écouteur d'événement "double-click" à l'élément "paragraph". Lorsque l'utilisateur double-clique sur l'élément, la fonction anonyme entre les accolades sera exécutée.

toDoContainer.removeChild(paragraph);
Cette ligne supprime l'élément "paragraph" de la liste des choses à faire, ce qui a pour effet de supprimer la tâche de la liste. Cette ligne est exécutée lorsque l'utilisateur double-clique sur l'élément "paragraph", ce qui indique qu'il souhaite supprimer la tâche de la liste.
En résumé, ce code crée une interface utilisateur simple pour ajouter et supprimer des tâches d'une liste de choses à faire dans une page HTML. Lorsque l'utilisateur clique sur le bouton "Ajouter", une nouvelle tâche est créée à partir du texte entré dans la zone de texte, puis ajoutée à la liste des choses à faire. L'utilisateur peut cliquer sur une tâche pour indiquer qu'elle est terminée et double-cliquer sur une tâche pour la supprimer de la liste.*/