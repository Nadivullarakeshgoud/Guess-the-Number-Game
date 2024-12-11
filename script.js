// const userInput=document.querySelector('.user-input')
// const form=document.querySelector('form')
// const result=document.querySelector('.result')
// const allGuesses=document.querySelector('.all-guesses')
// const submitBtn=document.querySelector('.submit')
// const startGameBtn=document.querySelector('.start-game')

// const allGuessesArray=[]
// let randomNumber=Math.round(Math.random()*100)


// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const userInputvalue=parseInt(userInput.value)
//     if(userInputvalue<randomNumber){
//         result.innerText='Too low!'
        
//     }else if(userInputvalue>randomNumber){
//         result.innerText='Too high!'
        
//     }else{
//         result.innerText='You got it! Congrats!!!'
//         submitBtn.disabled=true
//         startGameBtn.disabled=false
//     }

//     allGuessesArray.push(userInputvalue)
//     allGuesses.innerText='Your guesses:'+ allGuessesArray.join(',')
//     form.reset()

    
// })

// startGameBtn.addEventListener('click',()=>{
//     result.innerText=''
//     allGuesses.innerText=''
//     submitBtn.disabled=false
//     startGameBtn.disabled=true
//     randomNumber=Math.round(Math.random()*100)
// })

//above is actual code but we can see in console random number
//here used iife to not see the random number value befor game in console
//same code used iife syntax

// (function(){
//     code here
// })()

(function(){
    const userInput=document.querySelector('.user-input')
const form=document.querySelector('form')
const result=document.querySelector('.result')
const allGuesses=document.querySelector('.all-guesses')
const submitBtn=document.querySelector('.submit')
const startGameBtn=document.querySelector('.start-game')

const allGuessesArray=[]
let randomNumber=Math.round(Math.random()*100)


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const userInputvalue=parseInt(userInput.value)
    if(userInputvalue<randomNumber){
        result.innerText='Too low!'
        
    }else if(userInputvalue>randomNumber){
        result.innerText='Too high!'
        
    }else{
        result.innerText='You got it! Congrats!!!'
        submitBtn.disabled=true
        startGameBtn.disabled=false
    }

    allGuessesArray.push(userInputvalue)
    allGuesses.innerText='Your guesses:'+ allGuessesArray.join(',')
    form.reset()

    
})

startGameBtn.addEventListener('click',()=>{
    result.innerText=''
    allGuesses.innerText=''
    submitBtn.disabled=false
    startGameBtn.disabled=true
    randomNumber=Math.round(Math.random()*100)
})
})()