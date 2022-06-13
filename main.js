console.log(`XIFY`)

function xify(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString += "x"
        // console.log(newString)
    }
    return newString
}

console.log(xify("hi there"))

console.log(`\nYELLING CHARS`)

function yellingChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = newString + string[count] + "!"
    }
    return newString
}

console.log(yellingChars("oh hello"))

console.log(`\nINDEXED CHARS`)

function indexedChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = newString + count + string[count]
    }
    return newString
}

console.log(indexedChars("bye"))

console.log(`\nNUMBERED CHARS`)

function numberedChars(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        newString = `${newString}(${count + 1})${string[count]}`
    }
    return newString
}

console.log(numberedChars("bye"))

console.log(`\nEXCLAIM`)

function exclaim(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (string[count] === "?" || string[count] === ".") {
            newString = `${newString}!`
        } else {
            newString = `${newString}${string[count]}`
        }
    }
    return newString
}

console.log(exclaim("This is fine."))

console.log(`\nREPEAT IT`)

function repeatIt(string, n) {
    let newString = ""
    for (let count = 0; count < n; count++) {
        newString = newString + string
    }
    return newString
}

console.log(repeatIt("oh hi!", 8))

console.log(`\nTRUNCATE`)

function truncate(string) {
    let newString = ""
    if (string.length > 15) {
        for (let count = 0; count < 15; count++) {
            newString = `${newString}${string[count]}`
        }
        return `${newString}...`
    } else {
        return string
    }
}

console.log(truncate("Well, that's just, like, your opinion man."))

console.log(`\nCI EMAILIFY`)

function ciEmailify(name) {
    let newString = ""
    for (let count = 0; count < name.length; count++) {
        if (name[count] === " ") {
            newString = `${newString}.`
        } else {
            newString = `${newString}${name[count]}`
        }
    }
    return `${newString.toLowerCase()}@codeimmersives.com`
}

console.log(ciEmailify("Anthony DeRosa"))

console.log(`\nREVERSE`)

function reverse(string) {
    let newString = ""
    for (let count = (string.length - 1); count >= 0; count--) {
        newString = newString + string[count]
    }
    return newString
}

console.log(reverse("mesuara"))

console.log(`\nONLY VOWELS`)

function onlyVowels(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (string[count].toLowerCase() === "a" || string[count].toLowerCase() === "e" || string[count].toLowerCase() === "i" || string[count].toLowerCase() === "o" || string[count].toLowerCase() === "u") {
            newString = `${newString}${string[count]}`
        }
    }
    return newString
}

console.log(onlyVowels("Anthony DeRosa"))

console.log(`\nCRAZY CASE`)

function crazyCase(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (count % 2 === 0) {
            newString = newString + string[count].toLowerCase()
        } else {
            newString = newString + string[count].toUpperCase()
        }
    }
    return newString
}

console.log(crazyCase("YELLING"))

console.log(`\nTITLE CASE`)

function titleCase(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (count === 0 || string[count - 1] === " ") {
            newString = newString + string[count].toUpperCase()
        } else {
            newString = newString + string[count].toLowerCase()
        }
    }
    return newString
}

console.log(titleCase("cOde iMMerSives"))

console.log(`\nCAMEL CASE`)

function camelCase(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (string[count - 1] === " ") {
            newString = newString + string[count].toUpperCase()
        } else if (string[count] === " ") {
        } else {
            newString = newString + string[count].toLowerCase()
        }
    }
    return newString
}

console.log(camelCase("Boy howdy"))

console.log(`\nCRAZY CASE 2 RETURN OF CRAZY CASE`)

function crazyCase2ReturnOfCrazyCase(string) {
    let newString = ""
    for (let count = 0; count < string.length; count++) {
        if (count === 0) {
            newString = newString + string[count].toLowerCase()
        } else if (string[count - 1] === " "){
            if (newString[count - 2] === newString[count - 2].toLowerCase()){
                newString = newString + string[count].toUpperCase()
            } else if (newString[count - 2] === newString[count - 2].toUpperCase()){
                newString = newString + string[count].toLowerCase()
            }
        } else if(string[count] === " ") {
            newString = newString + string[count]
        } else if (newString[count - 1] === newString[count - 1].toLowerCase()){
            newString = newString + string[count].toUpperCase()
        } else if (newString[count - 1] === newString[count - 1].toUpperCase()){
            newString = newString + string[count].toLowerCase()
        }
    }
    return newString
}

console.log(crazyCase2ReturnOfCrazyCase("crazy stuff"))