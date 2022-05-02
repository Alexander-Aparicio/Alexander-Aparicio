import alex from "./alex.js"
import documentReady from "./brian.js"
import home from "./home.js"

const Rooter = () => {

    let { pathname } = location
    console.log(location)

    const Handler = async () => {

        switch (pathname) {

            case '/':
                home()
                break;

            case `/alex.html`:
                alex()
                break;

            case `/brian.html`:
                documentReady()
                break;
            default:

                break;

        }
    }
    Handler()
}

export default Rooter