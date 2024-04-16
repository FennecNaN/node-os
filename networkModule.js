const os = require("os");

function getNetworkInfo() {
  const interfaces = os.networkInterfaces();
  let output = "";

  for (const interfaceName in interfaces) {
    output += `Interfaz ${interfaceName}:\n`;
    interfaces[interfaceName].forEach((details) => {
      output += ` -Familia: ${details.family}\n`;
      output += ` -Dirección: ${details.address}\n`;
      output += ` -Interno: ${details.internal}\n`;
    });
  }

  return output;
}

module.exports = {
  getNetworkInfo,
};
