class UsuarioForm
    {
        constructor (nombre, apellidos,correo,contrasena)
        {
            this.nombre = nombre
            this.apellidos = apellidos   
            this.correo = correo 
            this.contrasena = contrasena 
        }
    }

let form1 = document.getElementById('formulario');

form1.addEventListener('submit',e=>{
    //Con preventDefault => evitamos que la pag. se recargue "enviando" el formulario al servidor
    e.preventDefault();
    //Apartir del elemento target, obtenemos cada uno de los valores del fomulario y lo alamacenamos en variables
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellidos.value;
    let correo = e.target.Correo.value;
    let contrasena = e.target.contrasena.value;
    
    let usuario = new UsuarioForm(nombre,apellido,correo,contrasena);
    
    console.log(usuario);
});