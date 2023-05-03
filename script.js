let menu = document.getElementById('menu')
let hiddenmenu = document.getElementById('hidden-menu')
let closeitem = document.getElementById('close-item')
let menubtn = document.getElementById('menu-btn')

closeitem.style.display='none'
hiddenmenu.style.display='none'

menubtn.addEventListener('click',function(){
    menubtn.style.display='none'
    closeitem.style.display='block'
hiddenmenu.style.display='block'

})

closeitem.addEventListener('click',function(){
    menubtn.style.display='block'
    closeitem.style.display='none'
hiddenmenu.style.display='none'
})
