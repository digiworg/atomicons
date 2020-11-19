// Importing: Modules. 
import React from "react";
// Importing: Data.
import icons from "./Icons";
// Declaring Atomicon Component.
export function Atomicon(_a) {
    var type = _a.type, icon = _a.icon, theme = _a.theme;
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { src: icons[type][theme][icon], alt: "" })));
}
