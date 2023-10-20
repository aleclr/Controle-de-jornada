const url = "http://localhost:8080/user";

const select = document.getElementById("codeRc");

async function getResultCenter(event){
    event.preventDefault();

    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);

    data.map((rc)=>{
        const option = document.createElement("option");

        option.innerText = rc.rc;
        option.value = rc.codeRc;

        select.appendChild(option);
    })

}

select.addEventListener("click", event => getResultCenter(event),{ once: true });



async function save(name, jobrole,codeRc){
    const response = await fetch(url,{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name:name,
            jobrole:jobrole,
            codeRc:codeRc
        })
    }).then(response => console.log(response)).catch(error => console.log(error));
}

const form = document.getElementById("form_user");

async function getAttributes(eventSave){
    eventSave.preventDefault();
    
    const name = document.getElementById("name").value;
    const jobrole = document.getElementById("jobrole").value;
    const codeRc = document.getElementById("codeRc").value;
    console.log(name, jobrole, codeRc);

    save(name, jobrole, codeRc);
    window.alert(name);
}

form.addEventListener("submit", eventSave => getAttributes(eventSave));