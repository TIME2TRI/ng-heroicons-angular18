import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseOutlineIconComponent {
    constructor() {
        this.size = 24;
        this.stroke = 1;
        this.color = "";
        this.class = "";
        this.svgClass = "";
        this.svgStyle = "";
        this.style = "";
    }
    ngOnChanges(changes) {
        const colorHasChanged = changes["color"]?.previousValue !== changes["color"]?.currentValue;
        const sizeHasChanged = changes["size"]?.previousValue !== changes["size"]?.currentValue;
        const strokeHasChanged = changes["stroke"]?.previousValue !== changes["stroke"]?.currentValue;
        if (colorHasChanged || sizeHasChanged || strokeHasChanged) {
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
        if (this.stroke) {
            style.push(`stroke-width: ${this.stroke}px;`);
        }
        this.style = this.svgStyle + style.join(' ');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: BaseOutlineIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0", type: BaseOutlineIconComponent, selector: "base-outline-icon", inputs: { size: "size", stroke: "stroke", color: "color", class: "class", svgClass: "svgClass", svgStyle: "svgStyle" }, usesOnChanges: true, ngImport: i0, template: `.`, isInline: true, styles: ["svg{height:inherit;width:inherit;color:inherit;stroke-width:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: BaseOutlineIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'base-outline-icon', template: `.`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["svg{height:inherit;width:inherit;color:inherit;stroke-width:inherit}\n"] }]
        }], ctorParameters: () => [], propDecorators: { size: [{
                type: Input
            }], stroke: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vdXRsaW5lLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliL2NvbXBvbmVudHMvY29tbW9uL2Jhc2Utb3V0bGluZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBYTVHLE1BQU0sT0FBTyx3QkFBd0I7SUFVbkM7UUFUUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQU0sR0FBb0IsQ0FBQyxDQUFDO1FBQzVCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFeEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUVWLENBQUM7SUFFakIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxhQUFhLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQztRQUMzRixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsYUFBYSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUM7UUFDeEYsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLENBQUM7UUFFOUYsSUFBSSxlQUFlLElBQUksY0FBYyxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxlQUFlLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OEdBeENVLHdCQUF3QjtrR0FBeEIsd0JBQXdCLHNNQVR6QixHQUFHOzsyRkFTRix3QkFBd0I7a0JBWHBDLFNBQVM7K0JBQ0UsbUJBQW1CLFlBQ25CLEdBQUcsbUJBQ0ksdUJBQXVCLENBQUMsTUFBTTt3REFTdEMsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXNlLW91dGxpbmUtaWNvbicsXG4gIHRlbXBsYXRlOiBgLmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtgc3ZnIHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgc3Ryb2tlLXdpZHRoOiBpbmhlcml0O1xuICB9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VPdXRsaW5lSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIEBJbnB1dCgpIHN0cm9rZTogbnVtYmVyIHwgc3RyaW5nID0gMTtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSBcIlwiO1xuICBASW5wdXQoKSBzdmdDbGFzczogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgc3ZnU3R5bGU6IHN0cmluZyA9IFwiXCI7XG5cbiAgcHVibGljIHN0eWxlOiBzdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGNvbG9ySGFzQ2hhbmdlZCA9IGNoYW5nZXNbXCJjb2xvclwiXT8ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1tcImNvbG9yXCJdPy5jdXJyZW50VmFsdWU7XG4gICAgY29uc3Qgc2l6ZUhhc0NoYW5nZWQgPSBjaGFuZ2VzW1wic2l6ZVwiXT8ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1tcInNpemVcIl0/LmN1cnJlbnRWYWx1ZTtcbiAgICBjb25zdCBzdHJva2VIYXNDaGFuZ2VkID0gY2hhbmdlc1tcInN0cm9rZVwiXT8ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1tcInN0cm9rZVwiXT8uY3VycmVudFZhbHVlO1xuXG4gICAgaWYgKGNvbG9ySGFzQ2hhbmdlZCB8fCBzaXplSGFzQ2hhbmdlZCB8fCBzdHJva2VIYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnN0eWxlID0gXCJcIjtcbiAgICAgIHRoaXMucmVuZGVyU3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlclN0eWxlKCk7XG4gIH1cblxuICByZW5kZXJTdHlsZSgpIHtcbiAgICBsZXQgc3R5bGU6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgc3R5bGUucHVzaChgd2lkdGg6ICR7dGhpcy5zaXplfXB4OyBoZWlnaHQ6ICR7dGhpcy5zaXplfXB4O2ApO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgc3R5bGUucHVzaChgY29sb3I6ICR7dGhpcy5jb2xvcn07YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0cm9rZSkge1xuICAgICAgc3R5bGUucHVzaChgc3Ryb2tlLXdpZHRoOiAke3RoaXMuc3Ryb2tlfXB4O2ApO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGUgPSB0aGlzLnN2Z1N0eWxlICsgc3R5bGUuam9pbignICcpO1xuICB9XG59Il19