import React from "react";
import Card from "./Card";
import kamal from "../dukan/Kamal.jpg";
import agrim from "../dukan/Agrim.jpg";
import mehak from "../dukan/mehak.png";
import simar from "../dukan/Simar.jpg";
import aryan from "../dukan/Aryan.jpg";
import suraj from "../dukan/Suraj.png";

const Team = (props) => {
  return (
    <div className="bg-slate-900 pt-8 my-12">
      <h1 className="text-2xl text-center font-semibold   text-white p-2 mx-[550px] bg-blue-400 rounded-3xl">
        Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 justify-center place-items-center">
        <Card
          name="Kamal Nayan"
          img={kamal}
          github={`https://github.com/saka015`}
          linkedin={"https://www.linkedin.com/in/saka015/"}
        />
        <Card
          name="Agrim Sharma"
          img={agrim}
          github={`https://github.com/Agrim-Sharma174`}
          linkedin={"https://www.linkedin.com/in/agrim-sharma174/"}
        />
        <Card
          name="Mehak"
          img={mehak}
          github={`https://github.com/mehak-2`}
          linkedin={"https://www.linkedin.com/in/mehak-45a190245"}
        />
        <Card
          name="Suraj Pandey"
          img={suraj}
          github={`https://github.com/SurajjBhardwaj`}
          linkedin={"https://www.linkedin.com/in/surajjbhardwaj"}
        />
        <Card
          name="Simar Sidhu"
          img={simar}
          github={`https://github.com/simsid124`}
          linkedin={"https://www.linkedin.com/in/simar-sidhu-828333246/"}
        />
        <Card
          name="Aryan Sharma"
          img={aryan}
          github={`https://github.com/aryan-codes-star`}
          linkedin={"https://www.linkedin.com/in/aryan-sharma17/"}
        />
      </div>
    </div>
  );
};

export default Team;
