var audio = new Audio('assets/sound/success.wav');
var exercisesData = JSON.parse(exercises);
var workoutsData = JSON.parse(workouts);

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function workoutIsOver() {
    audio.play();
    document.getElementById("exBig").innerHTML = "Congratulations! Workout is complete!";
    document.getElementById("exDetailedDesc").innerHTML = "";
    document.getElementById("exImg").innerHTML = "";
    document.getElementById("countdown").innerHTML = "";
}

function getWorkoutId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('workoutId');
}

function getExercisesArray() {

}

function runWorkout() {

}

async function runEyesExercises() {
    let workoutId = getWorkoutId();
    for (var i in workoutsData) {
        // getExercisesArray
        if (workoutId === workoutsData[i].id) {
            let exercisesArr = workoutsData[i].exercises;
            // runWorkout
            for (var j in exercisesArr) {
                for (var k in exercisesData) {
                    if (exercisesData[k].id === exercisesArr[j]) {
                        audio.play();
                        document.getElementById("exBig").innerHTML = exercisesData[k].title;
                        document.getElementById("exDetailedDesc").innerHTML = exercisesData[k].details;
                        document.getElementById("exImg").innerHTML = `<img src='assets/img/${exercisesData[k].image}' /width="40%" height="40%">`;
                        document.getElementById("countdown").innerHTML = `${exercisesData[k].duration} seconds`;
                        await sleep(exercisesData[k].duration);
                        break;
                    }
                }
            }
            break;
        }
    }
    workoutIsOver();
}

runEyesExercises();