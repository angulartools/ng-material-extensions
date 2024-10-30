import { PropertyOptions } from './property-options';
import { DoCheck } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableFilter } from './mat-table-filter.enum';
import { MatTableFilterService } from './services/mat-table-filter.service';
import * as i0 from "@angular/core";
export declare class MatTableFilterDirective implements DoCheck {
    private _filterService;
    private _table;
    private _oldExampleEntity;
    exampleEntity: any;
    /**
     * in millis
     */
    debounceTime: number;
    filterType: MatTableFilter;
    caseSensitive: boolean;
    customPredicate: (data: any) => boolean;
    propertyOptions: PropertyOptions;
    private _exampleEntitySubject;
    constructor(_filterService: MatTableFilterService, _table: MatTable<any>);
    ngDoCheck(): void;
    private initDebounceSubject;
    private updateFilterPredicate;
    private getFilterPredicate;
    private getMatDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTableFilterDirective, [null, { optional: true; host: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatTableFilterDirective, "[matTableFilter]", ["matTableFilter"], { "exampleEntity": { "alias": "exampleEntity"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "filterType": { "alias": "filterType"; "required": false; }; "caseSensitive": { "alias": "caseSensitive"; "required": false; }; "customPredicate": { "alias": "customPredicate"; "required": false; }; "propertyOptions": { "alias": "propertyOptions"; "required": false; }; }, {}, never, never, false, never>;
}
