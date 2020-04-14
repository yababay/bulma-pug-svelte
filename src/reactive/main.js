//import {Header, Auth, EditStatistics, EditControls, EditProcessor, EditedLines, Dashboard} from './svelte_modules/'
//import {callback} from './svelte_modules/oidc.js'

/*
(function(id){
    const div = document.getElementById(id)
    div.classList.toggle('is-hidden')
    switch(id){
        case 'callback':
            return callback()
        case 'dashboard':
            return new Dashboard({target: document.querySelector('#dashboard')})
        case 'intro':
            new Header({target: document.querySelector('header')})
            let invite = location.search
            if(!invite || !/^\?[a-zA-Z0-9_\-]{7,14}$/.test(invite)) return
            return sessionStorage.setItem('invite', invite.substring(1))
        case 'auth':
            return new Auth({target: document.querySelector('#auth')})
        case 'edit':
            if(!sessionStorage.getItem('invite')) return location = '/auth'
            new EditProcessor({target: document.querySelector('#edit .processor')})
            new EditControls ({target: document.querySelector('#edit .controls')})
            new EditedLines ({target: document.querySelector('#edit .completed')})
            return new EditStatistics({target: document.querySelector('#edit .statistics')})
    }
})(location.pathname.substring(1) || 'intro')
*/
