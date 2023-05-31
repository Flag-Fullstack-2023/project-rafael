import React from "react";
import {
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";

import Logo from "../../atoms/logo/logo";
import { Input, Button } from "../../atoms/";
import { Form } from "../../molecules/";

import { FooterEl } from "./footer.styled";

const Footer = () => {
  return (
    <FooterEl>
      <div className="container-grid">
        <div className="logo-col">
          <Logo />
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
            <Input
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
