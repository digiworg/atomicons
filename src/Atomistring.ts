// Importing: Data.
import icons from "./Icons";

// Declaring Atomicon Component Interface.
interface AtomiconProps {
  type: AtomiconPropType;
  theme: AtomiconPropTheme;
  icon: AtomiconPropIcon;
}

// Declaring Atomicon Prop Type Type.
type AtomiconPropType = "fluent_regular";

// Declaring Atomicon Prop Theme Type.
type AtomiconPropTheme = "dark" | "light";

// Declaring Atomicon Prop Icon Type.
type AtomiconPropIcon =
  | "admin"
  | "contacts"
  | "edit"
  | "euro"
  | "exit"
  | "export"
  | "eye"
  | "glasses"
  | "group"
  | "help"
  | "import"
  | "invisible_eye"
  | "menu";
  
// Declaring Atomicon Icon.
export function Atomistring({ type, icon, theme }: AtomiconProps) {
  return icons[type][theme][icon]
}