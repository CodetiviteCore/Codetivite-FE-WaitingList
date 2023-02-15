import './App.scss';
import { Input } from './components/input/input';
import { Navbar } from './components/navbar/navbar';
import user from "./assets/user.svg"
import emailIcon from "./assets/mail.svg"
import LandingImage from "./assets/img/landingImage.png"
import Instagram from "./assets/instagram.svg"
import Twitter from "./assets/twitter.svg"
import LinkedIn from "./assets/linkedin.svg"
import Yellow from "./assets/yellowLight.svg"
import Blue from "./assets/blueLight.svg"
import { Button } from './components/button/button';
import { useState } from 'react';
import { Modal } from './components/modal/modal';


function App() {
  const [input, setInput] = useState({
    fullName: "",
    email: ""
  })
  const [enabled, setEnabled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState({
    Errorfullname: "",
    ErrorEmail:""
  })

  const { fullName, email } = input
  const {Errorfullname,ErrorEmail} = error
 
  const validateInput = (email) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
  }

  const handleShowModal = () => {
    console.log("MOdal!!")
    setShowModal(true)
  }


  const handleInput = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value }) 
  
    if (fullName && email) {
      setEnabled(true)
    } else if (fullName === "" || email === "") {
      setEnabled(false)
    }
  }



  const submit = (e) => {
    e.preventDefault()
    setError({...error,ErrorEmail: " " })
    if ((email && validateInput(email))) {
      //run upload
    }
    else {
      setError({ ...error, ErrorEmail: "Invalid email format" })
    }
  }

  return (
    <div className='main_container'>
      <Navbar/>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className='container'>
        <img src={Yellow} alt={"Yellow Light"} className={"yellow"} />
        <img src={Blue} alt={"Blue light"} className={"blue"} />

        <main>
          <div className='deets'>
            <div className='cooking'><p>We're cooking 🔥</p></div>
            <div className='info'>
              <h2>Join our waitlist</h2>
              <p>Join the exciting journey of career advancement and professional growth.
                Get access to real-life projects, collaborate with like-minded peers,
                and connect with opportunities - Sign up for the Codetivite
                community waitlist today!</p>
              <form onSubmit={submit}>
                <div className='inputs'>
                  <Input
                    placeholder={"Firstname"}
                    icon={user}
                    onChange={handleInput}
                    name={"fullName"}
                    value={fullName}
                    type="text"
                  />
                 
                  <Input
                    placeholder={"Email address"}
                    icon={emailIcon}
                    name={"email"}
                    value={email}
                    onChange={handleInput}
                    // type="email"
                  />
                   <p style={{color:"red"}}>{ErrorEmail }</p>
                  <Button
                    buttonEnabled={enabled}
                    buttonType={"large"}
                    type="submit"
                    disabled={!(fullName && email)}
                    // onClick={handleShowModal}
                  >Notify me on launch</Button>
                </div>
              </form>

            </div>
          </div>
          <div>
            <img src={LandingImage} alt={"landing"} className="landingImage" />
          </div>
        </main>
        <footer className='footer'>
          <p> © 2023 Codevite All rights reserved.</p>
          <div className='footer_socials'>
            <a href=''  rel="noreferrer"><div><img src={Instagram} alt={"instagram"}/></div></a>
            <a href='https://twitter.com/codetivite' target={"_blank"} rel="noreferrer">
              <div>
                <img src={Twitter} alt={"Twitter"} />
              </div>
            </a>
            <a href='https://www.linkedin.com/company/codetivite/' target={"_blank"} rel="noreferrer">
              <div>
                <img src={LinkedIn} alt={"linkedIn"} />
              </div>
            </a>
          </div>
        </footer>


      </div>

    </div>

  );
}

export default App;
