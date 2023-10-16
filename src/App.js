import React from "react";
import { Thead } from "./components/Thead";
import { Tbody } from "./components/Tbody";

export const App = () => {
  return (
    <>
      <table>
        <Thead />
        <Tbody />
      </table>
      <p>
        Rates are based from 1 USD.
        <br /> This application uses API from https://currencyfreaks.com.
        <br />
        <br /> Created By Muhammad Rafly Chairullah
      </p>
    </>
  );
};
