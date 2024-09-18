import React from 'react'
import { Link} from 'react-router-dom'
// import img from './images/Search.png'
import aimg from './Images/function.jpg'
// import bimg from './Images/bellicon.png'
import userimg from './Images/profiled.jpg'
// import searchimg from './Images/search.png'
import timg from './Images/secure.jpg'
import iimg from './Images/id.jpg'
import simg from './Images/scan.jpg'
import qimg from './Images/quick.jpg'
import uimg from './Images/update.jpg'
import suimg from './Images/sub.jpg'

function Home() {
  return (
    <div className='homed'>
        <div className="input">
            <input type="text"   />
           {/* <div className="search">
           <img src={searchimg} alt="" />
           </div> */}
        <div className="loin">
            {/* <img src={bimg} alt="" /> */}
            <img src={userimg} alt="" />
        </div>
        </div>
       
        <div className="coloumpage">
            <img src={aimg} alt="" />
            <h1>Functioning Optimally!</h1>
        </div>
<div className="container">
    <div className="tools">
<img src={timg} alt="" />
<h1><Link>Secure AI Tools</Link></h1>
    </div>
    <div className="idpro">
<img src={iimg} alt="" />
<h1><Link>ID Protection</Link></h1>
    </div>
    <div className="systum-scan">
<img src={simg} alt="" />
<h1><Link>System AI Scan</Link></h1>
    </div>
    <div className="quick">
<img src={qimg} alt="" />
<h1><Link>Quick Action</Link></h1>
    </div>
    <div className="update">
<img src={uimg} alt="" />
<h1><Link>Update App</Link> </h1>
    </div>
    <div className="subscribe">
        <img src={suimg} alt="" />
        <h1><Link>Subscription</Link></h1>

    </div>
</div>
    </div>
  )
}

export default Home ;