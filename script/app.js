var audio = new Audio('assets/sound/success.wav');
var exercisesData = JSON.parse(exercises);
var workoutsData = JSON.parse(workouts);

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function workoutIsOver() {
    audio.play();
    document.getElementById("exBig").innerHTML = "You're done now";
    document.getElementById("exDetailedDesc").innerHTML = "";
    document.getElementById("exImg").innerHTML = "";
    document.getElementById("countdown").innerHTML = "";
}

function getWorkoutId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('workoutId');
}

async function runEyesExercises() {
    let workoutId = getWorkoutId();
    for (var i in workoutsData) {
        if (workoutId === workoutsData[i].id) {
            let exercisesArr = workoutsData[i].exercises;
            for (var j in exercisesArr) {
                for (var i in exercisesData) {
                    if (exercisesData[i].id === exercisesArr[j]) {
                        audio.play();
                        document.getElementById("exBig").innerHTML = exercisesData[i].title;
                        document.getElementById("exDetailedDesc").innerHTML = exercisesData[i].details;
                        document.getElementById("exImg").innerHTML = `<img src='assets/img/${exercisesData[i].image}' />`;
                        document.getElementById("countdown").innerHTML = `${exercisesData[i].duration} seconds`;
                        await sleep(exercisesData[i].duration);
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