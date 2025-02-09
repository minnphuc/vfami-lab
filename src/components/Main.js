import React from "react";
import { Grid, Skeleton } from "@mui/material";

import Examination from "./Examination";

import lab from "../icons/lab.jpg";

import classes from "./Main.module.css";
import Footer from "./Footer";
import Contact from "./Contact";

const skeletonCard = (
  <Grid item xs={5} sm={2.5}>
    <Skeleton variant="rounded" animation="wave" width="294px" height="478px" />
  </Grid>
);

const skeletonCards = [];

for (let i = 0; i < 12; i++) {
  skeletonCards.push(skeletonCard);
}

function Main() {
  return (
    <>
      <hr id="introduction" />

      <p className={classes.title}>GIỚI THIỆU VỀ PHÒNG XÉT NGHIỆM Y KHOA VFAMI</p>

      <div className={classes.introContainer}>
        <div className={classes.introContent}>
          <p>
            Phòng xét nghiệm Y khoa VFAMI tự hào là đơn vị hàng đầu trong lĩnh vực cung
            cấp các dịch vụ xét nghiệm y khoa chuyên nghiệp và toàn diện. Với sứ mệnh nâng
            cao chất lượng chăm sóc sức khỏe cho cộng đồng, VFAMI không ngừng nỗ lực để
            mang đến những dịch vụ xét nghiệm chính xác, nhanh chóng và đáng tin cậy.
            Chúng tôi cung cấp một loạt các dịch vụ xét nghiệm chuyên sâu bao gồm:
            <ul>
              <li>Xét nghiệm Ung thư cổ tử cung</li>
              <li>Xét nghiệm Giải phẫu Bệnh</li>
              <li>Xét nghiệm Sinh học Phân tử</li>
              <li>Xét nghiệm Máu</li>
            </ul>
            Tại VFAMI, chúng tôi luôn đặt sức khỏe và sự hài lòng của khách hàng lên hàng
            đầu. Với đội ngũ nhân viên chuyên nghiệp, trang thiết bị tiên tiến và quy
            trình kiểm tra nghiêm ngặt, Phòng xét nghiệm VFAMI cam kết mang đến dịch vụ
            xét nghiệm y khoa tốt nhất cho bạn và gia đình.
          </p>
        </div>

        <div className={classes.introImg}>
          <img src={lab} alt="lab" />
        </div>
      </div>

      <hr />

      <p className={classes.title}>CÁC DỊCH VỤ XÉT NGHIỆM</p>

      <Examination />
      <Contact />

      <Footer />
    </>
  );
}

export default Main;
