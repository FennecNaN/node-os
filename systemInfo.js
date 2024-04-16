// Extraccion 
const osModule = require('./osModule');
const networkModule = require('./networkModule');

// asignacion a variables 
const osInfo = osModule.getOSInfo();
const networkInfo = networkModule.getNetworkInfo();

console.log("Información del Sistema Operativo:");
console.log(`Nombre: ${osInfo.nombre}`);
console.log(`Tipo: ${osInfo.tipo}`);
console.log(`Versión: ${osInfo.version}`);
console.log(`Arquitectura: ${osInfo.arquitectura}`);
console.log(`CPUs: ${osInfo.cpus}`);
console.log(`Memoria Total: ${osInfo.memoriaTotal} MB`);
console.log(`Memoria Libre: ${osInfo.memoriaLibre} MB`);
console.log(networkInfo);