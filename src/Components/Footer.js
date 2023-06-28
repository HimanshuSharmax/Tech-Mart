import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/contact"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3 className="heading">ADDRESS</h3>
              <p>Ground floor, Nehru place, Eros Corporate Centre, New Delhi, South Delhi-110019. </p>
            </div>
            <div className="footer-subscribe">
              <h3 className="heading">SUBSCRIBE TO GET UPDATES</h3>
              <form action="#">
                <input className="inputMail" type="email" name="email" placeholder="YOUR E-MAIL" />

                <input className="inputSubmit" type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3 className="heading">FOLLOW US</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <a
                    href="https://github.com/HimanshuSharmax"
                    target="_blank">
                  <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/himanshusharmaz/"
                    target="_blank">
                    <FaLinkedinIn className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3 className="heading">CALL US</h3>
              <p>+91 12345678978</p>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-three-column ">
              <p className="yearRights">
                @{new Date().getFullYear()} E-Commerce Store. All Rights Reserved
              </p>
              <p className="myname">Develop By Himanshu Sharma</p>
              <div className="terms">
                <span>Terms and conditions</span>
                <span>Privacy Policy</span>              
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .heading{
   color: #ff9800eb;
   font-size: 1.7rem;
  }

  form{
    max-width: 24rem;
    color: #212529;
    padding: 1rem 1rem;
    text-transform: uppercase;
    box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
  }

  .inputMail{
    max-width: 20rem;
    color: #212529;
    padding: 1.3rem 2rem;
    border: 1px solid rgba(98,84,243,0.5);
    text-transform: uppercase;
  }

  .inputSubmit{
    max-width: 15rem;
    margin-top: 1.5rem;
    background-color: rgb(98 84 243);
    color: #fff;
    padding: 1.2rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .inputSubmit:hover {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.98);
  }

  .contact-short {
    max-width: 50vw;
    margin: auto;
    padding: 3.1rem 8rem;
    background-color:  #e2f1fe;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 2rem 0;
    background-color: #000034;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: #ffffffba;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #ffffffba;

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 5rem;

    hr {
      margin-bottom: 2rem;
      color: #ffffffa6;
      height: 0.1px;
    }
  }

  .terms{
    display: flex;
    flex-direction: inherit;
    flex-direction: row-reverse;
    gap: 4rem;
    margin-right: 4rem;
  }

  span{
    font-size: 1.4rem;
    color: #ffffffba;
    font-weight:500;
  }

  .yearRights{
    font-size:1.4rem;
    }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    ${'' /* background-color:#ffffff; */}

    .contact-short {
      max-width: 75vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      margin-top: 4.5rem;
    margin-bottom: -7rem;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 12rem 0 2rem 0;

      h3{
        margin-bottom: 1.2rem;
      }
    }

    .grid{
      gap:1.1rem;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }

    .yearRights{
      display: flex;
    justify-content: center;
    font-size:1.4rem;
    }

    .myname{
      display: flex;
    justify-content: center;
    font-size: 1.4rem;
    }

    .terms{
    display: flex;
    flex-direction: inherit;
    flex-direction: row-reverse;
    gap: 4rem;
    margin-right: 6rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
      .terms{
        margin: auto;
      }
    }
  }
`;

export default Footer;