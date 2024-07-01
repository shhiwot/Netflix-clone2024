import React from "react";

import footerData from "./footerData";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="icon_Wrapper">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>

      <div className="footer_Wrapper row">
        {footerData.map((obj, i) => {
          let { url, title } = obj;
          return (
            <div className="colomun_list col-6 col-lg-3" key={i}>
              <a href={url}>{title}</a>
            </div>
          );
        })}
      </div>
      <div className="last_footerWrapper">
        <div className="service_wrapper">Service Code</div>
        <br />
        
        <CopyrightIcon />
        1997-2024 Netflix inc.
      </div>
    </>
  );
};

export default Footer;
