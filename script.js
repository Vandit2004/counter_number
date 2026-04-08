let add = document.querySelector(".add")
let del = document.querySelector(".del")
let reset = document.querySelector(".reset")
let output = document.querySelector(".output")
let prime = document.querySelector(".prime")
let palindrome = document.querySelector(".palindrome")
let fibonacci = document.querySelector(".fibonacci")
let count = 0
add.addEventListener("click",function(){
    if(count<50){
        count++
        output.innerHTML = count
    }
})
del.addEventListener("click",function(){
    if(count>0){
        count--
        output.innerHTML = count
    }
})
reset.addEventListener("click",function(){
    count = 0
    output.innerHTML = count
})
function isprime(n){
    if(n<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
prime.addEventListener("click",function(){
    count++
    while(!isprime(count)){
        count++
    }
    output.innerHTML = count
})
function ispalindrome(n){
    let rev = n
    let ans = 0
    while(rev>0){
        let x = rev%10
        ans = ans*10 + x 
        rev = Math.floor(rev/10)
    }
    if(ans == n){
        return true
    }
    else{
        return false
    }
}
palindrome.addEventListener('click',function(){
    count++
    while(!ispalindrome(count)){
        count++
    }
    output.innerHTML = count
})
function isfibonacci(n){
    let a = 0
    let b = 1
    while(a<=n){
        if(a == n){
            return true
        }
        let c = a + b
        a = b
        b = c
    }
    return false
}
fibonacci.addEventListener("click",function(){
    count++
    while(!isfibonacci(count)){
        count++
    }
    output.innerHTML = count
})
