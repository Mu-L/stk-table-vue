import { Ref } from 'vue';
import { PrivateRowDT, PrivateStkTableColumn, StkTableColumn } from './types';

/**
 * Table Columns Processing Hook
 * Handles multi-level header processing and column flattening
 */
export declare function useTableColumns<DT extends Record<string, any>>(virtualX: boolean, isRelativeMode: Ref<boolean>): readonly [import('vue').ShallowRef<PrivateStkTableColumn<PrivateRowDT>[][], PrivateStkTableColumn<PrivateRowDT>[][]>, import('vue').ShallowRef<PrivateStkTableColumn<PrivateRowDT>[][], PrivateStkTableColumn<PrivateRowDT>[][]>, (columns: StkTableColumn<DT>[]) => void];
