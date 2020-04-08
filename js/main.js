const search_btn = document.querySelector('.search_btn');
const panel_busqueda = document.querySelector('.panel_busqueda');
const cerrar_busqueda = document.querySelector('.cerrar_busqueda');
const input_busqueda = document.querySelector('#input_busqueda');
const foto_laura = document.querySelector('.foto_laura');
const fashion2_img = document.querySelector('.fashion2');
const cont_info4 = document.querySelector('.cont_info4');
const menu_scroll = document.querySelector('.menu_scroll');
const btn_ir_arriba = document.querySelector('.btn_ir_arriba');
let html = document.getElementsByTagName("html")[0];
let body = document.getElementsByTagName("body")[0];

window.addEventListener("load", ()=>{
    setInterval(() => {
        document.querySelector(".blanco").classList.add("active");
        document.querySelector(".info_img1").classList.add("active");
        document.querySelector(".info_img2").classList.add("active");
        document.querySelector(".info_img3").classList.add("active");
        document.querySelector(".info_container").classList.add("active");
    }, 2000);
    
});


function focus(){
    document.getElementById("input_busqueda").focus();
}
input_busqueda.addEventListener('blur', ()=>{
    toggle(panel_busqueda, 'active');
});
function toggle(objeto, clase){
    objeto.classList.toggle(clase);
}

search_btn.addEventListener('click', function(){
    toggle(panel_busqueda, 'active');

    setTimeout(function(){
        focus();
    },100);
});

cerrar_busqueda.addEventListener('click', function(){
    toggle(panel_busqueda, 'active');
});

btn_ir_arriba.addEventListener("click", ()=>{
    html.scrollTop = 0;
});



function scrollAnimation(){
    
    document.addEventListener("scroll", ()=>{
        if(html.scrollTop >=800){
            fashion2_img.classList.add('active');
        }
        if(html.scrollTop >=1450){
            cont_info4.classList.add('active');
        }
        if(html.scrollTop >= 200){
            menu_scroll.classList.add("active");
        }
        if(html.scrollTop <= 199){
            menu_scroll.classList.remove("active");
        }
        if(html.scrollTop >= 300){
            btn_ir_arriba.classList.add("active");
        }
        if(html.scrollTop <= 299){
            btn_ir_arriba.classList.remove("active");
        }


    });
}
scrollAnimation();