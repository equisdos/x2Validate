/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*	x2Validate v1.0 | GPL 2003 equisdos | www.equisdos.com
//	Autores:
//			- Eugenio Lacuesta
//			- Camilo Pifano
*/
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*INTEGRACION CON LIBRERIA JQUERY VALIDATE*/
	/*Traduccion de mensajes a ES*/
	jQuery.extend(jQuery.validator.messages, {
		required: " Este campo es obligatorio.",
		remote: " Por favor, rellena este campo.",
		email: " Por favor, escriba una dirección de correo válida",
		url: " Por favor, escriba una URL válida.",
		date: " Por favor, escriba una fecha válida.",
		dateISO: " Por favor, escriba una fecha respetando el formato ISO.",
		number: " Por favor, escriba un número entero válido.",
		digits: " Por favor, escriba sólo dígitos.",
		creditcard: " Por favor, escriba un número de tarjeta válido.",
		equalTo: " Por favor, escriba el mismo valor de nuevo.",
		accept: " Por favor, escriba un valor con una extensión aceptada.",
		maxlength: jQuery.validator.format(" Por favor, no escriba más de {0} caracteres."),
		minlength: jQuery.validator.format(" Por favor, no escriba menos de {0} caracteres."),
		rangelength: jQuery.validator.format(" Por favor, escriba un valor entre {0} y {1} caracteres."),
		range: jQuery.validator.format(" Por favor, escriba un valor entre {0} y {1}."),
		max: jQuery.validator.format(" Por favor, escriba un valor menor o igual a {0}."),
		min: jQuery.validator.format(" Por favor, escriba un valor mayor o igual a {0}.")
	});
	
	/*Añadir metodo Solo Letras Simple*/
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, " Por favor, escriba sólo letras, sin tíldes ni eñes.");
	
	/*Añadir metodo Solo Letras Simple (Caracteres simples de 0 a 4 espacios divisores)*/
	jQuery.validator.addMethod("lettersonlyWS", function(value, element) {
		return this.optional(element) || /^([a-z]+\s+){0,4}[a-z]+$/i.test(value);
	}, " Por favor, escriba sólo letras y espacios, sin tíldes ni eñes.");
	
	/*Añadir metodo Solo Letras Complejo (Caracteres especiales)*/
	jQuery.validator.addMethod("specialletters", function(value, element) {
		return this.optional(element) || /^[a-zA-Z'ñáéíóúÁÉÍÓÚ]+$/i.test(value);
	}, " Por favor, escriba sólo letras.");
	
	/*Añadir metodo Solo Letras Complejo (Caracteres especiales de 0 a 4 espacios divisores)*/
	jQuery.validator.addMethod("speciallettersWS", function(value, element) {
		return this.optional(element) || /^([a-zA-Z'-áéíóúÁÉÍÓÚ]+\s+){0,4}[a-zA-Z'-áéíóúÁÉÍÓÚ]+$/i.test(value);
	}, " Por favor, escriba sólo letras y espacios.");
	
	/*Iniciar validacion de datos*/
	$(".x2-validate").validate();
	
	/*INICIAR CONTROL DE INGRESO*/
	/*SOLO NUMEROS*/
	$(".digits").bind({
		'keypress' : function(event){return Digits_Only(event);}
	});
	
	/*SOLO LETRAS SIMPLE (SIN ESPACIOS)*/
	$(".lettersonly").bind({
		'keypress' : function(event){return Letters_Only(event);}
	});
	
	/*SOLO LETRAS SIMPLE (CON ESPACIOS)*/
	$(".lettersonlyWS").bind({
		'keypress' : function(event){return Letters_Only_WS(event);}
	});
	
	/*SOLO LETRAS COMPLEJO (SIN ESPACIOS)*/
	$(".specialletters").bind({
		'keypress' : function(event){return Special_Letters(event);}
	});
	
	/*SOLO LETRAS COMPLEJO (CON ESPACIOS)*/
	$(".speciallettersWS").bind({
		'keypress' : function(event){return Special_Letters_WS(event);}
	});
	
	/*SOLO MOUSE*/
	$(".mouseonly").bind({
		'keypress' : function(event){return Mouse_Only(event);}
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO NUMEROS:----------------------------------------------------------------------------------------------------------------------------------------------*/
function Digits_Only(Evento){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if (CodigoCaracter > 31 && (CodigoCaracter < 48 || CodigoCaracter > 57)){
		return false;
	} else{
		return true;
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO LETRAS SIMPLE (SIN ESPACIOS):-------------------------------------------------------------------------------------------------------------------------*/
function Letters_Only(Evento){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8 ){
		return false;
	} else{
		return true;
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO LETRAS SIMPLE (CON ESPACIOS):-------------------------------------------------------------------------------------------------------------------------*/
function Letters_Only_WS(Evento){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8 && CodigoCaracter != 32 ){
		return false;
	} else{
		return true;
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO LETRAS COMPLEJO (SIN ESPACIOS):-----------------------------------------------------------------------------------------------------------------------*/
function Special_Letters(Evento){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8
		&& CodigoCaracter != 241 && CodigoCaracter != 209 && CodigoCaracter != 225 && CodigoCaracter != 193
		&& CodigoCaracter != 233 && CodigoCaracter != 201 && CodigoCaracter != 237 && CodigoCaracter != 205 && CodigoCaracter != 243
		&& CodigoCaracter != 211 && CodigoCaracter != 250 && CodigoCaracter != 218 && CodigoCaracter != 39){
		return false;
	} else{
		return true;
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO LETRAS COMPLEJO (CON ESPACIOS):-----------------------------------------------------------------------------------------------------------------------*/
function Special_Letters_WS(Evento){
	/*Capturar codigo Ascii del evento KeyPress*/
	var CodigoCaracter = (Evento.which) ? Evento.which : event.keyCode;
	
	/*Evaluar*/
	if ((CodigoCaracter < 97 || CodigoCaracter > 122) && (CodigoCaracter < 65 || CodigoCaracter > 90) && CodigoCaracter != 8
		&& CodigoCaracter != 32 && CodigoCaracter != 241 && CodigoCaracter != 209 && CodigoCaracter != 225 && CodigoCaracter != 193
		&& CodigoCaracter != 233 && CodigoCaracter != 201 && CodigoCaracter != 237 && CodigoCaracter != 205 && CodigoCaracter != 243
		&& CodigoCaracter != 211 && CodigoCaracter != 250 && CodigoCaracter != 218 && CodigoCaracter != 39){
		return false;
	} else{
		return true;
	}
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*SOLO MOUSE (NO KEYBOARD):----------------------------------------------------------------------------------------------------------------------------------*/
function Mouse_Only(Evento){
	return false;
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/