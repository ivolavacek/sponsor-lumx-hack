import { useRef, useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from 'axios'
import './RegisterPage.css'
import ModeContext from '../switchButton/ModeContext'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;


const Register = () => {
    const { language, toggleLanguage } = useContext(ModeContext);

    const emailRef = useRef();
    const errRef = useRef();

    const [lumxId, setLumxId] = useState('');

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if user tries to submit enabling the button
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid. Try Again.");
            return;
        }
        // Back-end
        try {
            const verify = await axios.post('http://localhost:3000/alreadyregistered',
                JSON.stringify({ email }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })

            if (verify == false) {
                setErrMsg('Already Registered');
            } else {
                const response = await axios.post('http://localhost:3000/register',
                    JSON.stringify({ email, pwd }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    })
                    
                setLumxId(response.data);


                setSuccess(true);
                //clear state and controlled inputs
                //need value attrib on inputs for this
                setEmail('');
                setPwd('');
                setMatchPwd('');
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    const text = language === 'en' ? {
        h1: 'Account created!',
        h2: 'Welcome to MediaChain',
        yourId: 'Your id:',
        title: 'Register',
        email: 'Email',
        password: 'Password',
        confirm: 'Confirm Password',
        button: 'Register',
        already: 'Already registred?',
        error1: "Make sure it's a valid email.",
        error2: 'Passwords must match.',
        instruction1: '8 to 24 characters.',
        instruction2: 'Must include uppercase and lowercase letters, a number and a special character.',
        instruction3: 'Allowed special characters: ',
    } : {
        h1: 'Conta criada!',
        h2: 'Bem-vindo a MediaChain',
        yourId: 'Sua id:,',
        title: 'Registro',
        email: 'Email',
        password: 'Senha',
        confirm: 'Confirme a senha',
        button: 'Registrar',
        already: 'Já registrado?',
        error1: "Certifique que o email é válido.",
        error2: 'As senhas devem corresponder.',
        instruction1: 'De 8 a 24 caracteres.',
        instruction2: 'Deve incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
        instruction3: 'Caracteres especiais permitidos: ',
    }

    return(
        <>
        <div className="registro">
            {success ? (
                <section>
                    <h1>{text.h1}</h1>
                    <h2>{text.h2}</h2>
                    <p>{text.yourId} {lumxId}</p>
                    <div className="button-register-container">
                        <Link to="/login"><button className="button-login-register">Login</button></Link>
                    </div>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="title-register">{text.title}</div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            {text.email}:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            {text.error1}<br />
                        </p>

                        <label htmlFor="password">
                            {text.password}:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            {text.instruction1}<br />
                            {text.instruction2}<br />
                            {text.instruction3}<span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            {text.confirm}:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            {text.error2}
                        </p>

                        <button disabled={!validEmail || !validPwd || !validMatch ? true : false}>{text.button}</button>
                    </form>
                    <p>
                        {text.already}<br />
                        <span className="line">
                            <a className="login" href="/login">Login</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
        </>
    )
}

export default Register;