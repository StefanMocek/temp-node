const os = require('os');

const user = os.userInfo();
// console.log(user)

// console.log(`The System uptime is: ${os.uptime()} seconds`)

const currrentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currrentOS)
