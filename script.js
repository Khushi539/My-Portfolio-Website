const button = document.getElementById("btn");
const project= document.getElementById("projects");

button.addEventListener("click", () => {
    project.scrollIntoView({behaviour: "smooth"})
})
    
