// let developer = {
//     name: "Alexander",
//     age: 27,
//     position: 'front'
// }
// const updateInfo = {
//     age: 28
// }

// developer = {
//     ...developer,
//     ...updateInfo
// }
// console.log(developer.age);

// function suma(...numbers){
//     let total = 0;
//     numbers.forEach((number) => (total += number))
//     return total;
// }
// function suma2(){
//     let num1 = $("num1").val();
//     let num2 = $("num2").val();
//     let total = num1 + num2;
//     alert(total);
// }
// console.log(suma(1,2,60));
// function view(){
//     document.getElementById('init').innerHTML = 'hola mundo'
// }
// view();

// Sección de videos
const vContainer = document.getElementById("v-container")
const videos  = [
    {id:1, title:"Sol y Luna", URL:"https://k33.kn3.net/taringa/F/C/2/E/0/B/hungaberto/548.jpg", description:"solo tu"},
    {id:2, title:"Aventuras peligrosas", URL:"https://media.taringa.net/knn/identity/aHR0cDovL2szMS5rbjMubmV0L3RhcmluZ2EvNy82L0QvQy80LzkvZGFuaWVsY2FybG9zd2FzaS9DOEQuanBn", description:"solo tu"},
    {id:3, title:"Si eres tú", URL:"https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%c3%a1genes-de-fantas%c3%ada-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0", description:"solo tu"},
    {id:4, title:"Si eres tú", URL:"https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%c3%a1genes-de-fantas%c3%ada-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0", description:"solo tu"}
]

videos.map(video => {
    let vCard = document.createElement("div");
    vCard.classList.add("v-card")
    vCard.innerHTML = `
        <div class='v-header'>${video.title}</div>
        <div class='v-content'>
            <img src='${video.URL}'>
        </div>
        <div class='v-footer'>${video.description}</div>
    `
    vContainer.appendChild(vCard);
})