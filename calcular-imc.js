const prompt = require(`prompt-sync`)();
let resulText;
let resulT = Number(resulText);

const weight = Number(prompt ('Digite seu peso: '));
const height = Number(prompt('Digite sua altura: '));

function calcImc(weight, height){
    resulT = weight/ (Math.pow(height, 2));
    return resulT;
}
resulT = calcImc (weight, height);
 console.log (`\n O seu IMC é: ${resulT}. `);
                    