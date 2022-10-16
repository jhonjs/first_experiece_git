let developer = {
    name: "Alexander",
    age: 27,
    position: 'front'
}
const updateInfo = {
    age: 28
}

developer = {
    ...developer,
    ...updateInfo
}
console.log(developer.age);

function suma(...numbers){
    let total = 0;
    numbers.forEach((number) => (total += number))
    return total;
}
function suma2(){
    let num1 = $("num1").val();
    let num2 = $("num2").val();
    let total = num1 + num2;
    alert(total);
}
console.log(suma(1,2,60));
function view(){
    document.getElementById('init').innerHTML = 'hola mundo';
}
view();