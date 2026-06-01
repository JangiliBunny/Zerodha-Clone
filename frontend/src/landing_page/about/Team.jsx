import React from 'react';

function Team() {
    return ( 
        <div className="container">
            <div className="row border-top ">
                 <h2 className='p-3 mb-4 text-center mt-5'  style={{opacity:"0.9"}}>People</h2>
                <div className="col-6 text-center pt-2 ">
                     <img src="media/images/nithinKamath.jpg" alt="TEAM" style={{borderRadius:"50%", width:"50%"}} />
                     <h4 className='pt-4'>Nithin Kamath</h4>
                     <p className='text-muted pt-2'>Founder, CEO</p>
                </div>
                <div className="col-6 pt-1" style={{opacity:"0.9"}}>
                    
                     <p className='pt-2 fs-6'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> hurdles he faced during his decade long stint as a trader. Today, <br /> Zerodha has changed the landscape of the Indian broking industry.</p>
                     <p className='pt-1 fs-6'>He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                     <p className='pt-1 fs-6'>Playing basketball is his zen</p>
                     <p className='pt-1 fs-6'>Connect on <a href=""> Homepage </a>/ <a href="">TradingQnA</a> /  <a href="">Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;