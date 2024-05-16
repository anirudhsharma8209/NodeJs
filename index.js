let name1 = "Anirudh";
let name2 = "Sharma";

let num1 = 100;
let num2 = 200;


let arr = [101, "Anirudh", "BCA", "Star infotech college"];

// arr.forEach((value) => {
//     console.log(value)
// })

// let Obj = {
//     name : "Anirudh",
//     age : 21,
//     college : "Star infotech",
//     address : "14/239 Laxmi nagar"
// }

// for(let i in Obj){
//     console.log(Obj[i])
// }
// console.log(arr.indexOf(102));
// console.log(arr.includes("Anirudh"));
// console.log(num1 + num2);
// console.log(name1 + " " + name2);


const getData = () => { 
    let data = {status : 201};
    return new Promise((resolve, reject) => {
        if(data.status == 200){
            setTimeout(() => {
                resolve(data);
            }, 1000)
        }else{
            reject("error");
        }
    })
}

getData().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})