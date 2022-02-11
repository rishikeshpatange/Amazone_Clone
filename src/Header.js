import React,{useState} from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {

    const [{ basket, user }, disbatch] = useStatevalue();

    const [showMediaIcons, setShowMediaIcons] = useState(false);


    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header' >

    

                <Link to='/'>
                    <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                </Link>
                <div className="header__search" >
                    <input className='header_searchIn' type="text" />
                    <SearchIcon className='header_searchIcon' />
                </div>
             
            <div className={ showMediaIcons ? "header__nav header__navPhone" : "header__nav"}>
                    <Link to={!user && '/login'} >
                        <div onClick={handleAuthentication} className="header__option" >
                            <span className='header__optionOne' >Hello {!user ? 'guest' : user.email}</span>
                            <span className='header__optiontwo' >
                                {user ? 'Sign out' : 'Sign in'}</span>
                        </div>
                    </Link>
                    <div className="header__option">
                        <span className='header__optionOne' >Returns</span>
                        <span className='header__optiontwo' >& Orders</span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionOne' >Your</span>
                        <span className='header__optiontwo' >Prime</span>
                    </div>
                  
                </div>
                <Link to='/Checkout' >
                        <div className="header_optionBasket">
                            <ShoppingBasketIcon />

                            <span className='header__optiontwo header-basketCount' >
                                {basket?.length}
                            </span>
                        </div>
                    </Link>


            <div className="hambuger-menu">
                <a href="#/" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu fontSize={'28px'} fontWeight={"bold"} color='white' /></a>
            </div>

        </div>
    )
}

export default Header
