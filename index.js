//esta función es la que ejecuta el sonido cuando presionamos una tecla (keydown). la llamamos abajo de todo.
function sonar(evento){
  //en la constante 'audio' guardamos el sonido asignado a cada tecla con el atributo 'data-key' 
  //ese atributo asigna un número a cada tecla (el 'keyCode')
  const audio = document.querySelector(`audio[data-key="${evento.keyCode}"]`);
  //en la constante 'tecla' guardamos cada elemento con la clase 'tecla'
  const tecla = document.querySelector(`.tecla[data-key="${evento.keyCode}"]`);
  //en esta línea indicamos que deje de ejecutar la función cuando no haya audio
  if(!audio) return;
  //con 'currentTime' (tiempo actual) podemos tocar las teclas repetidamente sin tener que esperar a que el audio deje de sonar
  audio.currentTime = 0;
  audio.play();
  //agregamos a la tecla presionada la clase 'tocando' que es la que definimos en los estilos del css
  //esto hace que la tecla presionada cambie de color y tamaño en pantalla
  tecla.classList.add('tocando');
};

//esta función evita que el efecto de transformación de la tecla en pantalla se mantenga activo indefinidamente
//para ello se agrega en el css el efecto transition, que mantiene la transformación de la tecla por 0.7s
function removerTransicion(evento){
  //preguntamos si el evento (apretar la tecla) está asociado a un elemento con una propiedad distinta a la propiedad transform
  //en el caso de que tenga una propiedad con un nombre distinto, salimos de la función
  if(evento.propertyName !== 'transform') return;
  //this se refiere a la tecla apretada
  //en este caso si la tecla apretada tiene una propiedad de css llamada transform, se le quita la clase 'tocando'
  //entonces su estilo en pantalla vuelve a ser el de una tecla normal, sin efectos visuales, luego del tiempo establecido de 0.7s
  this.classList.remove('tocando');
};

//seleccionamos todos los elementos con la clase 'tecla'
const teclas = document.querySelectorAll('.tecla');
//a cada una de las teclas se le aplica la función que remueve el estilo transition
teclas.forEach(tecla => tecla.addEventListener('transitionend', removerTransicion));
//llamamos a la función 'sonar' que definimos arriba de todo
window.addEventListener('keydown', sonar);


