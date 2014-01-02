
/*----------------------------------------------------------------------------*/
/*	x2Validate v1.1 | 2013-2014 equisdos
	Authors:
		- Eugenio Lacuesta
		- Camilo Pifano
*/
/*----------------------------------------------------------------------------*/

$().ready(function() {
	
	// ### add validation methods
	
	jQuery.validator.addMethod('digits-ws', function(value, element) {
		return this.optional(element) || /^([0-9]+\s+)*[0-9]+$/i.test(value)
	}, 'Please enter only digits and whitespaces')

	jQuery.validator.addMethod('lettersonly', function(value, element) {
		return this.optional(element) || /^[a-z]+$/i.test(value)
	}, 'Please enter only letters')
	
	jQuery.validator.addMethod('lettersonly-ws', function(value, element) {
		return this.optional(element) || /^([a-z]+\s+)*[a-z]+$/i.test(value)
	}, 'Please enter only letters and whitespaces, no special characters')
	
	jQuery.validator.addMethod('specialchars', function(value, element) {
		return this.optional(element) || /^[a-zA-Z'ñáéíóúÁÉÍÓÚ]+$/i.test(value)
	}, 'Please enter only letters, no whitespaces')
	
	jQuery.validator.addMethod('specialchars-ws', function(value, element) {
		return this.optional(element) || /^([a-zA-Z'-áéíóúÁÉÍÓÚ]+\s+)*[a-zA-Z'-áéíóúÁÉÍÓÚ]+$/i.test(value)
	}, 'Please enter only letters and whitespaces')
	
	
	// ### event handlers for input control
	
	// digits
	$('.digits').on('keypress', function(event){ return inputControl(event, 'digitsonly', false) })

	// digits, allow white space
	$('.digits-ws').on('keypress', function(event){ return inputControl(event, 'digitsonly', true) })
	
	// letters only
	$('.lettersonly').on('keypress', function(event){ return inputControl(event, 'lettersonly', false) })
	
	// letters only, allow white space
	$('.lettersonly-ws').on('keypress', function(event){ return inputControl(event, 'lettersonly', true) })
	
	// special letters
	$('.specialchars').on('keypress', function(event){ return inputControl(event, 'specialchars', false) })
	
	// special letters, allow white space
	$('.specialchars-ws').on('keypress', function(event){ return inputControl(event, 'specialchars', true) })

})

// range
// ### range
function arrayRange(start, end) {
    if ( end >= start ) {
        range = new Array()
        for ( var i = start; i <= end; i++ )
           range.push(i)
        return range
    } else {
        return new Array()
    }
}

// ### input control
function inputControl(e, validationType, allowWhiteSpace) {
    charCode = (e.which) ? e.which : e.keyCode
    console.log('Key pressed: ' + charCode)
    
    // define allowed characters
    switch (validationType) {
        case 'digitsonly':
            // Ascii codes for [0-9]
            allowedChars = arrayRange(48, 57)
            break
        case 'lettersonly':
            // Ascii codes for [A-Z], [a-z]
            allowedChars = arrayRange(65, 90).concat( arrayRange(97, 122) )
            break
        case 'specialchars':
            // Ascii codes for [A-Z], [a-z]
            allowedChars = arrayRange(65, 90).concat( arrayRange(97, 122) )
            // add some special chars
            allowedChars.push(39, 193, 201, 205, 209, 211, 218, 225, 233, 237, 241, 243, 250)
            break
    }
    
    // allow white space, if needed
    if ( allowWhiteSpace )
        allowedChars.push(32)
    
    // allow backspace, tab, enter, arrow keys
    allowedChars.push(8, 9, 13, 37, 39)
	
	return ( allowedChars.indexOf(charCode) >= 0 )
}

