const { ParameterDescriptionMessage } = require("pg-protocol/dist/messages")

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const personForm = document.getElementById("person-form")
const nameInput = document.getElementById('name')
const powerInput = document.getElementById('power')
const deleteForm = document.getElementById('delete-form')
const deleteInput = document.getElementById('delete-name')
const incForm = document.getElementById('inc-form')
const incInput = document.getElementById('inc-name')
const peopleSection = document.getElementById('people')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });  
};

const postPerson = (event) => {
    event.preventDefault()
    peopleSection.innerHTML = ''

    const body = () => {
        name: nameInput.value
        power: powerInput.value
    }
    axios.post("http://localhost:4000/api/person/", body)  
        .then((response) => {
            const data = response.data; 
            showPeopleOnDom(data)

        })
        
        nameInput.value = ''
        powerInput.value = ''
    }

const deletePerson = (event) => {
    event.preventDefault()
    peopleSection.innerHTML = ''
    
    const name = deleteInput.value

    axios.delete(`http://localhost:4000/api/delete/${name}`)
    .then((response) => {
        const data = response.data; 
        showPeopleOnDom(data)


    })
}

constIncPower = (event) => {
    event.preventDefault()
    peopleSection.innerHTML = ''

    const incName = incInput.value

    axios.put(`http://localhost:4000/api/inc?name=${incName}`)
    .then((response) => {
        const data = response.data;
        showPeopleOnDom(data)
    })

}


const showPeopleOnDom = (data) => {


     for (let i = 0; i < data.length; i++) {
      let para = document.createElement('p')
      para.innerHTML =  `
       <span class="name-text">${data[i].name}</span> has power <span> class = "power-text">${data[i].power}</span>
      ` 
       peopleSection.appendChild(para)

    }

}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
personForm.addEventListener('submit', postPerson)
deleteForm.addEventListener('submit', deletePerson)
incForm.addEventListener('submit', incPower)