export var cellType;
(function (cellType) {
    cellType["UNSET"] = "unset";
    cellType["BLANK_HIDDEN"] = "blank-hidden";
    cellType["BLANK_FLAGGED"] = "blank-flagged";
    cellType["BLANK_REVEALED"] = "blank-revealed";
    cellType["BOMB_HIDDEN"] = "bomb-hidden";
    cellType["BOMB_FLAGGED"] = "bomb-flagged";
    cellType["BOMB_REVEALED"] = "bomb-revealed";
    cellType["RED_BOMB"] = "red-bomb";
})(cellType || (cellType = {}));
export var gameStatus;
(function (gameStatus) {
    gameStatus["READY"] = "ready";
    gameStatus["RUNNING"] = "running";
    gameStatus["WON"] = "won";
    gameStatus["LOST"] = "lost";
})(gameStatus || (gameStatus = {}));
//# sourceMappingURL=@types.js.map