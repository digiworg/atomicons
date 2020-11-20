// Importing: Modules. 
import React from "react";

// Importing: Data.
import icons from "./Icons";

// Importing: Interfaces.
import AtomiconProps from "./Atomitypes";

// Declaring Atomicon Component.
export function Atomicon({ type, icon, theme }: AtomiconProps) {
  return (
    <>      
      <img src={icons[type][theme][icon]} alt=""/>
    </>
  );
}