import { ColKeyGen, StkTableColumn } from './types';

/**
 * 列顺序拖动
 * @returns
 */
export declare function useThDrag(props: any, emits: any, colKeyGen: ColKeyGen): readonly [(e: DragEvent) => void, (e: DragEvent) => void, (e: DragEvent) => void, (col: StkTableColumn<any>) => any];
