
import input from 'analiza-sync'
import {createPlayer} from './utils/gamer.js'
import values from "./riddle-game/all_riddle.js"
import {addSolveTime,showStats,measureSolveTime,askRiddle} from './utils/function.js'


console.log(`Welcome`);
const name = input("your name");
let gamer_obj = createPlayer(name);

values.forEach(element => {
    let time = measureSolveTime(askRiddle,element)
    addSolveTime(gamer_obj,time)
});
showStats(gamer_obj)
                                                                                                                                                                                                                                                                                                                                               

