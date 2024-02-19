let color = "black";

switch (color) {
    case "red":
        message = "stop"
        break;
    case "yellow":
    case "orange":
    case "purple":
    case "black":
        message = "break";
        break;
    default:
        throw Error("colore non gestito")
}