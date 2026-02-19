import './new.css'
import img1 from '../assets/salim.jpeg'
import img2 from '../assets/su.jpeg'
import img3 from '../assets/dj aqeel.jpg'
import img4 from '../assets/rahul.jpg'
import img6 from '../assets/magnifying-glass-solid-full.svg'
function Project() {
    return (
        <div className="main">
            <div className="top">
                <div className='t1'>
                    <p className='j1'>Brand</p>
                    <p className='j1'>Enquiry</p>
                </div>
                <div className='t1'>
                    <p className='j1'>Our Brand</p>
                    <p className='j1'>Endorsements</p>
                </div>
                <div className='t1'>
                    <input type="button" value="our services " className='s3' />
                </div>
                <div className='t1'>
                    <p className='j1'>Blogs</p>
                </div>
                <div className='t1'>
                    <p className='j1'>Track</p>
                    <p className='j1'>Order</p>
                </div>
                <div className='t1'>
                  <button className='n13 '>Enter Celebrity name
                    <img src={img6} alt="" srcset="" className='ee1' />
                  </button>
                </div>
                <div className='j2'>
                    <p className='j1 e1'>Enroll</p>
                    <p className='j1 e1'>celebrity</p>
                </div>
                <div className='t1'>
                    <p className='j1'>sign</p>
                    <p className='j1'>up</p>
                </div>
                <div className='t1'>
                    <p className='j1'>/ Login</p>
                </div>
            </div>
            <div className="middel">
                <div className='ml'>
                    <p className='j1'>ALL</p>
                </div>
                <div className='mr'>
                    <p className='j1'>Home </p>
                    <div className='mm'>
                        <img src={img1} alt=""srcset="" className='img' />
                    </div>
                    <p className='j1 e1'>celebrities </p>
                </div>
            </div>
            <div className="bottom">
                <button className='b1'>
                    ALL
                </button>
                <button className='b1'>
                    Author
                </button>
                <button className='b1'>
                    Movie Star
                </button>
                <button className='b1'>
                    TV Star
                </button>
                <button className='b1'>
                    Music world
                </button>
                <button className='b1'>
                    Influencer
                </button>
                <button className='b22'>
                    More
                </button>
            </div>
            <div className="footer">
                <div className='f1'>
                    <div className='y1'>$ 1499
                    
                    </div>
                    <div className='f11'>
                        <img src={img1} alt="" srcset="" className='img1' />
                    </div>
                    <div className='f12'>

                        <p>Salim Merchant</p>
                        <p>Music World</p>
                    </div>
                </div>
                <div className='f1'>
                     <div className='y1'>$ 12900</div>
                     
                    <div className='f11'>
                        <img src={img2} alt="" srcset="" className='img1' />
                    </div>
                    <div className='f12'>
                        <p>Sulaiman</p>
                        <p>Music World</p>
                    </div>
                </div>
                <div className='f1'>
                    <div className='y1'>$ 49900</div>
                    <div className='f11'>
                        
                        <img src={img3} alt="" srcset="" className='img1' />
                    </div>
                    <div className='f12'>
                        <p>DJ aqeel</p>
                        <p>Music World</p>
                    </div>
                </div>
                <div className='f1'>
                    <div className='y1'>$ 5449</div>
                    <div className='f11'>
                        <img src={img4} alt="" srcset="" className='img1' />
                    </div>
                    <div className='f12'>
                        <p>Rahul Baweja</p>
                        <p>Music World</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Project
