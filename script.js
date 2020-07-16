// TODO: add code here
function init() {
    let container = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( response=> {
        response.json().then( json=> {
            for(let i = 0; i < json.length; i++) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${[json[i].firstName]} ${[json[i].lastName]}</h3>
                        <ul>
                            <li>Hours in space: ${[json[i].hoursInSpace]}</li>
                            <li id="id${i}">Active: ${[json[i].active]}</li>
                            <li>Skills: ${[json[i].skills.join(", ")]}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${[json[i].picture]}">
                </div>
                `;

                let id = "id" + i;
                console.log(id);
                let greenText = document.getElementById(id);
                console.log(json[i].active);
                if (json[i].active === true) {
                    console.log("GREEN!!!");
                    greenText.style.color = "green";
                }
            }
        });
    });
}

window.onload = init;