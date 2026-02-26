import { ComputedRef, ShallowRef } from 'vue';
import { StkTableColumn, UniqKey } from './types';

/**
 * 固定列fixed左侧或者右侧的距离
 * - col.fixed = left 则得到距离左侧的距离
 * - col.fixed = right 则得到距离右侧的距离
 */
export declare function useGetFixedColPosition<DT extends Record<string, any>>(tableHeadersForCalc: ShallowRef<StkTableColumn<DT>[][]>, colKeyGen: ComputedRef<(col: StkTableColumn<DT>) => UniqKey>): ComputedRef<(col: StkTableColumn<any>) => number>;
