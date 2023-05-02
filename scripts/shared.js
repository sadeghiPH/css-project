let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let modalCloseBtn = document.querySelector('.modal__action--negative')
let selectPlanBtn = document.querySelectorAll('.plan button')

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click',function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

modalCloseBtn.addEventListener('click',function() {
    modal.style.display = 'none'
    backdrop.style.display = 'none'
})
