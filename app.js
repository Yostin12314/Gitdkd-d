const products = [
 {id:1,name:"Auriculares Nova",category:"Electrónica",price:89.00,seller:"Nova Studio",symbol:"◉",glow:"#7775d9",tag:"DESTACADO"},
 {id:2,name:"Chaqueta Essential",category:"Moda",price:64.50,seller:"Northline",symbol:"✦",glow:"#8a6b54",tag:"NUEVO"},
 {id:3,name:"Lámpara Orbit",category:"Hogar",price:42.00,seller:"Forma Lab",symbol:"◌",glow:"#c4a45d",tag:"POPULAR"},
 {id:4,name:"Bolso Mono",category:"Accesorios",price:55.00,seller:"Atelier 09",symbol:"◇",glow:"#a66d91",tag:"SELECCIÓN"},
 {id:5,name:"Cámara Pocket",category:"Electrónica",price:129.00,seller:"Frame Co.",symbol:"▣",glow:"#5b9b9b",tag:"NUEVO"},
 {id:6,name:"Sudadera Core",category:"Moda",price:48.00,seller:"Northline",symbol:"✧",glow:"#77818b",tag:"POPULAR"},
 {id:7,name:"Jarrón Forma",category:"Hogar",price:35.00,seller:"Forma Lab",symbol:"♢",glow:"#b77d5b",tag:"DESTACADO"},
 {id:8,name:"Reloj Axis",category:"Accesorios",price:97.00,seller:"Atelier 09",symbol:"◷",glow:"#8d9a71",tag:"NUEVO"}
];
let activeCategory = "Todos";
const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const empty = document.getElementById("emptyState");
function renderProducts(){
 const q=(search.value||"").trim().toLowerCase();
 const filtered=products.filter(p=>(activeCategory==="Todos"||p.category===activeCategory)&&(`${p.name} ${p.category} ${p.seller}`).toLowerCase().includes(q));
 grid.innerHTML=filtered.map(p=>`<article class="product-card"><div class="product-image" style="--glow:${p.glow}"><span class="product-tag">${p.tag}</span><span class="product-symbol">${p.symbol}</span></div><div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><div class="product-meta"><span class="product-price">$${p.price.toFixed(2)}</span><span class="seller-name">${p.seller}</span></div></div></article>`).join("");
 empty.classList.toggle("hidden",filtered.length>0);
}
renderProducts();
search.addEventListener("input",renderProducts);
categoryFilter.addEventListener("change",()=>{activeCategory=categoryFilter.value;syncChips();renderProducts()});
document.querySelectorAll(".chip").forEach(chip=>chip.addEventListener("click",()=>{activeCategory=chip.dataset.category;categoryFilter.value=activeCategory;syncChips();renderProducts()}));
function syncChips(){document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("selected",c.dataset.category===activeCategory))}
document.getElementById("searchFocus").addEventListener("click",()=>{document.getElementById("catalogo").scrollIntoView({behavior:"smooth"});setTimeout(()=>search.focus(),450)});
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".main-nav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".main-nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const modal=document.getElementById("authModal"), title=document.getElementById("modalTitle"), desc=document.getElementById("modalDescription"), submit=document.getElementById("authSubmit"), switchLine=document.getElementById("authSwitch"), form=document.getElementById("authForm");
let mode="login";
function setMode(next){mode=next;const registering=mode==="register";title.textContent=registering?"Crea tu cuenta.":"Bienvenido.";desc.textContent=registering?"Únete a la comunidad de Shadow Market.":"Accede a tu espacio en el mercado.";submit.innerHTML=registering?"Crear cuenta <span>↗</span>":"Continuar <span>↗</span>";switchLine.innerHTML=registering?'¿Ya tienes cuenta? <button type="button" id="switchMode">Inicia sesión</button>':'¿No tienes cuenta? <button type="button" id="switchMode">Regístrate</button>';document.getElementById("switchMode").addEventListener("click",()=>setMode(registering?"login":"register"))}
function openModal(next){setMode(next);modal.classList.remove("hidden");document.getElementById("authEmail").focus()}
function closeModal(){modal.classList.add("hidden")}
document.getElementById("loginOpen").addEventListener("click",()=>openModal("login"));
document.getElementById("registerOpen").addEventListener("click",()=>openModal("register"));
document.getElementById("sellerJoin").addEventListener("click",()=>openModal("register"));
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
function toast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2800)}
form.addEventListener("submit",e=>{
 e.preventDefault();
 const email=document.getElementById("authEmail").value.trim().toLowerCase();
 const password=document.getElementById("authPassword").value;
 // Demo only: credentials are stored in this browser and are NOT secure.
 const users=JSON.parse(localStorage.getItem("sm_demo_users")||"{}");
 if(mode==="register"){
  if(users[email]){toast("Ese correo ya está registrado en este navegador.");return}
  users[email]={password};localStorage.setItem("sm_demo_users",JSON.stringify(users));localStorage.setItem("sm_demo_session",email);toast("Cuenta de demostración creada.");
 }else{
  if(!users[email]||users[email].password!==password){toast("Datos incorrectos o cuenta no registrada.");return}
  localStorage.setItem("sm_demo_session",email);toast("Sesión de demostración iniciada.");
 }
 closeModal();form.reset();
});
