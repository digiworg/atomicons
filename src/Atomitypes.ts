// Declaring Atomicon Component Interface.
export default interface AtomiconProps {
  type: AtomiconPropType;
  theme: AtomiconPropTheme;
  icon: AtomiconPropIcon;
}

// Declaring Atomicon Prop Type Type.
type AtomiconPropType = "fluent.regular";

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
| "invisibleEye"
| "menu";