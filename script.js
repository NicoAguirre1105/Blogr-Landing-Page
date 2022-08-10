function main() {
    
    // Menu
    // Menu
    // Menu

    const MENU_ICON = document.getElementById('menu-icon'),
        CLOSE_ICON = document.getElementById('close-icon'),
        MENU = document.getElementsByTagName('nav')[0]

    MENU_ICON.addEventListener('click', () => {
        MENU_ICON.style.display = 'none'
        CLOSE_ICON.style.display = 'flex' 
        MENU.style.display = 'flex'
    })

    CLOSE_ICON.addEventListener('click', () => {
        MENU_ICON.style.display = 'flex'
        CLOSE_ICON.style.display = 'none' 
        MENU.style.display = 'none'
        if (submenu_selected) {
            hideSubmenu(submenu_selected, id_selected)
        }
    })

    // Submenus
    // Submenus

    function hideSubmenu(submenu, id_clicked) {
        submenu.style.display = 'none'
        document.getElementById(id_clicked).getElementsByTagName('img')[0].classList.remove('selected')
    }

    const SUBMENUS = MENU.getElementsByTagName('ul')
    let submenu_selected,
        id_selected

    MENU.addEventListener('click', (e) => {
        const CLICKED = e.target.closest('h3')

        if (!CLICKED) return
        
        const CLICKED_ID = CLICKED.getAttribute('id')
        if (submenu_selected) {
            hideSubmenu(submenu_selected, id_selected)
        }
        if (id_selected == CLICKED_ID) {
            submenu_selected = ''
            id_selected = ''
            return
        }
        
        switch (CLICKED_ID) {
            case 'product':
                SUBMENUS[0].style.display = 'flex'
                CLICKED.getElementsByTagName('img')[0].classList.add('selected')
                submenu_selected = SUBMENUS[0]
                break;
                
            case 'company':
                SUBMENUS[1].style.display = 'flex'
                CLICKED.getElementsByTagName('img')[0].classList.add('selected')
                submenu_selected = SUBMENUS[1]
                break;
                
            default:
                SUBMENUS[2].style.display = 'flex'
                CLICKED.getElementsByTagName('img')[0].classList.add('selected')
                submenu_selected = SUBMENUS[2]
                break;
        }
        
        id_selected = CLICKED_ID
    })
}

main()