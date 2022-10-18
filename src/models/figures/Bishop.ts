import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../img/BBishop.svg"
import whiteLogo from "../../img/WBishop.svg"

export class Bishop extends Figure {
    constructor(color:Colors, cell:Cell) {
        super(color,cell)
        this.logo = color=== Colors.BLACK ? blackLogo : whiteLogo
        this.name =FigureNames.BUSHOP
    }
}