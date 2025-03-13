
let cheese = "https://th.bing.com/th/id/OIP.j3bvaglGwvu2Tb8zZ7ZHFQHaE8?w=301&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
let pineapple ="https://th.bing.com/th/id/OIP.vgAte9cnkjNdVQd-NqcFpwHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
let pizzas = [cheese, pineapple, veggie]; 




function changeimg() {
    let randomIndex = Math.floor (Math.random()*2); 
    console.log(randomIndex);
    document.getElementById('pizza').src = pizzas[randomIndex]
    //document.getElementById('pizza').src ="https://dynaimage.cdn.cnn.com/cnn/digital-images/org/51ae1592-d8ad-404d-a3a6-bc6e8679842b.jpg";
    
}