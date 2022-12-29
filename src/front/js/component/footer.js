import React, { Component } from "react";
import { ImMail4 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbDoorExit } from "react-icons/tb";
import { ImHome } from "react-icons/im";

export const Footer = () => (
  <div className="footer container-fluid text-center">
    <footer className="mt-4">
      <p>Copyright Aribyt 2022</p>
      <div>
        <BsLinkedin className="iconos_footer" />
        <AiFillGithub className="iconos_footer" />
        <ImMail4 className="iconos_footer" />
        <MdContactSupport className="iconos_footer" />
      </div>
    </footer>
  </div>
);
