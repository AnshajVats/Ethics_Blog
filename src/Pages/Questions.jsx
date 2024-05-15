import React from "react";
import { SectionWrapper } from "../hoc";
import { Cards, StickyNavbar } from "../components";

const Questions = () => {
  return (
    <>
      <StickyNavbar />
      <div className="mt-40">
        <Cards />
      </div>
    </>
  );
};

export default Questions;
