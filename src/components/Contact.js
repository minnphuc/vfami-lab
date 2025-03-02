import React from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/Modal/modal-state";

import classes from "./Contact.module.css";

import callIcon from "../icons/call.svg";
import scheduleIcon from "../icons/schedule.svg";
import locationIcon from "../icons/location.svg";
import supporter from "../icons/supporter.jpg";

function Contact() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = data => {
    const inputName = data.name;
    const inputPhone = data.phone;
    const inputContent = data.content;

    dispatch(
      modalActions.openModal({
        title: "XIN CẢM ƠN",
        content:
          "VFAMI Lab đã tiếp nhận thông tin của bạn và sẽ liên hệ với bạn trong thời gian sớm nhất.",
      })
    );
    console.log(inputName, inputPhone, inputContent);
  };

  return (
    <div className={classes.contactSection} id="contact">
      <p className={classes.contactTitle}>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN XÉT NGHIỆM</p>

      <p className={classes.contactIntro}>
        Bạn có thắc mắc về các dịch vụ xét nghiệm của chúng tôi? Hãy gọi đến Hotline của
        Phòng xét nghiệm y khoa VFAMI để được tư vấn nhanh nhất
      </p>

      <div className={classes.contact}>
        <div className={classes.contactInfo}>
          <img src={callIcon} alt="call" />
          <p className={classes.contactText}>HOTLINE: 094 4867661</p>
        </div>

        <div className={classes.contactInfo}>
          <img src={scheduleIcon} alt="schedule" />
          <p className={classes.scheduleText}>
            <p>Thứ hai - Thứ sáu: 7h30 đến 20h00</p>
            <p>Thứ bảy: 7h30 đến 18h00</p>
          </p>
        </div>

        <div className={classes.contactInfo}>
          <img src={locationIcon} alt="location" />
          <p>29 Trần Xuân Hòa, P.7, Q.5, TP.HCM</p>
        </div>
      </div>

      <p className={classes.formIntro}>
        Hoặc để lại thông tin liên lạc để chúng tôi có thể chủ động liên hệ tư vấn cho bạn
      </p>

      <div className={classes.contactForm}>
        <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
          <input
            type="text"
            placeholder="Họ và tên*"
            {...register("name", { required: true })}
            className={errors.name ? "invalid" : ""}
          />

          <input
            type="tel"
            placeholder="Số điện thoại*"
            {...register("phone", { required: true })}
            className={errors.phone ? "invalid" : ""}
          />

          <textarea
            type="text"
            placeholder="Nội dung cần tư vấn"
            {...register("content", { required: true })}
            className={errors.content ? "invalid" : ""}
          />

          <hr />

          <button type="submit" className={classes.login}>
            Gửi thông tin
          </button>
        </form>

        <img src={supporter} alt="supporter" />
      </div>
    </div>
  );
}

export default Contact;
