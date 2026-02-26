import { ShallowRef } from 'vue';

/**
 * 拖拽行
 * TODO: 不在虚拟滚动的情况下，从上面拖拽到下面，跨页的时候，滚动条会自适应位置。没有顶上去
 */
export declare function useTrDrag(props: any, emits: any, dataSourceCopy: ShallowRef<any[]>): readonly [(e: DragEvent, rowIndex: number) => void, (e: DragEvent) => void, (e: DragEvent) => void, (e: DragEvent, rowIndex: number) => void, (e: DragEvent) => void];
