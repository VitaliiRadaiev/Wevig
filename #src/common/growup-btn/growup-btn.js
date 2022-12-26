{
    let btn = document.querySelector('[data-to-up]');
    if(btn) {
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })
    }
}