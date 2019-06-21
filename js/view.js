const view = {}
view.showComponents = function(name) {
    switch(name) {
        case 'register': {
            document.getElementById('app').innerHTML = components.register
            break
        }

    }
};


//cach 2
// if(name == 'register') {
//     document.getElementById('app').innerHTML = components.register
// }

//show components to screen
//showComponent("register")