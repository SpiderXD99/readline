#!/usr/bin/env node

// npm install ./readLine 
// npm publish

import  readLine from "readline" ;
import propt  from "prompt-sync";
import  chalk from 'chalk';

const rd = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
})


const opzioniDaFare = '------------\n'+
	chalk.red(' 1. somma \n')+` 
	2. sottrazioni
	3. moltiplicazioni
	4. divisioni
	5. exit
	Cosa Desideri fare ?:
`

function segli2Numeri(def){
	return [
		parseInt(propt()("Numero 1 :",def)),
		parseInt(propt()("Numero 2 :",def))
	]
}

function somma (){
	console.log('hai scelto somma')
	const [num1,num2] = segli2Numeri("0")
	console.log("risultato:",num1 + num2)
}
function sottrazioni (){
	console.log('hai scelto sottrazioni')
}
function moltiplicazioni (){
	console.log('hai scelto moltiplicazioni')
}
function divisioni (){
	console.log('hai scelto divisioni')
}

function chiedi(){
	rd.question(opzioniDaFare,(scelta)=>{
		switch (scelta) {
			case "1": somma(); break;
			case "2": sottrazioni(); break;
			case "3": moltiplicazioni(); break;
			case "4": divisioni(); break;
			case "5": console.log('by by');process.exit();
			default:console.log('non ho capito'); break;
		}
		chiedi()
	})
}

chiedi()
export default chiedi