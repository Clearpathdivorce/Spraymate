const routes = ["home","services","work","about","contact"];

function setActive(linkId){
  document.querySelectorAll("[data-route]").forEach(a=>{
    a.classList.toggle("active", a.dataset.route === linkId);
  });
}

function render(){
  const hash = (location.hash || "#home").replace("#","");
  const route = routes.includes(hash) ? hash : "home";
  setActive(route);

  document.querySelectorAll("[data-page]").forEach(p=>{
    p.style.display = (p.dataset.page === route) ? "block" : "none";
  });

  window.scrollTo({top:0, behavior:"instant"});
}

function go(route){
  location.hash = route;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll("[data-go]").forEach(el=>{
    el.addEventListener("click", ()=>go(el.dataset.go));
  });
  render();
});
