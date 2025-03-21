function validoNombre() {
    let nombre = document.getElementById("usuario").value;
    let usuarioError = document.getElementById("usuarioError");
    if (nombre.length < 3) {
        usuarioError.textContent = "El nombre completo debe tener al menos 3 caracteres.";
        return false;
    } else {
        usuarioError.textContent = "";
        return true;
    }
}

function validarEmail() {
    let email = document.getElementById("mail").value;
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "El formato del email no es válido.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validarContraseña() {
    let contra = document.getElementById("contraseña").value;
    let confirmacion = document.getElementById("confirmacion").value;
    let passwordError = document.getElementById("passwordError");
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passRegex.test(contra)) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, una letra y un número.";
        return false;
    }
    if (contra !== confirmacion) {
        passwordError.textContent = "Las contraseñas no coinciden.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}
function FormEnviado() {
    let nombreValido = validoNombre();
    let emailValido = validarEmail();
    let contrasenaValida = validarContraseña();
     if (nombreValido && emailValido && contrasenaValida) {
        document.getElementById("successMessage").textContent = "Formulario enviado con éxito.";
        return true; 
    } else {
        document.getElementById("successMessage").textContent = "";
        return false;  
    }
}
