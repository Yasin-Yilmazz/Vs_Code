//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "./img/basketball-2258650_640.jpg";

import "./Content.css";

const Content = () => {
  const imgStle = {
    width: "300px",
    display: "block",
    margin: "1rem auto",
  };
  return (
    <div className="content">
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        React Kullanıcı arabirimi tasarlamak için kullanılan JS kütüphanesidir
      </p>
      <img
        style={imgStle}
        src="https://cdn.pixabay.com/photo/2020/03/10/16/47/moon-4919501_640.jpg"
        alt=""
      />
      <img src={img2} style={imgStle} alt="img2" />

      <p className="par-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
        inventore exercitationem accusantium quo, corrupti dolores quae iusto
        obcaecati illo minus vitae vero ipsum, sapiente voluptatibus unde, eum
        reprehenderit suscipit nam molestias. Iste, amet modi. Fugit facere
        eaque porro libero totam.
      </p>
    </div>
  );
};

export default Content;
