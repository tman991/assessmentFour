
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense!", "A good time to finish up old tasks!", "A lifetime of happiness lies ahead of you.", "A soft voice may be awfully persuasive!", "All your hard work will soon pay off!"];    

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);

    },


    createNewPerson: (req, res) => {
     
        let {name, power} = req.body

        db.push({name: name, power: isNaN(+power) ? 1 : +power})

        res.send(db)
    }

}, 

    deletePerson: (req, res) => {
        let {name} = req.params

        for (let i=0; i < db.length; i++) {
                if (name === db[i].name) {
                    db.splice(i, 1)

                }
    }

    res.send(db)
}



const db = [

    {
    name: 'Taha',
    power: 5000,
    
    },

    {
    name: 'Chris',
    power: 4000,
        
    }


    ]



