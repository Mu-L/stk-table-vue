import { Ref, ShallowRef } from 'vue';
import { AreaSelectionRange, CellKeyGen, ColKeyGen, RowKeyGen, StkTableColumn, UniqKey } from './types';
import { VirtualScrollStore, VirtualScrollXStore } from './useVirtualScroll';

type Params<DT extends Record<string, any>> = {
    props: any;
    emits: any;
    tableContainerRef: Ref<HTMLDivElement | undefined>;
    dataSourceCopy: ShallowRef<DT[]>;
    tableHeaderLast: ShallowRef<StkTableColumn<DT>[]>;
    rowKeyGen: RowKeyGen;
    colKeyGen: ColKeyGen;
    cellKeyGen: CellKeyGen;
    scrollTo: (top: number | null, left: number | null) => void;
    virtualScroll: Ref<VirtualScrollStore>;
    virtualScrollX: Ref<VirtualScrollXStore>;
};
/**
 * 单元格拖拽选区
 */
export declare function useAreaSelection<DT extends Record<string, any>>({ props, emits, tableContainerRef, dataSourceCopy, tableHeaderLast, colKeyGen, cellKeyGen, scrollTo, virtualScroll, virtualScrollX, }: Params<DT>): {
    selectionRange: Ref<AreaSelectionRange | null, AreaSelectionRange | null>;
    isSelecting: Ref<boolean, boolean>;
    selectedCellKeys: import('vue').ComputedRef<Set<string>>;
    normalizedRange: import('vue').ComputedRef<{
        minRow: number;
        maxRow: number;
        minCol: number;
        maxCol: number;
    } | null>;
    keyboardEnabled: import('vue').ComputedRef<any>;
    onSelectionMouseDown: (e: MouseEvent) => void;
    getAreaSelectionClasses: (cellKey: string, absoluteRowIndex: number, colKey: UniqKey) => string[];
    getSelectedArea: () => {
        rows: DT[];
        cols: StkTableColumn<DT>[];
        range: null;
    } | {
        rows: DT[];
        cols: StkTableColumn<DT>[];
        range: {
            startRowIndex: number;
            startColIndex: number;
            endRowIndex: number;
            endColIndex: number;
        };
    };
    clearSelectedArea: () => void;
    copySelectedArea: () => string;
};
export {};
