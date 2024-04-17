const mewtocol = require('mewtocol-serial');
const { SerialPort } = require('serialport');

const defaultport = "COM2";
const defaultBaudRate = 9600;
const port = new SerialPort({ path: defaultport, baudRate:defaultBaudRate, autoOpen: false });

//Here is the reference example, you could see result directry in the shell.
//Avaliable functions as below:
/*	
	PlcVer,
	ReadOne,
	RelayON,
	RelayOff,
	ReadMulti,
	WriteMultiON,
	WriteMultiOFF,
	ReadDT
*/


//Following function could see logs printed in the console.
mewtocol.PlcVer();
mewtocol.ReadOne('X0000');