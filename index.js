// function superBowlWin (array){
//     let wins = undefined
//     for (let item of array){
//         if (item.result === 'W'){
//             wins = item.year
//         }
//     }
//     return wins
// }

// superbowlWin(record)

function superbowlWin(record){
    const desiredOutcome = record.find(element => element.result ==='W')
    return desiredOutcome ? desiredOutcome.year : undefined
}


