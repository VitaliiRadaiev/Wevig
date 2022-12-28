{
    let btn = document.querySelector('[data-to-up]');
    if(btn) {
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })

        btn.classList.toggle('btn-growup--hide', window.pageYOffset < document.documentElement.clientHeight / 2);
        
        window.addEventListener('scroll', () => {
            btn.classList.toggle('btn-growup--hide', window.pageYOffset < document.documentElement.clientHeight / 2);
        })
    }
}