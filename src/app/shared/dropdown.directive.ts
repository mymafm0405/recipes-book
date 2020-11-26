import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') menuClick(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}