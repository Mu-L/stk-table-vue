import { ref } from 'vue';
import { useAreaSelection } from './features';

type OnDemandFeature = {
    useAreaSelection: typeof useAreaSelection<any>;
};

export const ON_DEMAND_FEATURE: OnDemandFeature = {
    useAreaSelection: (() => {
        console.warn('useAreaSelection is not registered');
        return {
            isSelecting: ref(false),
            onMD: () => {},
            getClass: () => [],
            get: () => ({ rows: [], cols: [], range: null }),
            clear: () => {},
            copy: () => '',
        };
    }) as typeof useAreaSelection<any>,
};

export const registerFeature = (feature: OnDemandFeature[keyof OnDemandFeature]) => {
    (ON_DEMAND_FEATURE as any)[feature.name] = feature as any;
};
