import './new5.css'
import img1 from '../assets/lock-svgrepo-com.svg'

function Pro4() {
  return (
    <>
    <div className="page">
      <div className="card">

        <div className="logo-circle">★</div>

        <h1 className="title">Join as a Celebrity</h1>
        <p className="subtitle">
          Create your celebrity account and start earning by sharing personalized videos
        </p>

        <div className="form-grid">

          <div className="form-group">
            <label>Full Name</label>
            <div className="input-box">
              <span className="icon">👤</span>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-box">
              <span className="icon">✉</span>
              <input type="email" placeholder="celebrity@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-box">
              <span className="icon">📞</span>
              <input type="text" placeholder="+91 9876543210" />
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <div className="input-box">
              <select>
                <option>Select category</option>
                <option>Actor</option>
                <option>Singer</option>
                <option>Influencer</option>
                <option>Comedian</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Price per Video (₹)</label>
            <div className="input-box">
              <span className="icon">₹</span>
              <input type="text" placeholder="5000" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Bio</label>
            <textarea placeholder="Tell us about yourself and your work..."></textarea>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-box">
              <span className="icon"><img src={img1} /></span>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-box">
              <span className="icon"><img src={img1} /></span>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

        </div>

        <button className="submit-btn">
          Create Celebrity Account
        </button>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>

        <div className="bottom-links">
          <span>User Registration</span>
          <span className="dot">•</span>
          <span>Admin Login</span>
        </div>

      </div>
    </div>
    </>
  )
}
export default Pro4