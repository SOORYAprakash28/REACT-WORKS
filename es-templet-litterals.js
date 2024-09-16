const username = "Soorya";
const greetings = `Hi ${username} welcome to Alvas`;
console.log(greetings);

const item='apple';
const qn=5;
const price=25;
const total = `You bought ${qn} ${item} for price of ${price},`;
console.log(total);
// tag templet litterlers

function formatcurrency(strings, amount){
    const forr =`${parseFloat(amount).toFixed(2)}`
    return `${strings[0]} ${forr}`;
}
const pricv =45.235;
const mess = formatcurrency('soorya praksh',pricv);
console.log(mess);

