import input from 'analiza-sync'

export function addSolveTime(player, seconds){
    player.times.push(seconds)
    return player
}

export function showStats(player){
    let sum = 0
    player.times.forEach(element => {
        sum+=element
    });
    let result = sum/player.times.length
    console.log(`total time: ${sum} average time ${result}`);
}



export function askRiddle(riddleObj){
    let answer = null
    while(answer != riddleObj.correctAnswer){
    console.log(`name: ${riddleObj.name} ,taskDescription: ${riddleObj.taskDescription}`);
    answer = input()
    }

}

export function measureSolveTime(fn,obj){
    const start_time = (Date.now())/1000;
    fn(obj)
    const end_time = (Date.now())/1000;
    return end_time-start_time;
}




