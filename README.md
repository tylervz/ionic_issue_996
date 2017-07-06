This is a modified starter template for [Ionic](http://ionicframework.com/docs/) projects for demonstrating [issue 996](https://github.com/ionic-team/ionic-app-scripts/issues/996).

It is the blank Ionic app template, with an [extra package](https://github.com/tylervz/ionic_issue_996/blob/b030090567da1df2c47839f4b286bd2c60687b15/package.json#L27) installed, and an [extra service](https://github.com/tylervz/ionic_issue_996/blob/master/src/app/chart.service.ts) added.

Running `ionic cordova run android --prod` results in this error:
```
Module build failed: RangeError: Maximum call stack size exceeded
    at isFunctionLikeKind (<path>/newProject/node_modules/typescript/lib/typescript.js:7369:32)
    at Object.isFunctionLike (<path>/newProject/node_modules/typescript/lib/typescript.js:7366:24)
    at checkThisExpression (<path>/newProject/node_modules/typescript/lib/typescript.js:36506:20)
    at checkExpressionWorker (<path>/newProject/node_modules/typescript/lib/typescript.js:41279:28)
    at checkExpression (<path>/newProject/node_modules/typescript/lib/typescript.js:41257:42)
    at checkNonNullExpression (<path>/newProject/node_modules/typescript/lib/typescript.js:38398:37)
    at checkPropertyAccessExpressionOrQualifiedName (<path>/newProject/node_modules/typescript/lib/typescript.js:38455:24)
    at checkPropertyAccessExpression (<path>/newProject/node_modules/typescript/lib/typescript.js:38413:20)
    at checkExpressionWorker (<path>/newProject/node_modules/typescript/lib/typescript.js:41300:28)
    at checkExpression (<path>/newProject/node_modules/typescript/lib/typescript.js:41257:42)
 @ ./~/c3/c3.js 39:73-86 7688:8-56
 @ ./src/app/chart.service.ts
 @ ./src/app/app.module.ngfactory.ts
 @ ./src/app/main.ts
 ```

Downgrading the `typescript` package to version 2.2.2 resolves this issue.

Here is my system information:

> ionic info

global packages:

    @ionic/cli-utils : 1.4.0
    Cordova CLI      : 7.0.1 
    Ionic CLI        : 3.4.0

local packages:

    @ionic/app-scripts              : 1.3.12
    @ionic/cli-plugin-cordova       : 1.4.0
    @ionic/cli-plugin-ionic-angular : 1.3.1
    Cordova Platforms               : android 6.2.3
    Ionic Framework                 : ionic-angular 3.5.0

System:

    Node       : v7.2.1
    OS         : macOS Sierra
    Xcode      : Xcode 8.3.3 Build version 8E3004b 
    ios-deploy : 1.9.0 
    ios-sim    : 5.0.13 
    npm        : 3.10.9 
