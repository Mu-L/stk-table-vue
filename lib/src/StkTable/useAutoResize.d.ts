import { Ref } from 'vue';

/**
 * 窗口变化自动重置虚拟滚动
 * @param tableContainerRef
 * @param initVirtualScroll
 * @param props
 * @param debounceMs
 */
export declare function useAutoResize(tableContainerRef: Ref<HTMLElement | undefined>, initVirtualScroll: () => void, props: any, debounceMs: number): void;
