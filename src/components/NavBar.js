import React, { useState } from "react";

import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../icons/vfami-modified.png";

import classes from "./NavBar.module.css";

function NavBar() {
  const [dropdownIsOpen, setDropdown] = useState(false);

  const openDropdown = () => {
    setDropdown(state => !state);
  };

  const buttonSx = { color: "#043142", fontWeight: 600, fontSize: "1rem" };

  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="logo" />

        <Link to="/home" className={classes["logo-content"]}>
          XÉT NGHIỆM Y KHOA VFAMI
        </Link>
      </div>

      <Stack direction="row" spacing={3}>
        <Button sx={buttonSx}>
          <a href="#introduction">GIỚI THIỆU</a>
        </Button>

        <Button onClick={openDropdown} sx={buttonSx} endIcon={<KeyboardArrowDownIcon />}>
          CÁC DỊCH VỤ XÉT NGHIỆM
        </Button>

        <Button sx={buttonSx}>
          <a href="#contact">LIÊN HỆ</a>
        </Button>
      </Stack>

      {dropdownIsOpen && (
        <div className={classes.dropdown}>
          <a href="#gyn">
            <p>XÉT NGHIỆM UNG THƯ CỔ TỬ CUNG</p>
          </a>

          <a href="#blood">
            <p>XÉT NGHIỆM MÁU</p>
          </a>

          <a href="#bio">
            <p>XÉT NGHIỆM SINH HỌC PHÂN TỬ</p>
          </a>

          <a href="#path">
            <p>XÉT NGHIỆM GIẢI PHẪU BỆNH</p>
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
