const buttons = document.querySelectorAll('.ripple')


buttons. forEach(button => {
    button.addEventListener('click', function (e)  {
    

        const X = e.clientX
        const Y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const XInside = X - buttonLeft
        const YInside = Y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = YInside + 'px'
        circle.style.left = XInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(),500)
    })
})