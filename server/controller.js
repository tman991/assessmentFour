
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


    getQuestion: (req, res) => {
        const questions = ["What is your name?", "What is your favorite color?", "What is your favorite food?", "What is your favorite vacation spot?", "Where do you see yourself in five years?"];    

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomQuestion = questions[randomIndex];

        res.status(200).send(randomQuestion);

    },


    getEducation: (req, res) => {
        const edQuestions = ["What is the name of your favorite teacher?", "What was your favorite subject in High school?", "Did you go to college?"];    

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomEducation = edQuestions[randomIndex];

        res.status(200).send(randomEducation);

    },


    getBirth: (req, res) => {
        const birthQuestions = ["What was your weight at birth?", "In what city were you bown?"];    

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomEducation = birthQuestions[randomIndex];

        res.status(200).send(randomEducation);

    }
}
