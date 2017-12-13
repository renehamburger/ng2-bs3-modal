import { Directive, ElementRef, Optional } from '@angular/core';
import { BsModalComponent } from '../modal/modal';
var BsAutofocusDirective = (function () {
    function BsAutofocusDirective(el, modal) {
        var _this = this;
        this.el = el;
        this.modal = modal;
        if (modal) {
            this.modal.onOpen.subscribe(function () {
                _this.el.nativeElement.focus();
            });
        }
    }
    return BsAutofocusDirective;
}());
export { BsAutofocusDirective };
BsAutofocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[autofocus]'
            },] },
];
/** @nocollapse */
BsAutofocusDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: BsModalComponent, decorators: [{ type: Optional },] },
]; };
//# sourceMappingURL=autofocus.js.map