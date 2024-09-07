

import React from 'react';
import homeone from '../assets/homeone.png';
import './Homeone.css';
import second from '../assets/second.png';
import Frame from '../assets/Frame.png';
import Group from '../assets/Group.png';
import Maskgroup from '../assets/Maskgroup.png';
import Group2 from '../assets/Group2.png';
import Image12 from '../assets/Image12.png';
import Image13 from '../assets/Image13.png';
import Image14 from '../assets/Image14.png';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import cu1 from '../assets/cu1.png';
import cu2 from '../assets/cu2.png';
import rect5 from '../assets/rect5.png';
import Container from 'react-bootstrap/Container';
import { SlScreenSmartphone } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { FiMapPin } from "react-icons/fi";




function Homeone() {
  return (
    <div className='childrens-garden'>

      <div className="image-container">

        <img className="img-fluid" src={homeone} alt="Home" />


        <div className="img-overlay">
          <img src={rect5} alt="Overlay Image" />
        </div>


        <div className="text-overlay">
          <div className="text-center fw-bolder text-black">Children's Nursery</div>
          <span className="lorem-ipsum-is-simply-dummy-text-1 fw-bolder">
            Lorem Ipsum Is Simply<br />
            Dummy Text
          </span>
        </div>
      </div>

      <div className="content">
        <div className='row'>
          <div className='col-lg-6'>
            <img className='img-fluid ' src={second} alt="Second" />
          </div>
          <div className='col-lg-6'>
            <img className='img-fluid frame' src={Frame} alt="Frame" />
            <div className='about-us'>About Us</div>
            <br />
            <div>
              <span className="lorem-ipsum-is-simply-dummy-text fw-bolder">
                Lorem Ipsum Is Simply<br />
                Dummy Text
              </span>
            </div>
            <br />
            <div className="lorem-ipsum-description">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's<br />
              standard dummy text ever since the 1500s, when an unknown<br />
              printer took a galley of type and scrambled it to make<br />
              a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='why'>
        <div className='row'>
          <div className='col-lg-6 '> <img className='img-fluid frame' src={Group} alt="Frame" />
            <div className='about-us'>Why Choose Us</div>
            <br />
            <div>
              <span className="lorem-ipsum-is-simply-dummy-text-2 fw-bolder">
                Lorem Ipsum Is Simply<br />
                Dummy Text
              </span>
            </div>
            <br />
            <div className="lorem-ipsum-description">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's<br />
              standard dummy text ever since the 1500s, when an unknown<br />
              printer took a galley of type and scrambled it to make<br />
              a type specimen book.
            </div></div>
          <div className='col-lg-6'>
            <img className='img-fluid p-5 align-items-center d-flex justify-content-evenly' src={Maskgroup} alt="Second" />
            <img src={Group2} alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />




      <div className='back'>
        <div className='programsp'>
          <div className="programs text-center">Programs</div>
          <br />

          <Container>
            <Row className="text-center">
              <Col xs={12} sm={6} md={4} className="mb-4">
                <Image src={Image12} rounded fluid />
                <h5 className="lorem-ipsum mt-3 fw-bolder">Lorem Ipsum</h5>
                <span className='lorem-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text.
                </span>
              </Col>

              <Col xs={12} sm={6} md={4} className="mb-4">
                <Image src={Image13} rounded fluid />
                <h5 className="lorem-ipsum mt-3 fw-bolder">Lorem Ipsum</h5>
                <span className='lorem-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text.
                </span>
              </Col>

              <Col xs={12} sm={6} md={4} className="mb-4">
                <Image src={Image14} rounded fluid />
                <h5 className="lorem-ipsum mt-3 fw-bolder">Lorem Ipsum</h5>
                <span className='lorem-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text.
                </span>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <div className="parent-container" >
          <div className='btn-'> <button >View All</button></div>
        </div>
        <br />


        <div className="programs text-center">Get In Touch</div>
        <div className="container-14">
          <div className="container-46">
            <div className="connect-with-us">
              Connect With Us
            </div>


            <div className="get flex items-center">

              <FiMapPin size={20} className="mr-2" />
              <span>
                Location: City, Country
              </span>
            </div>
            <div>
              Building 00 <br />
              Street 000
            </div>

            <br />
            <div className="flex items-center">

              <SlScreenSmartphone size={20} className="mr-2" />
              <span>
                Call Us: 00000 00000
              </span>
            </div>
            <br />

            <div className="flex items-center">

              <PiTelegramLogo size={20} className="mr-2" />
              <span>
                E-mail Us: dummymail.com
              </span>

            </div>
            <br />
            <div className="working-hours">
              Working Hours
            </div>
            <div className="am-330-pm">
              8:30 am - 3:30 pm
            </div>
            <span className="sunday-were-closed">
              Sunday were Closed
            </span>
          </div>
          <div className="container-7">
            <div className="container-6">
              <div className="container-37">
                <span className="full-name">
                  Full Name
                </span>
              </div>
              <div className="container-8">
                <span className="email-address">
                  E-mail Address
                </span>
              </div>
            </div>
            <div className="container-11">
              <div className="container-4">
                <span className="phone-number">
                  Phone Number
                </span>
              </div>
              <div className="container-33">
                <span className="subject">
                  Subject
                </span>
              </div>
            </div>
            <div className="container-2">
              <span className="write-message">
                Write Message
              </span>
            </div>
            <div className="parent-containerr">
              <div className='btn-'> <button >Submit</button></div>
            </div>
          </div>
        </div>
        <br />





        <div>
          <div className='row mt-3 p-3'>

            <div className='col-lg-2'>
              <img src={cu1} alt="" />
            </div>

            <div className='col-lg-8'>
              <h5 className='us text-center'>Contact Us</h5>

              <div className="lorem-ipsumis-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-beenthe-industrys-standard-dummy-text-ever-since-the-1500-s">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has<br />
                been the industry&#39;s standard dummy text ever since the1500s
              </div>
              <br />
              <div className="parent-container">
                <div className='btn-'> <button >Contact Us</button></div>
              </div>
            </div>

            <div className='col-lg-2'>
              <img src={cu2} alt="" />
            </div>

          </div>
        </div>

      </div>
      <br />
    </div>
  );
}

export default Homeone;
