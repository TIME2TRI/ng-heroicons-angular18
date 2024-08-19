import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseOutlineIconComponent implements OnInit, OnChanges {
    size: number;
    stroke: number | string;
    color: string;
    class: string;
    svgClass: string;
    svgStyle: string;
    style: string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    renderStyle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseOutlineIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseOutlineIconComponent, "base-outline-icon", never, { "size": { "alias": "size"; "required": false; }; "stroke": { "alias": "stroke"; "required": false; }; "color": { "alias": "color"; "required": false; }; "class": { "alias": "class"; "required": false; }; "svgClass": { "alias": "svgClass"; "required": false; }; "svgStyle": { "alias": "svgStyle"; "required": false; }; }, {}, never, never, false, never>;
}
