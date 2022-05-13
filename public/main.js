//Author: tuan nguyen

const topMenu = document.getElementById('tqd-top-menu')
const toggleTopMenuIcon = document.getElementById('tqd-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to toggle top menu icon
        topMenu.classList.toggle('tqd-topmenu-expanded')
        topMenu.classList.toggle('hidden')      
    }else{
        //Click outside from toggle top menu icon
        if(topMenu.classList.contains('tqd-topmenu-expanded')) {
            topMenu.classList.remove('tqd-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
