import React, { useState, useEffect } from "react";
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
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchPokeCard = async () => {
      try {
        const res = await fetch(
          "https://api.pokemontcg.io/v2/cards?q=set.id:sm1&pageSize=12&page=3",
          {
            method: "GET",
            headers: {
              "X-Api-Key": "ec56cdc6-a140-4391-b8cb-2a3cc531cee5",
            },
          }
        );

        const { data } = await res.json();

        console.log(data);
        const processedCardList = data.map(card => {
          return {
            id: card.id,
            name: card.name,
            img: card.images.large,
            atk: isNaN(parseInt(card.attacks[0]?.damage))
              ? parseInt(card.attacks[1]?.damage)
              : parseInt(card.attacks[0]?.damage),
            hp: +card.hp,
            cost: card.cardMain.prices.averageSellPrice,
          };
        });
        console.log(processedCardList);

        setCardList(processedCardList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokeCard();
  }, []);

  return (
    <>
      <header className={classes.firstSection}></header>

      <hr id="introduction" />

      <p className={classes.title}>GIỚI THIỆU VỀ XÉT NGHIỆM Y KHOA VFAMI</p>

      <div className={classes.introContainer}>
        <div className={classes.introContent}>
          <p>
            Công ty Xét nghiệm Y khoa VFAMI tự hào là đơn vị hàng đầu trong lĩnh vực cung
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
            trình kiểm tra nghiêm ngặt, VFAMI cam kết mang đến dịch vụ xét nghiệm y khoa
            tốt nhất cho bạn và gia đình.
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