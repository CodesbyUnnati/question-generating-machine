const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => {
            main.style.opacity = 1
        }, 50);
    },7000);
}
init();

function  clicked() {
    let questions=["Tell me about yourself","What attracted you to our company?"," Tell me about your strengths","What are your weaknesses?","Where do you see yourself in five years?","What is a file?","What is a class?","What is an object?","What is a constructor?","What is inheritance?","What is polymorphism?","What are the instance and class variables?","Compare method and constructor?","What is the different type of access modifiers?","Difference between overloading and overriding?","What is a Byte stream?","What is an abstract class?","What is SDLC?","What is Integrated Development Environment?","Explain what is a framework","List the types of constructors","What is artificial intelligence?"," What is machine learning?"," List out different OOPS principles?","What is the difference between compiler and interpreter?","What do you mean by destructor?","List out Layers of OSI Model","What is a microprocessor?","Explain the implementation of virtual methods, dynamic binding"]
    let questions_random=questions[Math.floor(Math.random()*questions.length)];

    document.getElementById("output").innerHTML=questions_random;
    
}