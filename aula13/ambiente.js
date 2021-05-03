/*console.log(`tudo bem?`)
console.log(`tudo bem?`)
console.log(`tudo bem?`)
console.log(`tudo bem?`)
console.log(`tudo bem?`)*/

var i = 1
var plural = ' ' 

do{
    if(i == 2){
        plural = 's' + plural
    }
    console.log(`comi ${i} pedaço${plural}de pizza`)
    i++
}while(i<=6)