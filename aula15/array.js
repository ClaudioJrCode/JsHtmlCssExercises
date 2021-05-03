let num = [5,8,2,9,3]
num[3] = 6
num.push(7)
console.log(num.sort())
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

num.length = RandomSource