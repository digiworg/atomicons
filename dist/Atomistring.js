// Importing: Data.
import icons from "./Icons";
// Declaring Atomicon Icon.
export function Atomistring(_a) {
    var type = _a.type, icon = _a.icon, theme = _a.theme;
    return icons[type][theme][icon];
}
