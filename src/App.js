/* eslint-disable react/jsx-no-target-blank */
import { useRef } from 'react';
import './App.css';
import * as Unicons from '@iconscout/react-unicons'
// import CV from "./images/JohnWesleyResume.pdf";

function App() {
  const openMenu = useRef(null);
  const closeMenu = useRef(null);
  const menu = useRef(null);

  function handleOpenMenu() {
    menu.current.style.display = "block";
    closeMenu.current.style.display = "inline-block";
    openMenu.current.style.display = "none";
  }

  function handleCloseMenu() {
    menu.current.style.display = "none";
    openMenu.current.style.display = "inline-block";
    closeMenu.current.style.display = "none";
  }

  // async function CopyMail() {
  //   try {
  //     await navigator.clipboard.writeText("johnwesley14321@gmail.com");
  //     alert("Copied to clipboard!");
  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  return (
    <div className="App">

      <nav>
        <div className="container nav_container">
          <a href="index.html" className="nav_logo">
            <img src={require('./assets/logo.jpg')} alt="" width="55" height="55" ></img>
          </a>
          <ul ref={menu} className="nav_menu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#testimonials">TESTIMONIAL</a></li>
            {/* <li><a href="#services">SERVICES</a></li> */}
            <li><a href="#contact">CONTACT</a></li>
            <li>
              <a href=' ' className="btn btn_primary"><Unicons.UilSignin size="20" /> Login</a>
            </li>
          </ul>
          <button ref={openMenu} onClick={() => { handleOpenMenu() }} id="open-menu-btn">
            <Unicons.UilBars />
          </button>
          <button ref={closeMenu} onClick={() => { handleCloseMenu() }} id="close-menu-btn">
            <Unicons.UilMultiply />
          </button>
        </div>
      </nav>

      {/* <!-- ===========End of Navbar=========== --> */}

      <header id="home">
        <div className="container header_container">
          <div className="header_left">
            <div>
              <h3>Hello There! Welcome to</h3>
              <h1>Anand <br></br> Trading</h1>
              <p className="lead">Want to participate in stock markets but no time to manage your investment portfolio or  not sure where to invest?</p>
              {/* <p className="lead">We are professional trading consultant. We're passionate about connecting the dots between the
                fundamental and technical analysis, and to help you prosper in your financial sphere.</p> */}
              <a href="#contact" className="btn btn_primary btn-lg">HELP ME INVEST <Unicons.UilArrowGrowth size="30" /></a>
            </div>
          </div>

          <div className="header_right">
            <div className="header_image">
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ===========End of Header=========== --> */}

      <section id="testimonials">
        <div className="container testimonial_container">
          <div className="testimonial_cards">
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/1.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/2.webp')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/3.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/4.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/5.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/6.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            {/* copy for carousel smooth transittion */}
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/1.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/2.webp')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/3.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/4.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/5.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
            <div className="testimonial_card">
              <div className="testimony_img">
                <img src={require('./assets/6.jpg')} alt="" />
              </div>
              <div className="testimony_content">
                <h3>John Wesley</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===========End of Testimonial=========== --> */}

      <section id="services">
        <div className="container service_container">

        </div>
      </section>

      {/* <!-- ===========End of Services=========== --> */}

      <section id="contact">
        <div className="container contact_container">
          <div className="contact_left">
            <h2>Let's Talk</h2>
            <p >We are professional trading consultant. We're passionate about connecting the dots between the
                fundamental and technical analysis, and to help you prosper in your financial sphere.
            </p>
            <br />
            <br />
            <br />
            <img src={require('./assets/logo.jpg')} alt="" />
          </div>
          <form action="https://formspree.io/f/mvojjbok" method="POST">
            <input type="text" name="name" placeholder="Your Name" id="" required></input><br></br>
            <input type="email" name="email" placeholder="Email" id="" required></input><br></br>
            <textarea type="text" name="message" rows="6" cols="" placeholder="Message" id="" ></textarea><br></br>
            <button type="submit" className="btn" value="">Send <Unicons.UilAngleRightB size="20" /></button>
          </form>
        </div>
      </section>

      {/* <!-- ===========End of Contact=========== --> */}

      <footer>
        <small>Copyright &copy; Anand Trading</small>
      </footer>

      {/* <!-- ===========End of Footer=========== --> */}

    </div>
  )
}

export default App;
