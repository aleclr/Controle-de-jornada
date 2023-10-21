const url = "http://localhost:8080/company";

const form = document.getElementById("form_client");

async function save(cnpj, razaoSocial, nameCompany){
    const response = await fetch(url,{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            cnpj: cnpj,
            razaoSocial: razaoSocial,
            nameCompany: nameCompany
        })
    }).then(response => console.log(response)).catch(error => console.log(error));
    $('#modal').modal('show');
}

async function getAttributes(eventSave){
    eventSave.preventDefault();
    
    const cnpj = document.getElementById("cnpj").value;
    const razaoSocial = document.getElementById("razaoSocial").value;
    const nameCompany = document.getElementById("nameCompany").value;

    save(cnpj, razaoSocial, nameCompany);
}

form.addEventListener("submit", eventSave => getAttributes(eventSave));

