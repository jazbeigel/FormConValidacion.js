# Respuestas de tp FormConValidaciones.js:

### Cómo diseñaron la interfaz del formulario:

Para la interfaz del formulario tuve que, primero ubicar los elementos en el centro de la pantalla usando

  display: flex; 
  justify-content: center;
  align-items: center;
  
Despues, diseñe la parte de lo que sería el bloque donde se encuentran todos los elementos del formulario, agregandolo cosas como

  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
Siguiendo con eso, me fui a los items que se encontraban dentro de el form, como el email, text o password, y los ubique en el centro del body con un border de 1px para que no se vea tan ancho. 
Despues diseñe el boton de enviado, donde le puse el cursor: pointer para que el mouse cambie cuando se encuentra sobre este. Ademas, le agregue que cambie de color cuando el mouse esta sobre el boton para que se note mas visualmente cuando queres enviar el form. 
Y finalmente agregue el diseño de como se verían los mensajes de error y el de exito que iria al final.

### Qué validaciones implementaron y cómo funcionan:

Para las validaciones tuve que crear 4; una para el nombre, una para el mail, otra para la contraseña y una final para corroborar que todas las validaciones den true y se pueda mandar el forms. La primera se encarga de que el nombre de usuario tenga mas de 3 caracteres, usando un if y almacenando el dato ingresado en el campo de <input type="text" en una variable let, y mostrando un mensaje, en caso de que no cumpla con los requerimientos con un textContent que dice "El nombre completo debe tener al menos 3 caracteres.";

La segunda validacion fue mas compleja, ya que necesitaba un Regex, que contiene una serie de caracteres para validar que el mail cumpla con el formato pedido. Almacené lo ingresado por el usuario en una variable let y mediante una funcion test, me fije si dentro de lo ingresado cumplia con el formato pedido, si no cumplía mostraba con un textContent lo siguiente: emailError.textContent = "El formato del email no es válido.";

Para la validacion de la contraseña use tambien el Regex, validando que tenga mas de 8 caracteres, el numero y la letra, comparandolo con lo que me manda el usuario. Usando if me fije si, en base a los caracteres y usando la funcion Test, cumplia con el primer requerimiento. Y usando otro if despues, me fije que coincida con la 2da contraseña.

Para la ultima validacion compare todas las previas validaciones para corroborar que todas me den true (osea que todos los campos se cumplan) para ver si se puede mandar el form o no. Si se puede mandar, muestra fuera del form el siguiente mensaje enviado desde js document.getElementById("successMessage").textContent = "Formulario enviado con éxito.";

### Qué desafíos enfrentaron y cómo los resolvieron:

No supe como hacer lo de los caracteres ya que no conocia el Regex, y tampoco el test, pero luego de buscarlo lo pude utiizar.

### Qué mejoras agregarían si tuvieran más tiempo:

Me gustaria poder agrear un campo como opcional, de poder elegir entre dos opciones, como genero, o mayor/menor de edad. 

