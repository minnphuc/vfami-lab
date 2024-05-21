import React from "react";

import classes from "./Footer.module.css";

import companyIcon from "../icons/company.svg";
import homeIcon from "../icons/home.svg";
import callIcon from "../icons/callFooter.svg";
import mailIcon from "../icons/mail.svg";
import websiteIcon from "../icons/website.svg";
import companyLogo from "../icons/vfami-modified.png";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.company}>
          <img src={companyLogo} alt="logo" />
          <p>XÉT NGHIỆM Y KHOA VFAMI</p>
        </div>

        <div className={classes.companyInfo}>
          <p className={classes.info}>
            <img src={companyIcon} alt="company" />
            Công Ty Trách Nhiệm Hữu Hạn VFAMI
          </p>

          <p className={classes.info}>
            <img src={homeIcon} alt="address" />
            Địa chỉ: 29 Trần Xuân Hòa, Phường 7, Quận 5, TP Hồ Chí Minh
          </p>

          <p className={classes.info}>
            <img src={callIcon} alt="hotline" />
            Hotline: 1900 6099
          </p>

          <p className={classes.info}>
            <img src={mailIcon} alt="email" />
            Email: vfamilab@gmail.com
          </p>

          <p className={classes.info}>
            <img src={websiteIcon} alt="websire" />
            Website: https://vfamilab.netlify.app
          </p>
        </div>
      </div>

      <div className={classes.map}>
        <div
          id="embed-ded-map-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            title="map"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=29+Trần+Xuân+Hoà,+Phường+7,+District+5,+Ho+Chi+Minh+City,+Vietnam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
