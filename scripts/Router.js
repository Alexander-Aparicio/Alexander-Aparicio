import alex from "./alex.js"
import home from "./home.js"

const Rooter = ()=>{

    let { pathname } = location
    console.log(location)

    const Handler = async()=>{

        switch (pathname) {

            case '/': 
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