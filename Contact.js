import React from 'react'
import "./Contact.css"
import { FaBeer,FaCommentAlt,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaMapMarkerAlt,FaPhoneSquareAlt, IconName } from "react-icons/fa";


const Contact = () => {
    return(
         <div className="contact">    
           
         
        <div className="contact-box">
             
            <div className="contact-left">
               <form className="form">
                   <h1> Talk to us</h1>
                  </form>
                  <div className="container">
                     <div className="name-number">
                     <div className="name">
                  
                    <input placeholder="Enter your name"/>
                    </div>
                    
                    <div className="number">
                       <input placeholder="Enter your Number"/>

                       </div>
                       </div>


                     <div className="email">
                      <input placeholder="Email"/>
                      </div>


                    <div className="message">
                     <textarea placeholder="Message"></textarea>
                     </div>


                    <div className="btn">
                    <input type="submit" value="Sent Now"></input> 
                    </div>
               </div>
               </div>

            <div className="contact-right">
                  
              {/* <a href="https://www.mapsdirections.info/en/measure-map-radius/">Map</a> */}
              <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shresta%20Anand%20Apartments,%20Hanumanth%20Road,%20Balaji%20Nagar,%20Royapettah,%20Chennai%20-%20600014+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


              <div className="icons">
                 <FaFacebookSquare/>
                 <FaInstagramSquare/>
                 <FaTwitterSquare/>
               </div>

               <div className="details">

                
               <div className="icon"><FaMapMarkerAlt/></div>
              <p> Shresta Anand Apartments,
                Road, Balaji Nagar,
                Royapettah, Chennai - 600014</p>

               
                 <div className="icon"><FaPhoneSquareAlt/>  </div>
               <p>+91 95000 94680</p>
               </div>

            
               </div>
               </div>

           </div>
        

    );
};

export default Contact