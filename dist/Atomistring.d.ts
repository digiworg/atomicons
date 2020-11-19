interface AtomiconProps {
    type: AtomiconPropType;
    theme: AtomiconPropTheme;
    icon: AtomiconPropIcon;
}
declare type AtomiconPropType = "material";
declare type AtomiconPropTheme = "dark" | "light";
declare type AtomiconPropIcon = "edit" | "eye" | "invisible_eye" | "menu" | "logout" | "avatar_male";
export declare function Atomistring({ type, icon, theme }: AtomiconProps): string;
export {};
