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


// Declaring Atomicon Icon.
export function Atomistring({ type, icon, theme }: AtomiconProps) {
  return icons[type][theme][icon]
}