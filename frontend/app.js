
const API="http://localhost:3000/expenses";

document.getElementById("expenseForm").onsubmit=async e=>{
e.preventDefault();
await fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({
amount:+amount.value,category:category.value,
description:description.value,date:date.value
})});
e.target.reset(); load();
};

async function load(){
const r=await fetch(API+"?sort=date_desc");
const d=await r.json(); let t=0; list.innerHTML="";
d.forEach(x=>{t+=x.amount;
list.innerHTML+=`<tr><td>₹${x.amount}</td><td>${x.category}</td><td>${x.date}</td></tr>`;
});
total.innerText="Total: ₹"+t;
}
load();
