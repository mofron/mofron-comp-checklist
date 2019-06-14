# mofron-comp-checklist
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

checkbox list component for [mofron](https://mofron.github.io/mofron/).

# Install

```:bash
npm install mofron mofron-comp-checklist
```

# Sample
```html
<require>
    <tag module="mofron-comp-checklist">CheckList</tag>
</require>

<script run=init>
let chg_evt = (p1,p2,p3) => { console.log(p2); }
</script>

<CheckList changeEvent=chg_evt>
    <text>Check Box 1</text>
    <text>Check Box 2</text>
    <text>Check Box 3</text>
</CheckList>
```

# Parameter

| Simple<br>Param | Parameter Name     | Type                               |    Description                         |
|:---------------:|:-------------------|:-----------------------------------|:---------------------------------------|
|         ◯       | text               | string/mofron-comp-text/array      | checkbox text contents                 |
|                 | check              | boolean                            | true: check                            |
|                 |                    |                                    | false: uncheck                         |
|                 |                    | number                             | target index                           |
|                 | value              | boolean                            | same as 'check'                        |
|                 |                    | number                             | same as 'check'                        |
|                 | focus              | boolean                            | true: focus target check box           |
|                 |                    |                                    | false: defocus target check box        |
|                 |                    | number                             | target index                           |
|                 | status             | boolean                            | true: change enable mode (default)     |
|                 |                    |                                    | false: change disable mode             |
|                 |                    | number/undefined                   | target index / all targets             |
    
