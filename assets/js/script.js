document.addEventListener('DOMContentLoaded', () => {

    // 1. CARROSSEL AUTOMÁTICO MAIS RÁPIDO E SEM SETAS
    const swiper = new Swiper('.gallery-slider', {
        loop: true,
        speed: 900, // Transição um pouco mais rápida e dinâmica
        autoplay: {
            delay: 2000, // Cada foto fica exatamente 2 segundos na tela
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade', // Transição elegante em esmaecimento clássico
        fadeEffect: {
            crossFade: true
        }
    });

    // 2. CONTROLE DA MÚSICA AO CLICAR
    const playTrigger = document.getElementById('play-trigger');
    const audio = document.getElementById('audio-lalaland');
    const icon = playTrigger.querySelector('i');
    const trackStatus = document.querySelector('.track-status');

    playTrigger.addEventListener('click', () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    icon.classList.replace('fa-play', 'fa-pause');
                    playTrigger.classList.add('playing');
                    trackStatus.innerText = "Tocando agora... ✨";
                    trackStatus.style.color = "#dfba6b";
                })
                .catch(err => {
                    console.log("Erro ao reproduzir áudio.", err);
                });
        } else {
            audio.pause();
            icon.classList.replace('fa-pause', 'fa-play');
            playTrigger.classList.remove('playing');
            trackStatus.innerText = "Música pausada";
            trackStatus.style.color = "#a4adbe";
        }
    });

    // 3. ANIMAÇÃO DE APARECIMENTO AO ROLAR A TELA
    const blocksToReveal = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        blocksToReveal.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (blockTop < windowHeight * 0.85) {
                block.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});