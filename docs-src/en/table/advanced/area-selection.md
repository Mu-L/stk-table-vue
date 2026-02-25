# Area Selection <Badge type="tip" text="^0.10.0" /> <Badge type="warning" text="Need Register" /> 
Enable table cell drag selection through `props.areaSelection`.
- Support copying to clipboard (Ctrl/Cmd + C).
- Esc to cancel selection
- Support keyboard selection (arrow keys, Shift, Tab).

::: tip Need Registration 
This feature needs to be registered before use.
:::
Registration method:
```ts
import { registerFeature, useAreaSelection } from 'stk-table-vue';
// Register area selection feature
registerFeature(useAreaSelection);
```



```js
<StkTable
    area-selection // [!code ++]
></StkTable>
```

<demo vue="advanced/area-selection/AreaSelection.vue" github="https://github.com/ja-plus/stk-table-vue/tree/master/docs-demo/advanced/area-selection/AreaSelection.vue"></demo>

## Emit
- [area-selection-change Triggered when area changes](/en/api/emits.html#area-selection-change) 

## Exposed
- [getSelectedArea](/en/api/expose.md#getselectedarea)
- [clearSelectedArea](/en/api/expose.md#clearselectedarea)
- [copySelectedArea](/en/api/expose.md#copyselectedarea)