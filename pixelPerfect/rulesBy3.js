function ruleByTree(value, refValue,) {
    return ((value / refValue) * 100).toFixed(2);
}
function calcFont(value, refValue) {
    return value/refValue
}

let heightValue =26
let refHeight = 300

let widthValue = 20
let refWidth = 200



let height = ruleByTree(heightValue, refHeight)
let heightTiers = heightValue/3
let width = ruleByTree(widthValue, refWidth)
let widthTiers = widthValue/3
let font = calcFont(23.44, 16)

console.log(`height: ${height}% | heightTiers: ${heightTiers.toFixed(2)}px`)
console.log(`width: ${width}%| widthTiers: ${widthTiers.toFixed(2)}px`)
console.log(`font ${font}rem`)