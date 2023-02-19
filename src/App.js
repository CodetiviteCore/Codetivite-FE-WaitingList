import './App.scss';
import { Input } from './components/input/input';
import { Navbar } from './components/navbar/navbar';
import user from "./assets/user.svg"
import emailIcon from "./assets/mail.svg"
import LandingImage from "./assets/img/landingImage.png"
import Instagram from "./assets/instagram.svg"
import Twitter from "./assets/twitter.svg"
import LinkedIn from "./assets/linkedin.svg"
import { Button } from './components/button/button';
import { useState } from 'react';
import { Modal } from './components/modal/modal';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { Puff } from 'react-loader-spinner'


function App() {
  const [input, setInput] = useState({
    fullName: "",
    email: ""
  })
  const [enabled, setEnabled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [finish, setFinish] = useState(false)
  const [error, setError] = useState({
    Errorfullname: "",
    ErrorEmail: ""
  })


  const { fullName, email } = input
  const { ErrorEmail } = error

  const validateInput = (email) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
  }

  const handleShowModal = () => {
    setShowModal(true)
  }


  const handleInput = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })

    if (fullName && email) {
      setEnabled(true)
    }
    else if (fullName === "" || email === "") {
      setEnabled(false)
    }
  }

  const handleBlur = () => {
    setFinish(true)
    if (fullName && email) {
      setEnabled(true)
    }
    else if (fullName === "" || email === "") {
      setEnabled(false)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    setError({ ...error, ErrorEmail: " " })

    // if ((email && validateInput(email))) {
    //   setLoading(true)
    //   axios.post("https://codetivite-api.onrender.com/v1.0/api/mailList", {
    //     email: email,
    //     firstName: fullName
    //   })
    //     .then((response) => {
    //       setLoading(false)
    //     })
    //     .catch((e) =>
    //       toast.success(`Something went wrong ${e}`, {
    //         position: "top-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       }
    //       ))
    //     .finally(() => {
    //       setInput({
    //         fullName: "",
    //         email: ""
    //       })
    //       setEnabled(false)
    //       handleShowModal()
    //     })
    // }
    // else {
    //   setError({ ...error, ErrorEmail: "Invalid email format" })
    // }
    handleShowModal()
  }

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} link={"codetivite.com"} />
      <div className='parent_container'>
        <Navbar />
        <div className={"yellow"} />
        {/* <div className={"blue"} /> */}
        <main>
          <div>
            <div className='cooking'>
              <p>We're cooking 🔥</p>
            </div>
            <h2>Join our waiting list!</h2>
            <p>
              Join the exciting journey of career advancement and professional growth.
              Get access to real-life projects, collaborate with like-minded peers,
              and connect with opportunities - Sign up for the Codetivite
              community waitlist today!
            </p>
            <form onSubmit={submit}>
              <div className='inputs'>
                <Input
                  placeholder={"Firstname"}
                  icon={user}
                  onChange={handleInput}
                  onBlur={handleBlur}
                  name={"fullName"}
                  value={fullName}
                  finish={finish}
                  type="text"
                />

                <Input
                  placeholder={"Email address"}
                  icon={emailIcon}
                  name={"email"}
                  value={email}
                  onChange={handleInput}
                  onBlur={handleBlur}
                  finish={finish}
                  type="email"
                />
                <p style={{ color: "red" }}>{ErrorEmail}</p>
                <Button
                  buttonEnabled={enabled}
                  buttonType={"large"}
                  type="submit"
                  // disabled={!enabled}
                // onClick={submit}
                >{loading
                  ?
                  <Puff
                    height="40"
                    width="40"
                    radius={1}
                    color="var(--greenlight)"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                  : "Notify me on launch"}</Button>
              </div>
            </form>
          </div>
          <div className='image_container'>
            <img src={LandingImage} alt={"landing"} className="landingImage" />
          </div>
        </main>
        <footer>
          <p> © 2023 Codevite All rights reserved.</p>
          <div className='footer_socials'>
            <a href='https://www.instagram.com/codetivite/' rel="noreferrer"><div><img src={Instagram} alt={"instagram"} /></div></a>
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
        <ToastContainer />
      </div>
    </>


  );
}

export default App;
