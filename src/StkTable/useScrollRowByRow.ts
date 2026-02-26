import { computed, customRef, onMounted, onUnmounted, Ref, watch } from 'vue';

export function useScrollRowByRow(props: any, tableContainerRef: Ref<HTMLElement | undefined>) {
    // let isMouseDown = false;
    let isAddListeners = false;
    /** record the last scroll bar position */
    // let lastScrollTop = 0;

    /** record is the scroll bar is dragging.debounce true to false */
    const isDragScroll = customRef((track, trigger) => {
        let value = false;
        let debounceTimer = 0;

        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                // Add debounce when change from true to false
                if (value && !newValue) {
                    if (debounceTimer) {
                        window.clearTimeout(debounceTimer);
                    }
                    debounceTimer = window.setTimeout(() => {
                        value = newValue;
                        trigger();
                        debounceTimer = 0;
                    }, 300);
                } else {
                    if (debounceTimer) {
                        window.clearTimeout(debounceTimer);
                        debounceTimer = 0;
                    }
                    value = newValue;
                    trigger();
                }
            },
        };
    });
    const onlyDragScroll = computed(() => props.scrollRowByRow === 'scrollbar');

    /** is ScrollRowByRow active */
    const isSRBRActive = computed(() => {
        if (onlyDragScroll.value) {
            return isDragScroll.value;
        }
        return props.scrollRowByRow;
    });

    watch(onlyDragScroll, v => {
        if (v) {
            addEventListener();
        } else {
            removeEventListener();
        }
    });

    onMounted(() => {
        addEventListener();
    });

    onUnmounted(() => {
        removeEventListener();
    });

    function addEventListener() {
        if (isAddListeners || !onlyDragScroll.value) return;
        const container = tableContainerRef.value;
        if (!container) return;
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseup', handleMouseUp);
        isAddListeners = true;
    }

    function removeEventListener() {
        const container = tableContainerRef.value;
        if (!container) return;
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseup', handleMouseUp);
        isAddListeners = false;
    }

    function handleMouseDown(e: Event) {
        const el = e.target as HTMLElement;
        if (el.classList.contains('stk-table')) {
            isDragScroll.value = true;
        }
    }

    function handleMouseUp() {
        isDragScroll.value = false;
    }

    return [isSRBRActive] as const;
}
