import './new6.css'
import img1 from '../assets/lock-svgrepo-com.svg'

function Pro5() {
  return (
    <>
 
    <div className="admin-page">
      <div className="admin-card">

        <div className="admin-logo">🛡</div>

        <h1 className="admin-title">Admin Portal</h1>
        <p className="admin-subtitle">
          Secure access to administration panel
        </p>

        <div className="form-group">
          <label>Email</label>
          <div className="input-box">
            <span className="icon">✉</span>
            <input type="email" placeholder="admin@example.com" />
          </div>
          <small>Demo: admin@example.com</small>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-box">
            <span className="icon2"><img src={img1}/></span>
            <input type="password" placeholder="••••••••" />
          </div>
          <small>Demo: password</small>
        </div>

        <button className="admin-btn">
          Access Admin Panel
        </button>

        <div className="bottom-links">
          <span>User Login</span>
          <span className="dot">•</span>
          <span>Celebrity Login</span>
        </div>

      </div>
    </div>

    </>
     )
}
export default Pro5