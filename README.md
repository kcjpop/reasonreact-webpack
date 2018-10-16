### ReasonReact + Webpack

ReasonReact starter project, with updated dependencies and scripts. `bs-json` and `bs-fetch` are included.

### To start

- `yarn install` (or use npm if you want)
- `yarn start`: This will automatically start webpack dev server at [http://localhost:8080/](http://localhost:8080/) and watch files for change.

### Enable Emmet for Reason in VSCode

Open Setting (Cmd + ,), then click on the three dot menu on the right, select `Open settings.json`. Paste the following:

```json
{
  "emmet.includeLanguages": {
    "reason": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true
}
```
