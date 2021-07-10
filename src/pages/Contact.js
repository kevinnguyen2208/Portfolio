import React, {Component} from 'react';
import ContactForm from '../components/ContactForm/ContactForm.js';
import '../components/ContactForm/ContactForm.css';
import ContactBackground from '../resources/img/spider.jpg';
import Helmet from 'react-helmet';


class Contact extends Component{
    render(){
        
        return(
            <div className = "contact" >
              <Helmet>
             <style>
                {`
                   html, body {
                       height: 100%;
                  }

                 body {
                    background-image: url("https://images.pexels.com/photos/5614721/pexels-photo-5614721.jpeg?cs=srgb&dl=pexels-pat-whelen-5614721.jpg&fm=jpg");
                    background-size: cover;
                    background-position: center;
                  }
                `}
            </style>
         </Helmet>
             
                <h1 className="contact-heading">
                    Contact 
                </h1>
                
                <ContactForm/>
            </div>
        )
    }
}

export default Contact;