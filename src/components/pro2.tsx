import './new3.css'
import img1 from '../assets/star.png.jpeg'
import img2 from '../assets/user.png.svg'
import img3 from '../assets/call.png.svg'
import img4 from '../assets/ll1.png'
import img5 from '../assets/m1.png'

function Pro2() {
  return (
    <div className="wrapper">
      <div className="main">

        <div className="logo">
          <img src={img1} alt="star" />
        </div>

        <h2>Create Account</h2>

        <p className="title">
          Join us to book personalized videos from your favorite celebrities
        </p>

        <form>

          <div className="form-a">
            <label>Full Name</label>
            <div className="input-a">
              <span className="icon">
                <img src={img2} alt="user" />
              </span>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

          <div className="form-a">
            <label>Email</label>
            <div className="input-a">
              <span className="icon">
                <img src={img5} alt="email" />
              </span>
              <input type="email" placeholder="user@example.com" />
            </div>
          </div>

          <div className="form-a">
            <label>Phone Number</label>
            <div className="input-a">
              <span className="icon">
                <img src={img3} alt="phone" />
              </span>
              <input type="text" placeholder="+91 9876543210" />
            </div>
          </div>

          <div className="form-a">
            <label>Password</label>
            <div className="input-a">
              <span className="icon">
                <img src={img4} alt="password" />
              </span>
              <input type="password" placeholder="**********" />
            </div>
          </div>

          <div className="form-a">
            <label>Confirm Password</label>
            <div className="input-a">
              <span className="icon">
                <img src={img4} alt="password" />
              </span>
              <input type="password" placeholder="**********" />
            </div>
          </div>

          <button type="submit">Create Account</button>

        </form>

        <div className="footer-a">
          Already have an account? <a href="#">Login</a>
        </div>

        <div className="bottom-li">
          Celebrity Registration • Admin Login
        </div>

      </div>
    </div>
  )
}

export default Pro2