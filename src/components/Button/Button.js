import React from "react";
import { 
    BaseButton, 
    ButtonCreate, 
    ButtonEdit, 
    ButtonDelete 
} from "./Button.styles";

export const Button = (props) => {
    const {variant, text, disabled, onClick} = props;

    const attributes = {
        onClick: onClick || null,
        disabled: disabled || false,
    }

    const buttonTypes = {
        "create": <ButtonCreate {...attributes}>{text || "Ajouter"}</ButtonCreate>,
        "edit": <ButtonEdit {...attributes}>{text || "Editer"}</ButtonEdit>,
        "delete": <ButtonDelete {...attributes}>{text || "Supprimer"}</ButtonDelete>,
        "default": <BaseButton {...attributes}>{text || "Enregistrer"}</BaseButton>,
    }

    return buttonTypes[variant] || buttonTypes["default"];
}