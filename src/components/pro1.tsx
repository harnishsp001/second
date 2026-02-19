import './new2.css'
import img1 from '../assets/star.png'

function pro1() {


    return (
        <>
            <div className='main'>
                <div className='top'>
                    <div className='t1'><img src={img1}/></div>
                    <div className='t1'><p><h1>Welcome Back</h1></p></div>
                    <div className='t1'>Login to your account to book videos</div>
                </div>
                <div className='middle'>
                    <div className='m1'>Email</div>
                    <div className='m2'>
                        <div className='m21'></div>
                         <div className='m22'><input type="text"  placeholder='user@example.com'/></div>
                         
                    </div>
                    <div className='m3'>Demo:user@example.</div>
                    <div className='m4'>Password</div>
                    <div className='m5'>
                        <div className='m51'></div>
                         <div className='m52'><input type="text"  placeholder='****************'/></div>

                    </div>
                    <div className='m6'>Demo:password</div>
                </div>
                <div className='bottom'>
                    <div className='b1'><button>Login</button></div>
                    <div className='b2'>Don't have an account? Sign up</div>
                    <div className='b3'>
                        
                        <div className='b31'>Celebrity Yogin  .</div>
                        <div className='b32'>   Admin Login</div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default pro1