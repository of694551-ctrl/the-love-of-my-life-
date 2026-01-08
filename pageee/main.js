document.getElementById('btnNext').addEventListener('click', () => {
    document.body.style.opacity = 0;
     setTimeout(() => {
    window.location.href = 'segunda.html';  
        }, 800);
});