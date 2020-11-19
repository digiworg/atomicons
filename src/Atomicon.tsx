// Importing: Modules. 
import React from "react";

// Importing: Data.
import icons from "./Icons";

// Declaring Atomicon Component Interface.
interface AtomiconProps {
  type: AtomiconPropType;
  theme: AtomiconPropTheme;
  icon: AtomiconPropIcon;
}

// Declaring Atomicon Prop Type Type.
type AtomiconPropType = "material";

// Declaring Atomicon Prop Theme Type.
type AtomiconPropTheme = "dark" | "light";

// Declaring Atomicon Prop Icon Type.
type AtomiconPropIcon =
  | "edit"
  | "eye"
  | "invisible_eye"
  | "menu"
  | "logout"
  | "avatar_male";

// Declaring Atomicon Component.
export function Atomicon({ type, icon, theme }: AtomiconProps) {
  return (
    <>      
      <img src={icons[type][theme][icon]} alt=""/>
    </>
  );
}