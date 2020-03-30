// 1. ) Create a function to display the information in "endereco" in an organized manner.

var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP"
};

function displayData(endereco) { 
    console.log(`
        O usuário mora em ${endereco.cidade}, no bairro ${endereco.bairro},
        na rua ${endereco.rua} com número ${endereco.numero}.
    `);
}
//displayData(endereco);


// 2. ) Create a function to register all even numbers in a set interval of numbers
// them print them.

function pares(a,b){

    var paresArray = [];
    for(var i = a; i <= b; i++){
        if((i % 2) === 0){
            paresArray.push(i);
        }
    }
    console.log(paresArray);
}
//pares(32,321);

// 3. ) Create a function to verify if a given array of skills has the "Javascript" skill and
// return a true or false response.

function hasSkill(skills){
    var index = skills.indexOf("Javascript");
    var response = (index !== -1) ? true : false;
    return response;
}
var skills = ["React.js", "Javascript","React Native"];
//console.log(hasSkill(skills));

// 4. ) Create a function to define the level of experience from beginner to master based on years of study.

function experiencia(anos){
    switch(anos){
        case 0:
        case 1:           
            return "Iniciante";
        case 2:
        case 3:
            return "Intermediário";
        case 4:
        case 5:
        case 6:
            return "Avançado";    
        default:
            return "Mestre";    
    }
} 

var anosDeEstudo = 4;
//console.log(experiencia(anosDeEstudo));


// 5. ) Create a function to print the data in an array of objects in an orginized manner.  

var users = [
    {
    nome: "Diego",
    skills: ["javascrit", "reactjs", "react native"]
    },
    {
    nome: "Gabriel",
    skills: ["vuejs", "ruby", "elixir"]
    }
]


function programer(users){
    for(let entry of users){
        console.log(`O ${entry.nome} possui as habilidades ${entry.skills.join(', ')}.`);
        
    }
}
 programer(users);
