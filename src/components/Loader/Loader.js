import React from "react";
import css from "./Loader.module.css";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.Loader}>
      <div className={css.Spinner}></div>
      <Oval
        height={200}
        width={200}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p>Loading...</p>
    </div>
  );
}
