const { readFile, writeFile, write } = require('fs');

// readFile('./content/subfolder/test.txt','utf-8',(err, result)=>{
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log(result)
// }) 

readFile('./content/subfolder/test.txt','utf-8',(err, result)=>{
    if (err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Eloooo. Result is the: ${second}, ${first}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result)
        })
    })
}) 

