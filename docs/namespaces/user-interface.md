# UserInterface Namespace

JSON builder functions for making custom module.

`UserInterface` and its methods are Lua-layer helpers, not native globals. The launcher resolves the generated JSON into native UI items, and every item type used here exists in 7.0.38, including `display_list`. Call methods with `:` and an instance created by `UserInterface.new`.

When a display list changes, the launcher sends the value as JSON in the form `{"index":0,"selected":"..."}`.

## Functions

| Function               | Params                                             | Return | Description |
| :-                     | :-                                                 | :-     | :-          |
| `UserInterface.new`    | `sub_name?:string`, `icon?:string`                 | `UserInterface` | Create new UI instance |
| `:addLabel`            | `text:string`                                      | `self` | Add label |
| `:addLabelApp`         | `text:string`, `icon?:string`                      | `self` | Add label with app style |
| `:addToggle`           | `text:string`, `default?:boolean`, `alias?:string`, `autosave?:boolean` | `self` | Add toggle switch |
| `:addToggleButton`     | `text:string`, `default?:boolean`, `alias?:string` | `self` | Add toggle button |
| `:addButton`           | `text:string`, `alias?:string`                     | `self` | Add button |
| `:addChildButton`      | `parent:table`, `text:string`, `alias?:string`     | `self` | Add button inside another element |
| `:addExpandableToggle` | `text:string`, `default?:boolean`, `alias?:string`, `always_expand?:boolean`, `background?:boolean` | `expandable_toggle:table` | Add expandable toggle (with children) |
| `:addChildToggle`      | `parent:table`, `text:string`, `default?:boolean`, `alias?:string`, `autosave?:boolean`, `background?:boolean` | `self` | Add toggle inside parent |
| `:addSlider`           | `text:string`, `min?:number`, `max?:number`, `default?:number`, `step?:number`, `use_dot?:boolean`, `alias?:string` | `self` | Add slider |
| `:addChildSlider`      | `parent:table`, `text:string`, `min_val?:number`, `max_val?:number`, `default_val?:number`, `step?:number`, `use_dot?:boolean`, `alias?:string` | `self` | Add slider as child |
| `:addTooltip`          | `text:string`, `support_text?:string`, `icon?:string`, `background?:boolean` | `self` | Add tooltip |
| `:addChildTooltip`     | `parent:table`, `text:string`, `support_text?:string`, `icon?:string`, `background?:boolean` | `self` | Add tooltip inside parent |
| `:addItemPicker`       | `text:string`, `item?:string`, `default?:string`, `alias?:string` | `self` | Add item picker |
| `:addChildItemPicker`  | `parent:table`, `text:string`, `item?:string`, `default?:string`, `alias?:string` | `self` | Add item picker inside parent |
| `:addInputInt`         | `text:string`, `default?:string`, `label?:string`, `placeholder?:string`, `icon?:string`, `alias?:string` | `self` | Add integer input |
| `:addChildInputInt`    | `parent:table`, `text:string`, `default?:string`, `label?:string`, `placeholder?:string`, `icon?:string`, `alias?:string` | `self` | Add int input as child |
| `:addInputString`      | `text:string`, `default?:string`, `label?:string`, `placeholder?:string`, `icon?:string`, `alias?:string` | `self` | Add text input |
| `:addChildInputString` | `parent:table`, `text:string`, `default?:string`, `label?:string`, `placeholder?:string`, `icon?:string`, `alias?:string` | `self` | Add string input as child |
| `:addDialog`           | `text:string`, `support_text?:string`, `menu_items?:table` | `dialog:table` | Add dialog |
| `:addDivider`          | -                                                  | `self` | Add divider |
| `:addDisplayList`      | `text:string`, `default?:string`, `alias?:string`  | `self` | Add display list |
| `:addTileSelect`       | `text:string`, `default?:string`, `alias?:string`, `count?:number` | `self` | Add tile select |
| `:generateJSON`        | -                                                  | `json:string` | Generate JSON for UI |
| `:tableToJSON`         | `t:table`, `indent?:string`                        | `json:string` | Convert table to JSON string |
| `:printJSON`           | -                                                  | - | Print JSON to console |
