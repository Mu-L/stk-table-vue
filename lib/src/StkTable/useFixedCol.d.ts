import { ComputedRef, Ref, ShallowRef } from 'vue';
import { StkTableColumn, UniqKey } from './types';
import { VirtualScrollXStore } from './useVirtualScroll';

/**
 * 固定列处理
 * @returns
 */
export declare function useFixedCol<DT extends Record<string, any>>(props: any, colKeyGen: ComputedRef<(col: StkTableColumn<DT>) => UniqKey>, getFixedColPosition: ComputedRef<(col: StkTableColumn<DT>) => number>, tableHeaders: ShallowRef<StkTableColumn<DT>[][]>, tableHeadersForCalc: ShallowRef<StkTableColumn<DT>[][]>, tableContainerRef: Ref<HTMLDivElement | undefined>): readonly [ShallowRef<StkTableColumn<DT>[], StkTableColumn<DT>[]>, ComputedRef<Map<any, any>>, (virtualScrollX?: Ref<VirtualScrollXStore>) => void];
