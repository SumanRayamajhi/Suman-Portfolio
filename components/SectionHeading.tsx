import React from "react";

type SectionTypes = {
  title: string;
  description: string;
};

function SectionHeading({ title, description }: SectionTypes) {
  return (
    <div className="max-w-xl mx-auto mb-16 text-center">
      <h2 className="mb-2 h2 text-center text-5xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionHeading;
