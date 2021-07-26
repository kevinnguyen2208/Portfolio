import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {


    render() {


        return (
            <div className="footer">

                <div className="social-media-footer">
                    <a href="//linkedin.com/in/lbduynguyen" target="blank" className="icon-circle">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>

                    <a href="//github.com/kevinnguyen2208" target="blank" className="icon-circle">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>

            </div>

        );
    }
}
export default Footer;