import { useAreaSelection } from './features';

type OnDemandFeature = {
    useAreaSelection: typeof useAreaSelection<any>;
};
export declare const ON_DEMAND_FEATURE: OnDemandFeature;
type Feature = OnDemandFeature[keyof OnDemandFeature];
export declare const registerFeature: (feature: Feature | Feature[]) => void;
export {};
