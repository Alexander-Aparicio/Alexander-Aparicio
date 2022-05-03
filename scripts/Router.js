import alex from "./alex.js"
import home from "./home.js"
import victor from "./victor.js"

const Rooter = ()=>{

    let { pathname } = location
    console.log(location)

    const Handler = ()=>{

        switch (pathname) {

            case '/': 
                home()
            break;

            case '/index.html': 
                home()
            break;

            case `/alex.html`: 
                alex()
                break;
        
            default: 
                
                break;
                
        }
    }
    Handler()
}

export default Rooter