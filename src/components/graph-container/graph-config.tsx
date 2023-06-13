import { CSSProperties } from "react";


export const canvasStyling: CSSProperties = {
    width: "100%",
    height: "100%",
    margin: "0px auto",
    display: "block",
    position: 'relative',
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    zIndex: 15,
};

export const graphLayoutConfiguration = {
    name: "cose-bilkent",
    refresh: 15,
    edgeElasticity: 0.45,
    gravity: 0.25,
};