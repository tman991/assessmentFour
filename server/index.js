const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createNewPerson, deletePerson } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/person", createNewPerson);
app.post("/api/delete:name", deletePerson);

app.listen(4000, () => console.log("Server running on 4000")

       


// const { getFortune } = require('./controller')

//         app.get("/api/fortune", getFortune);


// const { getQuestion } = require('./controller')

// app.get("/api/question", getQuestion);


//         const { getEducation } = require('./controller')

//         app.get("/api/education", getEducation);


// const { getBirth } = require('./controller')

// app.get("/api/birth", getBirth);       



// app.listen(4000, () => console.log("Server running on 4000"));
