import './LoginModal.css'

export const LoginModal = ({ closeModal }) => {
  return (
    <div className="modal__container"> 
        <span className="modal__closer" onClick={() => closeModal(false)}>X</span>
        <div className="modal__login">
            <div className="modal__login-header">
                <p>Login on your Rule of Thumb account</p>
            </div>
            <div className="modal__login-form">
              <form>
                <input className="modal__login-form-email" placeholder="Email" type="text"/>
                <input className="modal__login-form-password" placeholder="Password" type="text"/>
                <button className="modal__login-form-submit" type="submit">Login</button>
              </form>
            </div>
        </div>

        <span> OR </span>

        <div className="modal__register">
            <div className="modal__register-header">
                <p>Don't have an account yet? Sign in!</p>
            </div>
            <div className="modal__register-form">
                <form>
                  <input className="modal__register-form-name" placeholder="Name" type="text"/>
                  <input className="modal__register-form-email" placeholder="Email" type="text"/>
                  <input className="modal__register-form-password" placeholder="Password" type="text"/>
                  <button className="modal__register-form-submit" type="submit">Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}