import cipher from './cipher.js'
console.log(cipher)

document.getElementById('buttonEncode').addEventListener("click", function () {
    console.log('soy el evento click')
    let messageU = document.getElementById('message').value;
    let offsetU = document.getElementById('offset').value;
    const result = cipher.encode(offsetU, messageU)
    console.log({ result })
    let printCipher = document.getElementById('printcipher');
    printCipher.innerHTML = result;
    console.log('soy'+messageU)
    console.log('soy'+offsetU)
});
document.getElementById('buttonDecode').addEventListener("click", function(){
    let printcipherU = document.getElementById('printcipher').value;
    let offsetU = document.getElementById('offset').value;
    const result = cipher.decode(offsetU, printcipherU)
    console.log({ result })
    let printCipher = document.getElementById('printcipher');
    printCipher.innerHTML = result;
});

document.getElementById('message').addEventListener("keyup", function (){
    let messageU = document.getElementById('message').value;
    document.getElementById('message').value = messageU.toUpperCase();
});