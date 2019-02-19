var audio = new Audio('assets/sound/success.wav');
var exerciseData = JSON.parse(data);

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function runExercise(exerciseId) {
    audio.play();
    for (var i in exerciseData) {
        if (exerciseData[i].id === exerciseId) {
            document.getElementById("exBig").innerHTML = exerciseData[i].title;
            document.getElementById("exDetailedDesc").innerHTML = exerciseData[i].details;
            document.getElementById("exImg").innerHTML = `<img src='assets/img/${exerciseData[i].image}' />`;
            document.getElementById("countdown").innerHTML = `${exerciseData[i].duration} seconds`;
            break;
        }
    }
}

function workoutIsOver() {
    audio.play();
    document.getElementById("exBig").innerHTML = "You're done now";
    document.getElementById("exDetailedDesc").innerHTML = "";
    document.getElementById("exImg").innerHTML = "";
    document.getElementById("countdown").innerHTML = "";
}

async function runEyesExercises() {
    runExercise("restEyesShort");
    await sleep(10);
    runExercise("upDown");
    await sleep(20);
    runExercise("restEyesShort");
    await sleep(10);
    runExercise("leftRight");
    await sleep(20);
    runExercise("goDiagonal");
    await sleep(20);
    runExercise("restEyesShort");
    await sleep(10);
    runExercise("clockwise");
    await sleep(10);
    runExercise("oppositeClockwise");
    await sleep(10);
    runExercise("spiral");
    await sleep(20);
    runExercise("restEyesShort");
    await sleep(10);
    runExercise("distance");
    await sleep(20);
    runExercise("restEyesShort");
    await sleep(10);
    workoutIsOver();
}

function getUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const workoutIdParam = urlParams.get('workoutId');
    console.log('My param is: ' + workoutIdParam);
}

//getUrlParameters();
runEyesExercises();