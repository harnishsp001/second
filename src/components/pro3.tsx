import './new4.css'
import img1 from '../assets/st2.png'
import img2 from '../assets/e mail.png'
import img3 from '../assets/lock-svgrepo-com.svg'

function Pro3() {
    return (
        <>

    <div className="page">
      <div className="card">
        <div className="logo-circle">
          <img src={img1} />
        </div>

        <h1 className="title">Celebrity Portal</h1>
        <p className="subtitle">
          Login to manage your bookings and videos
        </p>

        <div className="form-group">
          <label>Email</label>
          <div className="input-box">
            <span className="icon"><img src={img2} /></span>
            <input
              type="email"
              placeholder="celebrity@example.com"
            />
          </div>
          <small>Demo: celebrity@example.com</small>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-box">
            <span className="icon"><img src={img3} /></span>
            <input
              type="password"
              placeholder="password"
            />
          </div>
          <small>Demo: password</small>
        </div>

        <button className="login-btn">
          Login to Dashboard
        </button>

        <p className="register-text">
          Don't have an account?{" "}
          <span className="register-link">
            Register as Celebrity
          </span>
        </p>

        <div className="bottom-links">
          <span>User Login</span>
          <span className="dot">•</span>
          <span>Admin Login</span>
        </div>
      </div>

    </div>
 
        </>
         )
}

export default Pro3















