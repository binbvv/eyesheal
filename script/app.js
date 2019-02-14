var audio = new Audio('assets/sound/success.wav');

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function runExercise(briefDescription) {
    audio.play();
    document.getElementById("exBig").innerHTML = briefDescription;
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
    document.getElementById("exBig").innerHTML = "You're done now";
}

runEyesExercises();