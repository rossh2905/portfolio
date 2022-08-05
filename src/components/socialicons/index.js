import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaSpotify,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li className="github">
            <a href={socialprofils.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a className="facebook" href={socialprofils.facebook} target="_blank">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li className="instagram">
            <a href={socialprofils.instagram} target="_blank">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li className="linkedin">
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.spotify && (
          <li className="spotify">
            <a href={socialprofils.spotify} target="_blank">
              <FaSpotify />
            </a>
          </li>
        )}
        {socialprofils.email && (
          <li className="email">
            <a href={socialprofils.email} target="_blank">
              <FaEnvelope />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
