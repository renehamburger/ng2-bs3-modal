var BsModalSize = (function () {
    function BsModalSize() {
    }
    BsModalSize.isValidSize = function (size) {
        return size && (size === BsModalSize.Small || size === BsModalSize.Large);
    };
    return BsModalSize;
}());
export { BsModalSize };
BsModalSize.Small = 'sm';
BsModalSize.Large = 'lg';
//# sourceMappingURL=modal-size.js.map