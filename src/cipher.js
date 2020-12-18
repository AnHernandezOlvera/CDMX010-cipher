const cipher = {
  // ...
//Función para cifrar
encode: function (offset, message) {
  let offsetU = parseFloat(offset)
  let valueNumber = Math.sign(offsetU);
  let alfabeto =[];//cambio
  if(!message && !offset){
    throw new TypeError('Valores incorrectos');
  } 
  if(offset===null && typeof message!==String){
    throw new TypeError('Valores incorrectos');
  }
    for (let i = 0; i < message.length; i++ ){
        //Obtiene el código ASCII de cada letra
        alfabeto[i] = message.charCodeAt(i);

        //Aplica únicamente a las letras de la A-Z / con el código ASCII del 65 al 90 
       if (alfabeto[i] >= 65 && alfabeto[i]<=90 && valueNumber===1) {
            //Convierte a cadena el valor ASCII aplicando la fórmula de cipher
            alfabeto[i] = String.fromCharCode((alfabeto[i]-65+offsetU)%26+65);
            
        }  
        
        else if (alfabeto[i] >= 65 && alfabeto[i]<=90 && valueNumber===-1){
          alfabeto[i] = message.charCodeAt(i);
          offsetU = 26+(offsetU%26);
          //console.log(offsetU);
          alfabeto[i] = String.fromCharCode((alfabeto[i]-65+offsetU)%26+65);
          
        } /*else if(messageU==='NULL'){
          messageU=== 'NULL'
          
        }*/

            
        else{
            //Convierte a cadena el valor ASCII de otras letras o caracteres que se quedan fuera del rango 65-90
            alfabeto[i] = String.fromCharCode (alfabeto[i])
            //console.log('Hola error2')
            
        }
        
        //Modifica el elemento del DOM e imprime sin comas el texto cifrado  
    }
    return alfabeto.join('')
  
  },
  decode: function (offset, printcipher) {
    let offsetU = parseFloat(offset);
    let alfabeto =[];
    if(!printcipher && !offset){
      throw new TypeError('Valores incorrectos');
    } 
    if(offset===null && typeof printcipher!==String){
      throw new TypeError('Valores incorrectos');
    }
    
      for (let i = 0; i < printcipher.length; i++){
          //Obtiene el código ASCII de cada letra
          alfabeto[i] = printcipher.charCodeAt(i);
          //Aplica únicamente a las letras de la A-Z / con el código ASCII del 65 al 90 
          if (alfabeto[i] >= 65 && alfabeto[i]<=90) {
              //Convierte a cadena el valor ASCII aplicando la fórmula de cipher
              alfabeto[i] = String.fromCharCode((alfabeto[i]+65-offsetU)%26+65);
          }else{
              //Convierte a cadena el valor ASCII de otras letras o caracteres que se quedan fuera del rango 65-90
              alfabeto[i] = String.fromCharCode (alfabeto[i])
          }
          //Modifica el elemento del DOM e imprime sin comas el texto cifrado  
      }
      return alfabeto.join('')
    }
  
}
export default cipher;
