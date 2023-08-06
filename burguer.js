addEventListener('DOMContentLoaded',()=>{
    const burger=document.getElementById('burger')
    const cat1=document.querySelector('.cat1')
    const car=document.querySelector('.car')
    burger.addEventListener('click', ()=>{
        cat1.classList.toggle('show')
        car.classList.toggle('show')
    })

    const luna=document.getElementById('luna')
    const body=document.querySelector("body")
    const header=document.querySelector("header")
    luna.addEventListener('click',()=>{
        body.classList.toggle("dark-mode")
        header.classList.toggle("dark-mode2")
        console.log(body)
        console.log(header)
    })

    const dolphin=document.getElementById('dol')
    dolphin.addEventListener('click',()=>{
        body.classList.toggle("dolphin")
        header.classList.toggle("dolphin2")
        console.log(body)
        console.log(header)
    })

    const zelda=document.getElementById('tri')
    zelda.addEventListener('click',()=>{
        body.classList.toggle("zelda")
        header.classList.toggle("zelda2")
        console.log(body)
        console.log(header)
    })

    const sol=document.getElementById('sol')
    sol.addEventListener('click',()=>{
        body.classList.toggle("sol")
        header.classList.toggle("sol2")
        console.log(body)
        console.log(header)
    })
})

