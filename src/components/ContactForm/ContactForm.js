import React, { Component } from "react";
import './ContactForm.css';
import Button from '../Button/Button.js';
import emailjs from 'emailjs-com';
import BackdropFilter from "react-backdrop-filter";


class ContactForm extends React.Component {

    
    render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_pfz6936', 'template_i8c6j3n', e.target, 'user_Oy7THXRdJgKVr2aI9OHVX')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          }
      return(
        <div className = "contact-container" >
       
       
            <div className="contact-info">
                
                <h4>
                    Contact Information
                </h4>
                <p>Fill the form and I'll get back to you within 24 hours</p>
                <div className="icon-text">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                    <span>+61 475 051 821</span>
                </div>

                <div className="icon-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>lbduy.nguyen2208@gmail.com</span>
                </div>

                <div className="icon-text">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Melbourne, Australia</span>
                </div>

                <div className ="social-media">
                    <a href="//linkedin.com/in/lbduynguyen" target="blank" className="icon-circle">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>

                    <a href="//github.com/kevinnguyen2208" target="blank" className="icon-circle">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>
            </div>
            <BackdropFilter
                className="bluredForm"
                filter={"blur(10px)"}
                canvasFallback={true}
                html2canvasOpts={{
                    allowTaint: true
                }}
                onDraw={() => {
                    console.log("Rendered !");
                }}
                >

            
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="col">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstname"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastname"/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" name="phone"/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message"></textarea>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group-button">
                   <Button btnColor="#05f7ff" backColor="#3C17CB"  model="outline" type="submit"  >Send
                            </Button>
                    </div>
                </div>
            </form>
            </BackdropFilter>

        </div>
      )
    }
}
 

export default ContactForm;