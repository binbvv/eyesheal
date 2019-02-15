var audio = new Audio('assets/sound/success.wav');

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function runExercise(briefDescription) {
    audio.play();
    let myData = JSON.parse(data);

    myData.forEach(function(element) {
        if (element.id === briefDescription) {
            document.getElementById("exBig").innerHTML = element.title;
            document.getElementById("exDetailedDesc").innerHTML = element.details;
            document.getElementById("exImg").innerHTML = `<img src='assets/img/${element.image}' />`;
            document.getElementById("countdown").innerHTML = `${element.duration} seconds`;
        }
    });
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

    audio.play();
    document.getElementById("exBig").innerHTML = "You're done now";
    document.getElementById("exDetailedDesc").innerHTML = "";
    document.getElementById("exImg").innerHTML = "";
    document.getElementById("countdown").innerHTML = "";
}

runEyesExercises();