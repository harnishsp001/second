import './new2.css'
import img1 from '../assets/star.png.jpeg'
import img2 from '../assets/h11.svg.svg'
import img3 from '../assets/icons8.svg.png'

function Pro1() {
    return (
        <>
            <div className='main'>
                <div className='top'>
                    <div className='t1'>
                        <img src={img1} alt="star" />
                    </div>

                    <div className='t1'>
                        <h1>Welcome Back</h1>
                    </div>

                    <div className='t1'>
                        Login to your account to book videos
                    </div>
                </div>

                <div className='middle'>
                    <div className='m1'>Email</div>

                    <div className='m2'>
                        <div className='m22'>
                            <div className='email'>
                                <img src={img2} alt="email" />
                            </div>

                            <div className='user'>
                                <input type="text" placeholder='user@example.com' />
                            </div>
                        </div>
                    </div>

                    <div className='m3'>Demo: user@example.com</div>

                    <div className='m4'>Password</div>

                    <div className='m5'>
                        <div className='m51'>
                            <img src={img3}  />
                        </div>

                        <div className='m52'>
                            <input type="password" placeholder='password' />
                        </div>
                    </div>

                    <div className='m6'>Demo: password</div>
                </div>

                <div className='bottom'>
                    <div className='b1'>
                        <button>Login</button>
                    </div>

                    <div className='b2'>
                        Don't have an account? <span style={{color:"blue",marginLeft:"5px"}}>Sign up</span>
                    </div>

                    <div className='b3'>
                        <div className='b31'>Celebrity Login</div>
                        <div className='b32'>Admin Login</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pro1
