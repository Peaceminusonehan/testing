import "./footer.scss"
import AOS from "aos"
const footer =() => {
    AOS.init();
    const year =new Date().getFullYear()
    return(
        <div  data-aos="zoom-in"  data-aos-duration="1500" className="footer text-center ">
              <div>
                 {`${year}  ©  NOMAD Store`}
              </div>
        </div>
    )
}

export default footer;