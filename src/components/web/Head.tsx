import {
  HeadBox,
  HeadLeftBox,
  HeadRightBox,
  Logo,
  SelectorItem,
} from "@/style";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import Selector from "./Selector";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export enum Language {
  en = "en",
  jp = "jp",
  kr = "kr",
  hk = "hk",
}
type LanguageList = {
  name: string;
  value: Language;
}[];

function Head() {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState<Language>(Language.en);
  const languageList: LanguageList = [
    {
      name: "English",
      value: Language.en,
    },
    {
      name: "日本語",
      value: Language.jp,
    },
    {
      name: "한국어",
      value: Language.kr,
    },
    {
      name: "繁体中文",
      value: Language.hk,
    },
  ];
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  const routerList = [
    {
      path: "/",
      name: t("index"),
    },
    {
      path: "/about",
      name: t("about"),
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // 获取当前路由路径 来给.link 加上activeLink 的类名

  return (
    <HeadBox>
      <HeadLeftBox>
        <Logo src={logo} />
        <Selector
          value={language}
          text={
            languageList.find((item) => {
              return item.value === language;
            })?.name || ""
          }
        >
          {languageList.map((item, index) => {
            return (
              <SelectorItem
                key={index}
                onClick={() => {
                  setLanguage(item.value);
                  changeLanguage(item.value);
                }}
              >
                {item.name}
              </SelectorItem>
            );
          })}
        </Selector>
      </HeadLeftBox>
      <HeadRightBox>
        {routerList.map((item, index) => {
          return (
            <div
              key={index}
              className={
                location.pathname === item.path ? "link activeLink" : "link"
              }
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </HeadRightBox>
    </HeadBox>
  );
}

export default Head;
