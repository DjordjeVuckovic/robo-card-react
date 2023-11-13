import "./navbar.scss"
import logo from "../../assets/logo-icon.png";
import {NavLink} from "./ui/nav-link.tsx";
import {NavButton} from "./ui/nav-button.tsx";
export const Navbar = () => {
    return (
     <nav className='navbar-wrapper'>
         <section className='padding-base inner-width navbar-container'>
             <div className={'flex-center logo-container'}>
                 <img src={logo} alt={'logo'} className={'image-logo'} loading='eager'/>
             </div>
             <div className='flex-center navbar-menu-middle'>
                 <NavLink title={'Counter'} url={'/counter'}/>
                 <NavLink title={'Posts'} url={'/posts'}/>
                 <NavButton title={'Contact'} link={'/contact'}/>
             </div>
             <div className='flex-end navbar-menu-end'>
                 <NavLink title={'Sign In'} url={'/sign-in'}/>
                 <NavLink title={'Sign Up'} url={'/sign-up'}/>
             </div>
         </section>
     </nav>
    );
}