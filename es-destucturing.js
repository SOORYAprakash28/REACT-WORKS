
// constudtiong an array 
const todo=["Buy groceries","Complete assisgnmnet","prpare for placement"];

// lets destucting to extract individual object

const [firsttask,secondtask, thirdtask]=todo;
console.log(firsttask);
console.log(secondtask);
console.log(thirdtask);


const product = {name:"laptop",brand:"HP",price:"50,000"};
const {name,brand,price}=product;
console.log(name);
console.log(brand);
console.log(price);


// destucting nested objectr and array
const response={
    status:200,
    data:{
        user:{
            usname:"soorya",
            address:{
                city:"padubidri",
                country:"India",
            }
        }
    }
}

const {data:{user:{usname,address:{city,country}}}}=response;
console.log(usname);
console.log(city);
console.log(country);




