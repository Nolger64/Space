import style from "./Navbar.module.css"; // import styles
import { useScreen } from "../../hooks/useScreen"; // import hook for screen size
import logo from "../../assets/shared/logo.svg"; // import logo
import menuOpen from "../../assets/shared/icon-hamburger.svg"; // import menu icon
import menuClose from "../../assets/shared/icon-close.svg"; // import close menu icon
import Modal from "react-modal"; // import modal
import { useState } from "react"; // import useState
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
  const screen = useScreen().width; // get screen size
  const [modalIsOpen, setModalIsOpen] = useState(false); // set modal state
  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  }; // open modal
  const location = useLocation(); // get location
  const { pathname } = location; // get pathname
  console.log(pathname)
  Modal.setAppElement("#root"); // set modal element

  return (
    <div className={style.Container}>
      <div className={style.NavbarContainer}>
        <div className={style.NavbarRightContainer}>
          <div className={style.NavbarLogo}>
            <img src={logo} className={style.Logo} />
          </div>
        </div>
        <hr className={style.NavbarHr} />

        {screen < 680 ? (
          <>
            {modalIsOpen ? (
              <div>
                {
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={openModal}
                    className={style.NavbarModal}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      },
                    }}
                  >
                    <div className={style.ModalContainer}>
                      <div className={style.ModalContent}>
                        <div className={style.ModalClose}>
                          <img
                            className={style.menuClose}
                            src={menuClose}
                            onClick={openModal}
                          />
                        </div>
                        <Link
                          className={style.ModalContentElement}
                          to={"/"}
                          onClick={openModal}
                        >
                          <p className={style.ModalContentElementId}>00</p> home
                        </Link>
                        <Link
                          className={style.ModalContentElement}
                          to={"/destination"}
                          onClick={openModal}
                        >
                          <p className={style.ModalContentElementId}>01</p>{" "}
                          destination
                        </Link>
                        <Link
                          className={style.ModalContentElement}
                          to={"/crew"}
                          onClick={openModal}
                        >
                          <p className={style.ModalContentElementId}>02</p> crew
                        </Link>
                        <Link
                          className={style.ModalContentElement}
                          to={"/technology"}
                          onClick={openModal}
                        >
                          <p className={style.ModalContentElementId}>03</p>{" "}
                          Technology
                        </Link>
                      </div>
                    </div>
                  </Modal>
                }
              </div>
            ) : (
              <div className={style.NavbarLeftOpenMenu}>
                <img src={menuOpen} onClick={openModal} />
              </div>
            )}
          </>
        ) : (
          <div className={style.NavbarLeftContainer}>
            <Link className={pathname == "/" ? style.NavbarLeftElementSelect : style.NavbarLeftElement} to={"/"}>
              <p className={style.NavbarLeftElementId}>00</p> home
            </Link>
            <Link className={pathname == "/destination" ? style.NavbarLeftElementSelect : style.NavbarLeftElement} to={"/destination"}>
              <p className={style.NavbarLeftElementId}>01</p> destination
            </Link>
            <Link className={pathname == "/crew" ? style.NavbarLeftElementSelect : style.NavbarLeftElement} to={"/crew"}>
              <p className={style.NavbarLeftElementId}>02</p> crew
            </Link>
            <Link className={pathname == "/technology" ? style.NavbarLeftElementSelect : style.NavbarLeftElement} to={"/technology"}>
              <p className={style.NavbarLeftElementId}>03</p> technology
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
const renderModal = (modalIsOpen, openModal) => {
  console.log(modalIsOpen);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={openModal}
      className={style.NavbarModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className={style.ModalContainer}>
        <button onClick={openModal}>Close or open</button>
        <div className={style.ModalClose}>
          <img
            className={style.menuClose}
            src={menuClose}
            onClick={openModal}
          />
        </div>
        <div className={style.ModalContent}>
          <Link className={style.ModalContentElement} to={"/"}>
            <p className={style.ModalContentElementId}>00</p> home
          </Link>
          <Link className={style.ModalContentElement} to={"/destination"}>
            <p className={style.ModalContentElementId}>01</p> destination
          </Link>
          <Link className={style.ModalContentElement} to={"/crew"}>
            <p className={style.ModalContentElementId}>02</p> crew
          </Link>
          <Link className={style.ModalContentElement} to={"/technology"}>
            <p className={style.ModalContentElementId}>03</p> Technology
          </Link>
        </div>
      </div>
    </Modal>
  );
};
