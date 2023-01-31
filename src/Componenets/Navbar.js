import React, { useState } from 'react'
import './Nav.css';
import { BiBell, BiSearch, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SignIn_Modal from './SignIn_Modal';
import Categories from './Categories';
import { getAuth, signOut } from 'firebase/auth';







function Navbar() {

    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);
        

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Link variant="primary" className='nav-link active me-4' onClick={handleShow} >
                    CATEGORIES
                </Link>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }


    const auth = getAuth();
    const logout =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // alert("Sign-out successful.")
            setIsLogout(false)
          }).catch((error) => {
            alert(error)
            // An error happened.
          });
    }


    const [Search, setSearch] = useState(false);
    const handleSearchModel = () => {
        setSearch(!Search)
    };
    const [modalShow, setModalShow] = React.useState(false);
    const [islogout, setIsLogout] = useState(false)

    return (
        <div>

            <nav id='NewsNav' className="navbar navbar-expand-lg bg-link">
                <div className="container-fluid">
                    <Link className="navbar-brand" id='NewsLogo' to="/"><h2>News</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/about_us">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link active me-4" aria-current="page" to="/Categories">CATEGORIES</Link> */}
                                    {['end'].map((placement, idx) => (
                                        <Categories key={idx} placement={placement} name={placement} />
                                    ))}

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/">BREAKING NEWS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active me-4" aria-current="page" to="/Contact_us">CONTACT US</Link>
                                </li>
                                <li>
                                    {/* <Link id='btnSignIn'  className='btn me-3' type="button" to="/Login"><BiUserCircle size={23} id='btnLogo'/>Sign In</Link> */}
                                    {!islogout ?
                                        <Button variant="danger" onClick={() => setModalShow(true)} id='btnSignIn' className='me-3' type="button" ><BiUserCircle size={23} id='btnLogo' />Sign In</Button>
                                        :
                                        <Button variant="danger" onClick={logout} id='btnSignIn' className='me-3' type="button" ><BiUserCircle size={23} id='btnLogo' />Log out</Button>
                                    }
                                </li>
                                <li>
                                    <Link to="/notification" id='btnNotification' type="button" className="btn me-3"><BiBell size={23} /></Link>
                                </li>
                                <li>
                                    <button id='btnSerch' type="button" onClick={handleSearchModel} className="btn"><BiSearch size={23} /></button>
                                </li>
                            </ul>
                        </div>

                        {Search ?
                            (<form id='serchModal' className="d-flex" role="search">
                                <input id='inputSerchForm' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button id='btnSerchForm' className="btn" type="submit">Search</button>
                            </form>)
                            : null
                        }





                    </div>
                </div>



            </nav>
            <SignIn_Modal setIsLogout={setIsLogout} show={modalShow} setLoginModalShow={setModalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Navbar
