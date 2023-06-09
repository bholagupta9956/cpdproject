import React from 'react'
import './ForgotPassword.css';
import EmailVerificationForm from "../../Component/ForgotPassword/EmailVerificationForm";
import Header from '../../Component/Header/Header';
import { Link, useNavigate } from "react-router-dom";
import cpd_logo from "../../assets/Images/cpd_logo.png";
const ForgotPasssword = () => {
    const navigate = useNavigate("");
  return (
    <>
<Header/>
    <div className="login-page-section">
          <div className="container">
            <div className="row" style={{height:"50px"}}></div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12  about_con_login ">
                <img
                  src={cpd_logo}
                  alt=""
                  className="limg_login"
                  onClick={() => navigate("/")}
                />
                <h4>About the CPD EDU</h4>

                <p className="p_login">
                  Continuing Professional Development (CPD) is a combination of
                  approaches, ideas and techniques that will help you manage your
                  own learning and growth.The focus of CPD is firmly on results –
                  the benefits that professional development can bring you in the
                  real world.{" "}
                </p>
                <button
                  className="signUp_aboutCpd"
                
                >
                  <Link to="/Login">Login to know more</Link>
                </button>
              </div>
              <div className="col-lg-6 col-md-12 col-12 d-flex align-center">
              <EmailVerificationForm/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ForgotPasssword;