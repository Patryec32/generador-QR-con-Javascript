let formulario=document.getElementById('form');

let qrcode = new QRCode(document.getElementById("qrcode"));

formulario.addEventListener('submit',(e)=>{
	e.preventDefault();
	if(formulario.link.value)	qrcode.makeCode(formulario.link.value);
});