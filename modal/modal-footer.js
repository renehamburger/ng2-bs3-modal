import { Component, Input } from '@angular/core';
import { BsModalComponent } from './modal';
var BsModalFooterComponent = (function () {
    function BsModalFooterComponent(modal) {
        this.modal = modal;
        this.showDefaultButtons = false;
        this.dismissButtonLabel = 'Dismiss';
        this.closeButtonLabel = 'Close';
    }
    return BsModalFooterComponent;
}());
export { BsModalFooterComponent };
BsModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal-footer',
                template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" (click)=\"modal.dismiss()\">\n                {{dismissButtonLabel}}\n            </button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">\n                {{closeButtonLabel}}\n              </button>\n        </div>\n    "
            },] },
];
/** @nocollapse */
BsModalFooterComponent.ctorParameters = function () { return [
    { type: BsModalComponent, },
]; };
BsModalFooterComponent.propDecorators = {
    'showDefaultButtons': [{ type: Input },],
    'dismissButtonLabel': [{ type: Input },],
    'closeButtonLabel': [{ type: Input },],
};
//# sourceMappingURL=modal-footer.js.map