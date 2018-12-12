//Clases 
class Usuario 
{
    // Constructor    
    constructor(nombre, apellido, correo, edad)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.edad = edad
    }
    
    //Metodos de la clase
    saludar(){
        return document.write
         (`
            <div>
                <p>
                    Hola, mi nombre es ${this.nombre}
                </p>
            </div>
        `)
    }        
    cambiarEdad(nuevaEdad)
    {
        this.edad = nuevaEdad
    }
}
let jose = new Usuario("Jose","Alvino","jose@gmail.com",20);
let david = new Usuario("David","Broncano","david@laresistencia.com",32);


class Profesor extends Usuario
{
    // Constructor    
    constructor(nombre, apellido, correo, edad, experiencia, lenguaje)
    {
        super(nombre,apellido,correo,edad)
        this.experiencia = experiencia
        this.lenguaje = lenguaje
    }
}

class Estudiante extends Usuario
{
    // Constructor    
    constructor(nombre, apellido, correo, edad, activado)
    {
        super(nombre,apellido,correo,edad)        
        this.activado = activado
    }
}

let Cristopher = new Profesor
("Cristopher","Armas","cristopher@gmail.com",18,1,"php");

//console.log(Cristopher);

let Hardi = new Estudiante
("Hardi","Manrique","hardi@gmail.com",20,true);

//console.log(Hardi);


class Forma
{
    constructor(alto, ancho,color)
    {
        this.alto = alto
        this.ancho = ancho
        this.color = color
    }
    
    dibujar()
    {
        return document.body.innerHTML=
            `<div
             style="
             width:${this.ancho}px;
             height:${this.alto}px;
             background:${this.color}";
             >                
            </div>`
    }
}

class Cuadrado extends Forma
{
    constructor(lado,color)
    {
        super(lado,lado,color)
    }
}

class Circulo extends Forma
{
    constructor(altura,color)
    {
        super(altura,altura,color)
        this.altura = altura
    }
    
    dibujarCirculo()
    {
        return document.body.innerHTML=
            `<div
             style="
             width:${this.altura}px;
             height:${this.altura}px;
             background:${this.color};
             border-radius:50%";
             >                
            </div>`
    }
}

let figuraCir = new Circulo(200,"yellow");

let figuraCuadrada = new Cuadrado(100,"black");

