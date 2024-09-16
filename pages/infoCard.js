import React from "react";
import CardInformationProducts from "../components/CardInformationProducts";
import { products } from "./api/products";

const InfoCardGeneral = () => {
  return (
    <>
      <CardInformationProducts props={products} />
    </>
  );
};

export default InfoCardGeneral;
