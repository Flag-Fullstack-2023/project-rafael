import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";
import { Logo, InputEmail, Button } from "_atoms/";
import { Form } from "_molecules/";

import { FooterEl } from "./footer.styled";

const Footer = () => {
  return (
    <FooterEl>
      <div className="container-grid">
        <div className="logo-col">
          <HashLink to="/#">
            <Logo />
          </HashLink>
          <p className="copyright text_small">
            Copyright © <span className="year">2023</span> by Rafael Logrado.
            All rights reserved.
          </p>
        </div>
        <ul className="social-col">
          <li>
            <a href="#">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
        </ul>
        <div className="subscribe-col">
          <Form onsubmit={(event) => event.preventDefault}>
            <h4>Subscribe to the newsletter!</h4>
            <InputEmail
              placeholder="address@example.com"
              type="email"
              name="email"
              label="email"
            />
            <Button preset="secondary">Subscribe</Button>
          </Form>
        </div>
      </div>
    </FooterEl>
  );
};

export default Footer;
