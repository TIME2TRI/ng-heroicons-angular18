import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseSolidIconComponent {
    constructor() {
        this.size = 24;
        this.color = "";
        this.class = "";
        this.svgClass = "";
        this.svgStyle = "";
        this.style = "";
    }
    ngOnChanges(changes) {
        const colorHasChanged = changes["color"]?.previousValue !== changes["color"]?.currentValue;
        const sizeHasChanged = changes["size"]?.previousValue !== changes["size"]?.currentValue;
        if (colorHasChanged || sizeHasChanged) {
            this.style = "";
            this.renderStyle();
        }
    }
    ngOnInit() {
        this.renderStyle();
    }
    renderStyle() {
        let style = [];
        if (this.size) {
            style.push(`width: ${this.size}px; height: ${this.size}px;`);
        }
        if (this.color) {
            style.push(`color: ${this.color};`);
        }
        this.style = this.svgStyle + style.join(' ');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: BaseSolidIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0", type: BaseSolidIconComponent, selector: "base-solid-icon", inputs: { size: "size", color: "color", class: "class", svgClass: "svgClass", svgStyle: "svgStyle" }, usesOnChanges: true, ngImport: i0, template: '.', isInline: true, styles: ["svg{height:inherit;width:inherit;color:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: BaseSolidIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'base-solid-icon', template: '.', changeDetection: ChangeDetectionStrategy.OnPush, styles: ["svg{height:inherit;width:inherit;color:inherit}\n"] }]
        }], ctorParameters: () => [], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], class: [{
                type: Input
            }], svgClass: [{
                type: Input
            }], svgStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zb2xpZC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi9jb21wb25lbnRzL2NvbW1vbi9iYXNlLXNvbGlkLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZNUcsTUFBTSxPQUFPLHNCQUFzQjtJQVNqQztRQVJTLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBRVYsQ0FBQztJQUVqQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGFBQWEsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxDQUFDO1FBQzNGLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxhQUFhLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQVksQ0FBQztRQUV4RixJQUFJLGVBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLGVBQWUsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDOzhHQW5DVSxzQkFBc0I7a0dBQXRCLHNCQUFzQixrTEFSdkIsR0FBRzs7MkZBUUYsc0JBQXNCO2tCQVZsQyxTQUFTOytCQUNFLGlCQUFpQixZQUNqQixHQUFHLG1CQUNJLHVCQUF1QixDQUFDLE1BQU07d0RBUXRDLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXNlLXNvbGlkLWljb24nLFxuICB0ZW1wbGF0ZTogJy4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVzOiBbYHN2ZyB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmFzZVNvbGlkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgc3ZnQ2xhc3M6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIHN2Z1N0eWxlOiBzdHJpbmcgPSBcIlwiO1xuXG4gIHB1YmxpYyBzdHlsZTogc3RyaW5nID0gXCJcIjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBjb2xvckhhc0NoYW5nZWQgPSBjaGFuZ2VzW1wiY29sb3JcIl0/LnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbXCJjb2xvclwiXT8uY3VycmVudFZhbHVlO1xuICAgIGNvbnN0IHNpemVIYXNDaGFuZ2VkID0gY2hhbmdlc1tcInNpemVcIl0/LnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbXCJzaXplXCJdPy5jdXJyZW50VmFsdWU7XG5cbiAgICBpZiAoY29sb3JIYXNDaGFuZ2VkIHx8IHNpemVIYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnN0eWxlID0gXCJcIjtcbiAgICAgIHRoaXMucmVuZGVyU3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlclN0eWxlKCk7XG4gIH1cblxuICByZW5kZXJTdHlsZSgpIHtcbiAgICBsZXQgc3R5bGU6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgc3R5bGUucHVzaChgd2lkdGg6ICR7dGhpcy5zaXplfXB4OyBoZWlnaHQ6ICR7dGhpcy5zaXplfXB4O2ApO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgc3R5bGUucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvcn07YCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZSA9IHRoaXMuc3ZnU3R5bGUgKyBzdHlsZS5qb2luKCcgJyk7XG4gIH1cbn0iXX0=