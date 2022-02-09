const scores = [50, 60, 70, 80, 90, 100];

const logScore = (score) => console.log("Score over 65", score);

//Iterate over the scores array using forEach.
//Execute the logscores

scores.forEach(element => {
    if(element> 65){
        logScore(element);
    }
});