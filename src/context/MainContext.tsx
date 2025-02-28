import { createContext, useEffect, useRef, useState } from "react";
import { configFiles } from "../config/config";
import emailjs from "@emailjs/browser";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  // <----------------- States -------------------->

  const [navMenu, setNavMenu] = useState(false);
  const [messageSent, setMessageSent] = useState("");
  const [underline, setUnderline] = useState("home");
  // <------------------------------ References (useRef etc.) -------------------->

  const formRef = useRef(null);

  // <---------------------------- Methods and Functions -------------------->

  const sendEmail = (e) => {
    e.preventDefault();
    const refValue = formRef.current.elements;
    const selectedElem = Array.from(refValue).filter(
      (elem) => elem.tagName === "INPUT" || elem.tagName === "TEXTAREA"
    );
    const isEmpty = selectedElem.some((val) => val.value.trim() === "");
    const minLen = selectedElem.some((val) => val.value.length <= 3);
    if (isEmpty) {
      setMessageSent("All fields required");
      return;
    } else if (minLen) {
      setMessageSent("Length is less than 4 characters");
      return;
    }
    setMessageSent("Sending...");

    emailjs
      .sendForm(
        configFiles.emailJsServiceKey,
        configFiles.emailJsTemplateKey,
        formRef.current,
        {
          publicKey: configFiles.emailJsPublicKey,
        }
      )
      .then(
        () => {
          setMessageSent("Message sent !");
          formRef.current.reset();
        },
        (err) => {
          console.log("Error occured ! ", err);
          setMessageSent("Message not sent !");
          formRef.current.reset();
        }
      );
  };

  // <--------------------- Rendering Area (useEffects etc.)-------------------->

  // <----------------- Context Values -------------->
  const contextValues = {
    navMenu,
    setNavMenu,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};
