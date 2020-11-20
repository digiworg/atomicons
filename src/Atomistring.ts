// Importing: Data.
import icons from "./Icons";

// Importing: Interfaces.
import AtomiconProps from "./Atomitypes";

// Declaring Atomicon Icon.
export function Atomistring({ type, icon, theme }: AtomiconProps) {
  return icons[type][theme][icon]
}