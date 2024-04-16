const os = require('os');
// console.log(os)
console.log(os.networkInterfaces())
function getOSInfo() {
    return {
        nombre: os.platform(),
        tipo: os.type(),
        version: os.version(),
        arquitectura: os.arch(),
        cpus: os.cpus().length,
        memoriaTotal: os.totalmem(),
        memoriaLibre: os.freemem(),
    };
}


module.exports = {
    getOSInfo
};
