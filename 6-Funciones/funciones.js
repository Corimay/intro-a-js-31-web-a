//Declaraciones con "oraciones completas":
//let j = "0"

//Expresiones son palabras:
//let
//j

/*function juiceMaker(fruta1, fruta2){
    console.log(`Aqui está tu jugo de ${fruta1} y ${fruta2}`);
}

juiceMaker('naranja', 'zanahoria')*/

/*const retirementAge = 65;

function calcRetirementYears(age){
    const yearsUntilRetirement = retirementAge - age;
    console.log(`Te faltan ${yearsUntilRetirement} años`)    
}
// calcRetirementYears(30)
// calcRetirementYears(22)

const ages = [30, 22, 25, 24]

for(let i =0; i < ages.length; i++) {
    calcRetirementYears(ages[i]);
}*/

const retirementAge = 65;
const currentYear = 2023;


function calcAge(birthYear){
    const age = currentYear -birthYear;
    return age;
}

function calcRetirementYears(birthYear) {
    const age = calcAge(birthYear);
    const yearsUntilRetirement = retirementAge - age;
    console.log(`${age}: Te faltan ${yearsUntilRetirement} años`)
}

calcRetirementYears(2001)
calcRetirementYears(1997)
calcRetirementYears(2010)
calcRetirementYears(2005)


