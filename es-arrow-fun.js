
// regular function 

// function add(a,b){
//     return a+b;
// }

// arrow fuction 
var add=(a,b)=> a+b;
console.log(add(10,30));


class cat{
    constructor(){
        this.item=['apple','orangr','banana'];

    }
    ShowItem(){
        // this.item.forEach(function(ite){
        //     console.log(ite);
        // });
        // regular methds
        this.item.forEach(it => console.log(it));
    }
}

const cart = new cat();
cart.ShowItem();


const posts=[
    {id:1, title:'first post',likes:4},
    {id:2, title:'Second post',likes:2},
    {id:3, title:'Third post',likes:9}
]

var fillpost= posts.filter(post => post.likes>5);
console.log(fillpost);




