# mofron-comp-checklist
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

checkbox list component for mofron


# Install
```
npm install mofron mofron-comp-checklist
```

# Sample
```html
<require>
    <tag load="mofron-comp-checklist">CheckList</tag>
</require>

<CheckList>
    <checkbox>check_1</checkbox>
    <checkbox>check_2</checkbox>
    <checkbox>check_3</checkbox>
</CheckList>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | text | mixed | string: text contents string |
| | | | mofron-comp-text: text contents component |
| | | | array: checkbox text contents list |
| | | | undefined: call as getter |
| | checkbox | mixed | string: text contents string |
| | | | mofron-comp-text: text contents component |
| | | | array: checkbox text contents list |
| | | | undefined: call as getter |
| | check | boolean | true: check |
| | | | false: uncheck |
| | | | undefined: call as getter |
| | | number | check target index |
| | value | boolean | the same as 'check' parameter |
| | | number | the same as 'check' parameter |
| | status | boolean | true: change enable mode (default) |
| | | | false: change disable mode |
| | | | undefined: call as getter |
| | clear | ||

