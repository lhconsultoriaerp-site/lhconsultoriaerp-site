/* ===================================
   HEADER DINÂMICO
=================================== */

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {

        header.style.background = '#ffffff';
        header.style.boxShadow =
            '0 6px 20px rgba(0,0,0,.10)';

    } else {

        header.style.background = '#ffffff';
        header.style.boxShadow =
            '0 2px 12px rgba(0,0,0,.08)';
    }

});

/* ===================================
   SCROLL SUAVE
=================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        }

    });

});

/* ===================================
   ANIMAÇÃO DE ENTRADA
=================================== */

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
'.service-card, .stat-card, .plan-card, .module-grid div, .about-grid div'
).forEach(el=>{

    el.classList.add('fade-element');

    observer.observe(el);

});

/* ===================================
   BOTÃO WHATSAPP FLUTUANTE
=================================== */

const whatsappBtn =
document.createElement('a');

whatsappBtn.href =
'https://wa.me/5519991618820';

whatsappBtn.target = '_blank';

whatsappBtn.className =
'whatsapp-floating';

whatsappBtn.innerHTML =
'💬';

document.body.appendChild(
whatsappBtn
);

/* ===================================
   ANIMAÇÃO HERO
=================================== */

window.addEventListener('load', ()=>{

    document.body.classList.add(
        'loaded'
    );

});

/* ===================================
   ANO AUTOMÁTICO NO RODAPÉ
=================================== */

const footerText =
document.querySelector('footer p');

if(footerText){

    const anoAtual =
    new Date().getFullYear();

    footerText.innerHTML =
    `© ${anoAtual} L&H Consultoria ERP`;

}

/* ===================================
   LOG DE INICIALIZAÇÃO
=================================== */

console.log(
'Site L&H Consultoria ERP carregado com sucesso.'
);