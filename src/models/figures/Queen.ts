import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../img/BPawn.svg"
import whiteLogo from "../../img/WPawn.svg"

export class Bishop extends Figure {
    constructor(color:Colors, cell:Cell) {
        super(color,cell)
        this.logo = color=== Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.PAWN;
    }
}