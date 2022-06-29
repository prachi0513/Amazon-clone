

import '../styles/buss.css'

export default function BussinessCard(){
    return(
      <>
       <div className="bussiness">
           <div className="buss-main">  
             <img src="/images/pro.png" className="buss-img"/>
             <h2 className="buss-name">Laura Smith</h2>
             <p className="buss-dev">Front-end Developer</p>
             <p className="buss-mail">laurasmith.website</p>
             <button className="buss-e-btn">Email</button>
             <h2 className="buss-about">About</h2>
             <p className="buss-about-p">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
              <h2 className="buss-int">Interests</h2>
             <p className="buss-int-p">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic</p>
             <footer className="buss-footer"></footer>
           </div>
       </div>
      
       
      
      
      </>
    )
};