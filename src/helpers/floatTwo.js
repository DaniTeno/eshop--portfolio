export function floatTwo(number){
    if (!number) return 0
    let splitNum = number.toString().split(".")
    let int = splitNum[0];
    let float
    (splitNum.length > 1) ? float = splitNum[1].slice(0,2): float = "00"
    let newNumber = int+","+((float.length === 1) ? float+"0" : float);
    return newNumber
}