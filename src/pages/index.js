import React from "react";
import Header from "../components/header";
import Repos from "../components/repos";
import Codigofacilito from "../components/codigofacilito";
import Medium from '../components/medium';
import Ednav from '../components/education-nav';


export default function Home() {
  return <div>
    <Header />
    <Ednav />
    <Repos />
    <Codigofacilito />
    <Medium />
  </div>
}
