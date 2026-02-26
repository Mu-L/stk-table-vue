type OnDemandFeature = {};
export declare const ON_DEMAND_FEATURE: OnDemandFeature;
type Feature = OnDemandFeature[keyof OnDemandFeature];
export declare function registerFeature(feature: Feature | Feature[]): void;
export {};
