
function mod(x, y) {
    const remainder = x % y;
    if (remainder < 1) {
        return y + remainder;
    } else {
        return remainder;
    }
}

function makekey(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


function charpos(char) {
    if (char.length !=  1){
        throw 'Only One Char  please';
    }
    var code = char.toUpperCase().charCodeAt(0)
    if (code > 64 && code < 91) {
        return code - 64
    }
}

function poschar(pos){
    return(String.fromCharCode(pos+64))
}

function coded(messageChar, keyChar){
    messagePos = charpos(messageChar)
    keyPos = charpos(keyChar)
    return poschar((mod((messagePos + keyPos),26)))
}

function decoded(messageChar, keyChar){
    messagePos = charpos(messageChar)
    keyPos = charpos(keyChar)
    return poschar((mod((messagePos - keyPos),26)))
}


function encrypt (message,key) {
    messageArray = Array.from(message)
    keyArray = Array.from(key)

    if (messageArray.length !=  keyArray.length){
        throw 'Key and Message are different lengths';
    }

    var encryptedMessage = ''
    for (var i = 0; i < messageArray.length; i++) {
        codedChar = coded(messageArray[i], keyArray[i])
        encryptedMessage = encryptedMessage.concat(codedChar)
    }

    return(encryptedMessage)

}

function decrypt (message,key) {
    messageArray = Array.from(message)
    keyArray = Array.from(key)

    if (messageArray.length !=  keyArray.length){
        throw 'Key and Message are different lengths';
    }

    var decryptedMessage = ''
    for (var i = 0; i < messageArray.length; i++) {
        decodedChar = decoded(messageArray[i], keyArray[i])
        decryptedMessage = decryptedMessage.concat(decodedChar)
    }

    return(decryptedMessage)

}


var message = 'CAT'
var key = 'AHY'
var encrypted = encrypt(message,key)
console.log(encrypted)
var decrypted = decrypt(encrypted,key)
console.log(decrypted)


message = 'Encryption is the best'
key = makekey(message.length)
var encrypted = encrypt(message,key)
console.log(encrypted)
var decrypted = decrypt(encrypted,key)
console.log(decrypted)


