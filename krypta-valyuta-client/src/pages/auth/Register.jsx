import React, {useEffect, useState} from "react";
import '../../assets/auth.scss'
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {useLocation, useNavigate} from 'react-router-dom'
import {RegisterHandler} from "../../serverConnect/service/AuthService";
import {isAuthenticated} from "../../handlers/auth";
import '../../assets/authstyle'

export const Register = () => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const navigate = useNavigate()
    const referralCode = useLocation().search.substr(14)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const [gander, setGander] = useState('FEMALE')
    const [agree, setAgree] = useState(false)

    console.log(referralCode)
    const [username, setUserName] = useState('phone')
    const [seeCode, setSeeCode] = useState(false)

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: {value}}) => {
        setFocusAfterClose(JSON.parse(value));
    };
    const iAgree = () => {
        setAgree(!agree)
    }

    useEffect(() => {
        const redirectAdminPanel = () => {
            const token = localStorage.getItem('token');
            const isAuth = isAuthenticated(token)
            if (isAuth) return navigate('/auth/user')
        }
        redirectAdminPanel()
    }, [])
    const registerHandler = async () => {
        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            prePassword,
            gander,
            referralCode,
            agree
        }
        await RegisterHandler(data)
    }

    return (
        <div>
            <section className="container forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Ro'yxatdan o'tish</header>
                        <form>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type={"button"} onClick={() => setUserName("phone")}
                                        className={username === "phone" ? "btn btn-primary" : "btn"}>number
                                </button>
                                <button type={"button"} className={username === "email" ? "btn btn-primary" : "btn"}
                                        onClick={() => setUserName("email")}>email
                                </button>
                            </div>
                            {username === "phone" ? (
                                <div className="field input-field">
                                    <input type="number" placeholder="Phone" className="input"/>
                                </div>
                            ) : (
                                <div className="field input-field">
                                    <input type="email" placeholder="Email" className="input"/>
                                </div>
                            )}
                            <div className="field input-field">
                                <input type="text" placeholder="referral kod" value={referralCode} className="input"/>
                            </div>
                            <div className="field input-field">
                                <input type={seeCode ? "text" : "password"} placeholder="Password"
                                       className="password"/>
                                <i className={seeCode ? "bi bi-eye eye-icon" : 'bi bi-eye-slash eye-icon'}
                                   onClick={() => setSeeCode(!seeCode)}/>
                            </div>
                            <div className="field input-field">
                                <input type="password" placeholder="pre password" className="password"/>
                            </div>
                            <div className="form-link">
                                <a href="#" className="forgot-pass">Forgot password?</a>
                            </div>
                            <div className="field button-field">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    <p>bizning hizmatimizga rozimisiz?</p>
                    <label className="form-check-label" htmlFor="agree">
                        <input className="form-check-input" style={{marginRight: '10px'}} type="checkbox" value=""
                               id="agree" onClick={() => iAgree()} defaultChecked={agree} checked={agree}/>
                        I agree with terms and conditions
                    </label>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        yopish
                    </Button>
                    <Button color={"primary"} onClick={toggle} disabled={!agree}>
                        roziman
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}