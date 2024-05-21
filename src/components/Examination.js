import React from "react";

import { Link } from "react-router-dom";

import classes from "./Examination.module.css";

import gyn from "../icons/gynecology.png";
import blood from "../icons/blood.jpg";
import bio from "../icons/bio.jpg";
import path from "../icons/pathology.jpg";

function Examination() {
  return (
    <>
      <div className={classes.examination}>
        <div className={classes.examContainerOdd}>
          <div className={classes.examContentOdd}>
            <p id="gyn">XÉT NGHIỆM UNG THƯ CỔ TỬ CUNG</p>
            Xét nghiệm ung thư cổ tử cung được khuyến cáo nên thực hiện định kỳ ở phụ nữ
            độ tuổi sinh sản. Xét nghiệm sẽ giúp phát hiện sớm bệnh hoặc yếu tố tiền ung
            thư để phòng ngừa, điều trị sớm để đem lại hiệu quả cao hơn. Xét nghiệm y khoa
            VFAMI cung cấp các phương pháp xét nghiệm như PAP's cổ điển và PAP thế hệ mới
            Thinprep pap test, Liquiprep pap test. Dịch vụ của chúng tôi đảm bảo kết quả
            chính xác và hỗ trợ tư vấn phòng ngừa hiệu quả.
            {/* <Link className={classes.learn}>Tìm hiểu thêm</Link> */}
          </div>

          <div className={classes.examImgOdd}>
            <img src={gyn} alt="gyn" />
          </div>
        </div>
      </div>

      <div className={classes.examination}>
        <div className={classes.examContainerEven}>
          <div className={classes.examImgEven}>
            <img src={blood} alt="blood" />
          </div>

          <div className={classes.examContentEven}>
            <p id="blood">XÉT NGHIỆM MÁU</p>
            Tại VFAMI, dịch vụ xét nghiệm máu được thực hiện bằng các trang thiết bị hiện
            đại và công nghệ tiên tiến. Xét nghiệm máu không chỉ giúp chẩn đoán và theo
            dõi tình trạng sức khỏe mà còn phát hiện sớm nhiều bệnh lý nguy hiểm như tiểu
            đường, mỡ máu cao, và các bệnh gan thận. Chúng tôi cung cấp các xét nghiệm từ
            cơ bản đến chuyên sâu, bao gồm xét nghiệm đường huyết, chức năng gan thận và
            nhiều loại xét nghiệm khác. Với đội ngũ chuyên gia giàu kinh nghiệm, VFAMI cam
            kết mang đến kết quả chính xác và nhanh chóng, hỗ trợ đưa ra các phương pháp
            điều trị hiệu quả.
            {/* <Link className={classes.learn}>Tìm hiểu thêm</Link> */}
          </div>
        </div>
      </div>

      <div className={classes.examination}>
        <div className={classes.examContainerOdd}>
          <div className={classes.examContentOdd}>
            <p id="bio">XÉT NGHIỆM SINH HỌC PHÂN TỬ</p>
            Xét nghiệm sinh học phân tử sử dụng công nghệ tiên tiến để phân tích gen và
            phát hiện virus HPV, nguyên nhân chính gây ung thư cổ tử cung. Xét nghiệm sinh
            học phân tử giúp chẩn đoán chính xác và sớm các bệnh lý phức tạp, từ đó tăng
            khả năng điều trị thành công. VFAMI cung cấp các xét nghiệm như PCR và giải
            trình tự gen, đảm bảo kết quả nhanh chóng và tin cậy.
            {/* <Link className={classes.learn}>Tìm hiểu thêm</Link> */}
          </div>

          <div className={classes.examImgOdd}>
            <img src={bio} alt="bio" />
          </div>
        </div>
      </div>

      <div className={classes.examination}>
        <div className={classes.examContainerEven}>
          <div className={classes.examImgEven}>
            <img src={path} alt="path" />
          </div>

          <div className={classes.examContentEven}>
            <p id="path">XÉT NGHIỆM GIẢI PHẪU BỆNH</p>
            Xét nghiệm giải phẫu bệnh đóng vai trò quan trọng trong việc chẩn đoán và điều
            trị nhiều loại bệnh lý. Bằng việc phân tích mẫu mô và tế bào dưới kính hiển
            vi, chúng tôi có thể phát hiện sớm các bất thường và bệnh lý, bao gồm ung thư
            và các bệnh mãn tính khác. Việc thực hiện xét nghiệm giải phẫu bệnh không chỉ
            hỗ trợ bác sĩ trong việc đưa ra phương pháp điều trị hiệu quả mà còn giúp bệnh
            nhân hiểu rõ hơn về tình trạng sức khỏe của mình, từ đó đưa ra các quyết định
            chăm sóc sức khỏe đúng đắn.
            {/* <Link className={classes.learn}>Tìm hiểu thêm</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Examination;
