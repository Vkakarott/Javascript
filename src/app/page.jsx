import React from "react";
import Card from "@/components/Card";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Conteiner from "@/components/Conteiner";

export default function Page() {
  return (
      <Main>
        <NavBar />
        <Conteiner>
          <Header />
          <Card />
        </Conteiner>
        <SideBar />
      </Main>
  );
}