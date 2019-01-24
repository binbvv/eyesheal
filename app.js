var audio = new Audio('assets/success.wav');

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function runExercise(text, timeoutSec) {
    audio.play();
    document.getElementById("ex").innerHTML = text
}

async function runEyesExercises() {
    let restEyes = "Rest your eyes";

    runExercise(restEyes);
    await sleep(10);
    runExercise("Up/Down");
    await sleep(20);
    runExercise(restEyes);
    await sleep(10);
    runExercise("Left to right");
    await sleep(20);
    runExercise("Go diagonal");
    await sleep(20);
    runExercise(restEyes);
    await sleep(10);
    runExercise("Clockwise");
    await sleep(10);
    runExercise("Opposite Clockwise");
    await sleep(10);
    runExercise("Spiral");
    await sleep(20);
    runExercise(restEyes);
    await sleep(10);
    runExercise("Into the distance");
    await sleep(20);
    runExercise(restEyes);
    await sleep(10);

    audio.play();
    document.getElementById("ex").innerHTML = "You're done now";
}



runEyesExercises();