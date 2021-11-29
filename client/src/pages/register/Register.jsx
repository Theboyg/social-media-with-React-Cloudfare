import './register.css';
export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h4 className="registerLogo"> G's Social </h4>
          <span className="registerDesc"> To make friend everywhere </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder=" Name" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Password Again " className="registerInput" />
            <button className="registerButton"> Sign Up  </button> 
            <button className="registerRegistration"> Log into your Account  </button>
          
          </div>
        </div>
      </div>
    </div>
  )
}

