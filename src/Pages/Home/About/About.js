import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    //animation
    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="mx-auto">
            <div className="text-center m-0 py-3 mt-2">
                <h1 className='fw-bold fst-italic text-primary'>About Us</h1>
            </div>

            <div className="col-lg-10 d-flex flex-wrap align-items-center pb-4 mx-auto my-3">
                <div className="col-lg-8 col-sm-12">
                    <h1 className="text-center my-3 fw-bolder fst-italic">ClockFox&trade;</h1>
                    <p className="fs-5 mx-5 my-3">ClockFox is one of the well-known, reputed clock-seller in the country. Our products price range starts from affordable upto collector's level. We also sell luxurious watches of different brands. We take pre-booking for limited edition products.
                    <br></br>
                    We arrange private display on request.</p>
                    <div className="fs-5 mx-5 my-3">
                        <h3 className="fw-bold fst-italic">We Provide :</h3>
                        <ul className="ms-5 fst-italic ">
                            <li>Genuine product and parts</li>
                            <li>State-of-art collections</li>
                            <li>Product with reasonable price</li>
                            <li>After-sales service</li>
                            <li>Products on request</li>
                            <li>Antique product collections</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 border-5 rounded-3 mx-auto shadow-lg bg-white" data-aos="fade-up" data-aos-duration="3000">
                    <Form className="mx-3 px-3 mt-3">
                        <Form.Text className="mb-1 text-dark fs-5 fw-bolder fst-italic">
                            Keep up-to-date with our newsletter !?
                            <br></br>
                            Register Now !
                        </Form.Text>
                        <Form.Group className="mt-3 mb-3 text-dark" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address :</Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Interested topic :</Form.Label>
                            <Form.Control placeholder="Tell us about your interest !" as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="mb-3" variant="outline-primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default About;