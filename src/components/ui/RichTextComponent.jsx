import React from "react";

const RichTextComponent = {
  types: {
    blocks: {
      h1: ({ children : any }) =>(
         <h1 className="text-4xl">{children}</h1>
      )
    }
  }
};

export default RichTextComponent;
