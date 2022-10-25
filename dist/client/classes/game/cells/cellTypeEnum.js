var cellType;
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
export default cellType;
//# sourceMappingURL=cellTypeEnum.js.map