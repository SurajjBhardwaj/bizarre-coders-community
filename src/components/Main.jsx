import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

const Main = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="min-h-[100vh]">
      <div className="grid place-items-center mt-48 gap-y-8  ">
        <h1 className="text-7xl h-full text-white text-center mt- font-bold">
          Breathing Code!
        </h1>

        <button className="ml-6 text-center p-1 text-white px-3 hover:opacity-70 btn font-bold">
          Explore
        </button>
      </div>

      <div className="mx-48">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Main;
