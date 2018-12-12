// Declarando objetos

//Cliente de EDteam
/*
const clienteEDteam =
{
    nombre : "Beto",
    apellido:"Quiroga",
    email:"beto@ed.team",
    pass : "ASFASDF%asdf23aasd"
}

//Accediendo a un atributo
// sintaxis punto

console.log(clienteEDteam.nombre)

//sintaxis corchete

console.log(clienteEDteam["apellido"])
*/

// --------------------------------------------------------------------------------
/// Haciendo uso de Template String
/*
let na = "nom";
let me = "bre";

const tabla =
{
    [`${na}${me}`] : "Beto"
}

console.log(tabla)
*/

// --------------------------------------------------------------------------------

// Creacion de objeto clienteGym
const clienteGym =
{
    nombre : "Beto",
    edad :28,
    peso :85,
    altura : 175,
    fechaRegisro : "22/02/2018"
}

const clienteGym2 =
{
    nombre : "Alberto",
    edad :30,
    peso :55,
    altura : 185,
    fechaRegisro : "22/02/2017"
}

const clienteGym3 =
{
    nombreCompleto : "Alberto Quiroga",
    edad :"25",
    fechaRegisro : "22/02/2017"
}

//console.log(clienteGym3);

const clientes = [clienteGym,clienteGym2]