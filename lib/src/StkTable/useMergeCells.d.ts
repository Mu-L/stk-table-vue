import { Ref, ShallowRef } from 'vue';
import { ColKeyGen, MergeCellsParam, PrivateStkTableColumn, RowActiveOption, RowKeyGen, UniqKey } from './types';

export declare function useMergeCells(rowActiveProp: Ref<RowActiveOption<any>>, tableHeaderLast: ShallowRef<PrivateStkTableColumn<any>[]>, rowKeyGen: RowKeyGen, colKeyGen: ColKeyGen, virtual_dataSourcePart: ShallowRef<any[]>): readonly [Ref<Record<UniqKey, Set<UniqKey>> | null, Record<UniqKey, Set<UniqKey>> | null>, (row: MergeCellsParam<any>["row"], col: MergeCellsParam<any>["col"], rowIndex: MergeCellsParam<any>["rowIndex"], colIndex: MergeCellsParam<any>["colIndex"]) => {
    colspan?: number;
    rowspan?: number;
} | undefined, Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>, (rowKey: UniqKey | undefined) => void, Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>, (clear?: boolean, rowKey?: UniqKey) => void];
