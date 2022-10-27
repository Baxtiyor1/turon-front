import Image from "next/image"
import Link from "next/link"
// import useLang from '../../Hooks/useLang';
// import language from '../../Assets/content';

// import images
import Logo from "../../Assets/images/main_logo.svg"



function Header() {
  return (
    <>
     <div className="header__box">
            <Link className="" href={'/'}>
              {/* <a > */}
              <Image src={Logo} alt="logo" width="237" height="87"/>
              {/* </a> */}
              </Link>
            <div className="header__burger--box">
                <button className="header__burger">
                    <span className="header__line"></span>
                    <span className="header__line"></span> 
                    <span className="header__line"></span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header