import { ref } from 'vue';
import type { useAreaSelection } from './useAreaSelection';
export { useAreaSelection } from './useAreaSelection';

type OnDemandFeature = {
    useAreaSelection: typeof useAreaSelection<any>;
};

function EMPTY_FN<T>(v?: T): () => T | void {
    return () => v;
}

export const ON_DEMAND_FEATURE: OnDemandFeature = {
    useAreaSelection: (...p: Parameters<typeof useAreaSelection<any>>) => {
        console.warn('useAreaSelection is not registered');
        return {
            isSelecting: ref(false),
            onSelectionMouseDown: EMPTY_FN(),
            getAreaSelectionClasses: EMPTY_FN<string[]>([]),
            getSelectedArea: EMPTY_FN({ rows: [], cols: [], range: null }),
            clearSelectedArea: EMPTY_FN(),
            copySelectedArea: EMPTY_FN(''),
        } as ReturnType<typeof useAreaSelection<any>>;
    },
};

export const registerFeature = (feature: Function) => {
    (ON_DEMAND_FEATURE as any)[feature.name] = feature as any;
};
