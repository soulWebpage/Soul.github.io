import {
  AboutImgBox,
  AboutImgBox2,
  AboutImgItem,
  AboutImgItemTow,
  IntroductionBox,
  IntroductionContainer,
  TWbox,
} from "@/style";
import { useTranslation } from "react-i18next";
import aboutm1 from "@/assets/images/about-m1.png";
import aboutm2 from "@/assets/images/about-m2.png";
import aboutm3 from "@/assets/images/about-m3.png";
import aboutm4 from "@/assets/images/about-m4.png";
import aboutm5 from "@/assets/images/about-m5.png";
import aboutm6 from "@/assets/images/about-m6.png";
import about1 from "@/assets/images/1.png";
import about2 from "@/assets/images/2.png";
import about3 from "@/assets/images/3.png";
import about4 from "@/assets/images/4.png";
import about5 from "@/assets/images/5.png";
import { Link } from "react-router-dom";
function Introduction() {
  const { t } = useTranslation();
  return (
    <IntroductionBox>
      <IntroductionContainer>
        <h2>{t("about soul")}</h2>
        <p>{t("IntroductionText1")}</p>
        <p>{t("IntroductionText2")}</p>
        <AboutImgBox>
          <AboutImgItem img={aboutm1} centent={t("aboutm1")}></AboutImgItem>
          <AboutImgItem img={aboutm2} centent={t("aboutm2")}></AboutImgItem>
          <AboutImgItem img={aboutm3} centent={t("aboutm3")}></AboutImgItem>
          <AboutImgItem img={aboutm4} centent={t("aboutm4")}></AboutImgItem>
          <AboutImgItem img={aboutm5} centent={t("aboutm5")}></AboutImgItem>
          <AboutImgItem img={aboutm6} centent={t("aboutm6")}></AboutImgItem>
        </AboutImgBox>
        <IntroductionContainer>
          <h2>{t("CulturesandValues")}</h2>
        </IntroductionContainer>
        <AboutImgBox2>
          <AboutImgItemTow img={about1} centent={t("about1")}></AboutImgItemTow>
          <AboutImgItemTow img={about2} centent={t("about2")}></AboutImgItemTow>
          <AboutImgItemTow img={about3} centent={t("about3")}></AboutImgItemTow>
          <AboutImgItemTow img={about4} centent={t("about4")}></AboutImgItemTow>
          <AboutImgItemTow img={about5} centent={t("about5")}></AboutImgItemTow>
        </AboutImgBox2>
        <TWbox>
          <p>
            <a href="https://t.me/soulweb3_office " target="_black">
              Telegram
            </a>
            <span>|</span>
            <a href="https://twitter.com/soul_web3 " target="_black">
              Twitter
            </a>
            <span>|</span>

            <Link to={"/agreemen"} target="_blank">
              {" "}
              {t("Terms of Use ")}
            </Link>
            <span>|</span>

            <Link to={"/policy"} target="_blank">
              {" "}
              {t("Privacy Policy")}
            </Link>
          </p>
          <p>@SoulApp</p>
        </TWbox>
      </IntroductionContainer>
    </IntroductionBox>
  );
}

export default Introduction;
