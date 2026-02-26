import { Ref } from 'vue';
import { UniqKey } from './types';
import { HighlightDimCellOption, HighlightDimRowOption } from './types/highlightDimOptions';

/**
 * 高亮单元格，行
 */
export declare function useHighlight(props: any, stkTableId: string, tableContainerRef: Ref<HTMLDivElement | undefined>): readonly [import('vue').ComputedRef<number | null>, (rowKeyValues: UniqKey[], option?: HighlightDimRowOption) => void, (rowKeyValue: UniqKey, colKeyValue: string, option?: HighlightDimCellOption) => void];
