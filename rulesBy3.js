function ruleByTree(value, refValue,) {
    return ((value / refValue) * 100).toFixed(2);
}
function calcFont(value, refValue) {
    return value/refValue
}

let heightValue = 0
let refHeight = 566

let widthValue = 22
let refWidth = 1440



let height = ruleByTree(heightValue, refHeight)
let heightTiers = heightValue/3
let width = ruleByTree(widthValue, refWidth)
let widthTiers = widthValue/3
let font = calcFont(23, 16)



console.log(`min-height: ${heightTiers.toFixed(2)}px;\n`+
            `height: ${height}%;\n`+
            `max-height: ${heightValue}px;`)
console.log(`min-width: ${widthTiers.toFixed(2)}px;\n`+
            `width: ${width}%;\n`+
            `max-width: ${widthValue}px;`)
console.log('')
console.log(`aspect-ratio: ${widthValue}/${heightValue}`)
console.log('')
console.log(`font ${font}rem`)