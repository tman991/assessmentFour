
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });  
};

fortuneBtn.addEventListener('click', getFortune);

const getQuestion = () => {
    axios.get("http://localhost:4000/api/question/")
    .then(res => {
        const data = res.data;
        alert(data);
    });  
};

questionBtn.addEventListener('click', getQuestion);


const getEducation = () => {
    axios.get("http://localhost:4000/api/education/")
    .then(res => {
        const data = res.data;
        alert(data);
    });  
};

educationBtn.addEventListener('click', getEducation);



const getBirth = () => {
    axios.get("http://localhost:4000/api/birth/")
    .then(res => {
        const data = res.data;
        alert(data);
    });  
};

birthBtn.addEventListener('click', getBirth);