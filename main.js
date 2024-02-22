// const mygtukas1 = document.querySelector('#intro')
// .addEventListener('click', e =>{
    
//     const tabs = document.querySelector('.tabs');
//     tabs.classList.add("rodoma")

//     const body = document.querySelector('body');
//     body.classList.add('bodySStyle')
    
//     const head = document.querySelector('body > div');
//     head.classList.add('paslepta')

//     const exit = document.querySelector('#introHead > svg')
//     .addEventListener('click', e =>{

//         tabs.classList.add('paslepta')
//     })

// })

const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const tab4 = document.querySelector('.tab4');

const mygtukas1 = document.querySelector('#intro')
mygtukas1.addEventListener('click', ()=>{
    tab1.showModal();
})

const uzdaryti1 = document.querySelector('#introHead > svg');
uzdaryti1.addEventListener('click', ()=>{
    tab1.close();
})

const mygtukas2 = document.querySelector('#work')
mygtukas2.addEventListener('click', ()=>{
    tab2.showModal();
})

const uzdaryti2 = document.querySelector('#workHead > svg');
uzdaryti2.addEventListener('click', ()=>{
    tab2.close();
})

const mygtukas3 = document.querySelector('#about')
mygtukas3.addEventListener('click', ()=>{
    tab3.showModal();
})

const uzdaryti3 = document.querySelector('#aboutHead > svg');
uzdaryti3.addEventListener('click', ()=>{
    tab3.close();
})
const mygtukas4 = document.querySelector('#contact')
mygtukas4.addEventListener('click', ()=>{
    tab4.showModal();
})

const uzdaryti4 = document.querySelector('#contactHead > svg');
uzdaryti4.addEventListener('click', ()=>{
    tab4.close();
})

