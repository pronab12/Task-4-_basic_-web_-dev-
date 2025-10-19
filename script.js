/* ---------- PRODUCT FILTER & SORT ---------- */
const products=[
 {name:"Laptop",price:850},
 {name:"Headphones",price:120},
 {name:"Camera",price:420},
 {name:"Keyboard",price:70},
 {name:"Smartwatch",price:250},
 {name:"Tablet",price:350}
];
function displayProducts(list){
 const container=document.getElementById("productList");
 if(!container)return;
 container.innerHTML="";
 list.forEach(p=>{
   const div=document.createElement("div");
   div.className="card";
   div.innerHTML=`<h3>${p.name}</h3><p>💲${p.price}</p>`;
   container.appendChild(div);
 });
}
displayProducts(products);
function filterProducts(){
 const query=document.getElementById("searchInput").value.toLowerCase();
 const filtered=products.filter(p=>p.name.toLowerCase().includes(query));
 displayProducts(filtered);
}
function sortProducts(){
 const sort=document.getElementById("sortSelect").value;
 let sorted=[...products];
 if(sort==="name")sorted.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="price")sorted.sort((a,b)=>a.price-b.price);
 displayProducts(sorted);
}

/* ---------- LOCAL STORAGE NOTES ---------- */
function addNote(){
 const input=document.getElementById("noteInput");
 let notes=JSON.parse(localStorage.getItem("notes"))||[];
 if(input.value.trim()==="")return alert("Enter a note!");
 notes.push(input.value);
 localStorage.setItem("notes",JSON.stringify(notes));
 input.value="";
 loadNotes();
}
function loadNotes(){
 const list=document.getElementById("noteList");
 if(!list)return;
 list.innerHTML="";
 const notes=JSON.parse(localStorage.getItem("notes"))||[];
 notes.forEach((note,i)=>{
   const li=document.createElement("li");
   li.textContent=note;
   const btn=document.createElement("button");
   btn.textContent="❌";
   btn.onclick=()=>deleteNote(i);
   li.appendChild(btn);
   list.appendChild(li);
 });
}
function deleteNote(i){
 let notes=JSON.parse(localStorage.getItem("notes"))||[];
 notes.splice(i,1);
 localStorage.setItem("notes",JSON.stringify(notes));
 loadNotes();
}
loadNotes();

/* ---------- CONTACT FORM ---------- */
const form=document.getElementById("contactForm");
if(form){
 form.addEventListener("submit",e=>{
   e.preventDefault();
   alert("✅ Message sent successfully!");
   form.reset();
 });
}
