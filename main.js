// const notes = document.querySelectorAll("#notes-container")

// const notes = document.getElementById("notes-container")
const notes = document.querySelectorAll(".space-y-2");
const nouvellenote = document.querySelectorAll("#nouvelle-note")
// const surligner = document.querySelectorAll("#surligner")
const surligner = document.getElementById("surligner")
const lire = document.querySelectorAll("#lire")
const resultat = document.querySelectorAll("#resultat")

// surligner.addEventListner("click",function(){
//     notes.classList.toggle("bg-yellow-200")
// })

// surligner.addEventListener("click" ,function(){
//     notes.classList.toggle("bg-yellow-200")
// })
surligner.addEventListener("click", function(){
        notes.forEach(function(note) {
        note.classList.toggle("bg-yellow-200");
    });
})
  function ajouternote(){
    if(nouvellenote.values == ""){
        throw new Error("le champ est vide")
    }else{
        const p = document.createElement("p")
        p.textContent ="note"
        p.appendChild(notes)
    }
  }
  lire.addEventListener("click",function(){
    const p = document.createElement("p")
    p.textContent = "Theme selectionne est :" 
})
