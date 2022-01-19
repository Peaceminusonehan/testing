
import "./hero.scss"
import { useNavigate} from "react-router-dom"
import "aos/dist/aos.css";
import AOS from "aos"
const Hero =() => {
    AOS.init();
    const navigate=useNavigate()
    return(
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"   data-aos-duration="1500" className="herocontainer">
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <h3>Bags reimagimed for modern life.</h3>
                        <div>
                        <button className="btns" onClick={() => {navigate("/shop")}}  type="button"  id="shop_now"  >Shop now</button >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;