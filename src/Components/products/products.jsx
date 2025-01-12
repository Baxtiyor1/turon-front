import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ProductItem } from "../product_item/product_item";

// import images
import prod1 from "../../Assets/images/prod2.png";
import prod2 from "../../Assets/images/prod3.png";
import prod3 from "../../Assets/images/prod4.png";
import groupProd from "../../Assets/images/grop-prod.png";
import { LinkBtn } from "../link-btn/linkBtn";
import { ProductCard } from "../productCard/productCard";

function Products() {
  // let card = useRef();

  return (
    <>
      {/*    <div className="product">
        <div className="container">
          <h2 className="product__caption">Bizning mahsulotlarimiz</h2>
          <p className="product__description">
            Turon unlari restavratorlar, oshxonada o`z ijodini namoyon etishni,
            yangi va mazali ta`mlar bilan yaqinlarini quvontirishni yaxshi
            ko`radigan pazandalarimiz uchun mo`ljallangan.
          </p>
          <div className="product__wrapper">
            <ProductItem img={Prod1} title="Shef" desc="Recommended for bakers to make tasty and fragrant homemade bread." />
            {/* <div className="product__card" ref={card}>
              <div className="product__img--box">
                <Image src={Prod1} alt="turon img" className="product__img" />
              </div>
              <div className="product__box">
                <h3 className="product__title">Turon</h3>
                <p className="product__info">
                  Xamirli taomlar hamda pishiriqlar tayyorlash uchun tavsiya
                  etiladi.
                </p>
                <button className="product__btn">Batafsil</button>
              </div>
            </div> */}
      {/* <div className="product__card product--card3">
              <Image
                src={prod2}
                alt="turon img"
                className="product__img product--img2"
              />
            </div>
            <div className="product__card product--card4">
              <Image
                src={prod3}
                alt="turon img"
                className="product__img product--img3"
              />
            </div>
            <div className="product__card product--card5">
              <Image src={Prod1} alt="turon img" className="product__img" />
            </div>
            <div className="product__card product--card6">
              <h3 className="product__title">Turon</h3>
              <p className="product__paragraph">
                Nonvoy hamda qandolatchilarga mazali nonlar, shuningdek
                shirinliklar tayyorlash uchun tavsiya etiladi.
              </p>
            </div>
            <div className="product__card product--card7">
              <Image src={prod2} alt="turon img" className="product__img " />
            </div>
            <div className="product__card product--card8">
              <Image src={prod3} alt="turon img" className="product__img " />
            </div> */}
      {/* </div>
          <div className="product__wrap">
            <Image src={groupProd} alt="turon imgs" />
            <h2>
              Har bir taomga non bilan maza kiritadigan nonvoylarimiz uchun
            </h2>
            <p>
              Qandolatchilar, oshpazlar hamda nonvoylarga bag`ishlangan 25 kg
              og`irlikdagi paketlarimizdan nondan tortib pitsagacha,
              shirinlikdan tortib xamirli taomlargacha tayyorlashingiz mumkin.
              Turon — sifatli natijalarni kafolatlaydi!
            </p>
          </div> */}

      <div className="product">
        <div className="container">
          <h2
            className="product__caption"
            data-aos="flip-left"
            data-aos-duration="1200"
          >
            Bizning mahsulotlarimiz
          </h2>
          <p
            className="product__description"
            data-aos="flip-left"
            data-aos-duration="1200"
          >
            Turon unlari restavratorlar, oshxonada o`z ijodini namoyon etishni,
            yangi va mazali ta`mlar bilan yaqinlarini quvontirishni yaxshi
            ko`radigan pazandalarimiz uchun mo`ljallangan.
          </p>
          <div className="product__wrapper">
            <div data-aos="fade-up-right" data-aos-duration="1000">
              <ProductCard bgcolor="#B2D9ED">
                <Image src={prod1} alt="turon img" className="product__img" />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Xamirli taomlar hamda pishiriqlar tayyorlash uchun tavsiya
                    etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000">
              <ProductCard
                bgcolor="#AA2323"
                data-aos="fade-up-right"
                data-aos-duration="1200"
              >
                <Image
                  src={prod2}
                  alt="turon img"
                  className="product__img product--img2"
                />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Nonvoy hamda qandolatchilarga mazali nonlar, shuningdek
                    shirinliklar tayyorlash uchun tavsiya etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1000">
              <ProductCard bgcolor="#00A3EE">
                <Image
                  src={prod2}
                  alt="turon img"
                  className="product__img product--img2"
                />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Xamirli taomlar hamda pishiriqlar tayyorlash uchun tavsiya
                    etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000">
              <ProductCard bgcolor="#0070B8">
                <Image
                  src={prod3}
                  alt="turon img"
                  className="product__img product--img3"
                />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Nonvoy hamda qandolatchilarga mazali nonlar, shuningdek
                    shirinliklar tayyorlash uchun tavsiya etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1000">
              <ProductCard bgcolor="#5F0404">
                <Image src={prod2} alt="turon img" className="product__img " />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Xamirli taomlar hamda pishiriqlar tayyorlash uchun tavsiya
                    etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000">
              <ProductCard bgcolor="#D38945 ">
                <Image
                  src={prod3}
                  alt="turon img"
                  className="product__img product--img3"
                />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Nonvoy hamda qandolatchilarga mazali nonlar, shuningdek
                    shirinliklar tayyorlash uchun tavsiya etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1000">
              <ProductCard bgcolor="#29CAC0">
                <Image src={prod3} alt="turon img" className="product__img " />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Nonvoy hamda qandolatchilarga mazali nonlar, shuningdek
                    shirinliklar tayyorlash uchun tavsiya etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000">
              <ProductCard bgcolor="#C0EBFF">
                <Image src={prod1} alt="turon img" className="product__img" />
                <div className="product__box">
                  <h3 className="product__title">Turon</h3>
                  <p className="product__info">
                    Xamirli taomlar hamda pishiriqlar tayyorlash uchun tavsiya
                    etiladi.
                  </p>
                  {/* <LinkBtn href="/#" bgcolor="#CC1C08">
                Batafsil
              </LinkBtn> */}
                </div>
              </ProductCard>
            </div>
          </div>
          <div className="product__wrap">
            <div data-aos="zoom-in" data-aos-duration="1000">
            <Image src={groupProd} alt="turon imgs" />
            </div>
            <h2 data-aos="flip-up" data-aos-duration="1000">
              Har bir taomga non bilan maza kiritadigan nonvoylarimiz uchun
            </h2>
            <p data-aos="flip-down" data-aos-duration="1000">
              Qandolatchilar, oshpazlar hamda nonvoylarga bag`ishlangan 25 kg
              og`irlikdagi paketlarimizdan nondan tortib pitsagacha,
              shirinlikdan tortib xamirli taomlargacha tayyorlashingiz mumkin.
              Turon — sifatli natijalarni kafolatlaydi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
