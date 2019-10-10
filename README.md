# Screeps

## Quick Setup

```sh
npm init
```

### Autocompletion JavaScript on VSCode

> * [Visual Studio Code Screeps autocomplete. Snippets](https://gitlab.com/snippets/1722234)
> * [screeps 系列教程5: 使用VSCode進行開發並添加自動補全](https://www.bilibili.com/read/cv3672843/)
> * [screeps 使用VSCode進行開發並添加自動補全](https://www.twblogs.net/a/5d480d90bd9eee541c3026fe)

```sh
npm install @types/screeps @types/lodash@3.10.1
```

> Alternative: Use **ScreepsAutocomplete**
>
> * [Howto: Getting VScode to pickup on ScreepsAutocomplete : screeps](https://www.reddit.com/r/screeps/comments/6s8rwz/howto_getting_vscode_to_pickup_on/)
>
> 1. Download [Garethp/ScreepsAutocomplete: Autocomplete for Screeps](https://github.com/Garethp/ScreepsAutocomplete) and place it in the same directory
> 2. Create `_reference.js` like this [ScreepsAutocomplete](https://gist.github.com/quonic/d7a7d385c85846027a7ca3dd03a0e985)
> 3. Create `jsconfig.json` to setup the JavaScript project and fill with `{ "compilerOptions": { "target": "ES6" }, "exclude": [ "node_modules" ] }`

### Committing Script

> * [Committing scripts using external tools | Screeps Documentation](https://docs.screeps.com/commit.html)
> * [Getting started - Grunt: The JavaScript Task Runner](https://gruntjs.com/getting-started#working-with-an-existing-grunt-project)

1. Install grunt CLI tool `npm install -g grunt-cli`
2. Install grunt and grunt-screeps `npm install grunt grunt-screeps grunt-contrib-watch`
3. Add the `Gruntfile.js` like [this](ExampleGruntfile.js)
4. Use `grunt screeps` to upload files!
5. Use `grunt (watch)` then it will listen all the modification and auto upload!

### Console Without Opening Game

> * [screeps 配置無需遊戲客戶端的開發環境](https://www.jianshu.com/p/ecfe39853306)
>   * [screepers/screeps-multimeter: The most useful tool on your screeps workbench.](https://github.com/screepers/screeps-multimeter)

1. Install `screeps-multimeter` by `npm install screeps-multimeter`
2. Run `multimeter` and it will ask for some information
   1. API token ([Authentication Tokens | Screeps Documentation](https://docs.screeps.com/auth-tokens.html))
   2. Shard name (the world you're in)
   3. Filename for configuration (default is `screeps-multimeter.json`)

> I've add `"scripts": { "start": "multimeter" }` in the `package.json`, so I can use `npm start` to invoke `multimeter`

## Resources

* [Screeps - MMO strategy sandbox game for programmers](https://screeps.com/)
  * [Screeps on Steam](https://store.steampowered.com/app/464350/Screeps/)
  * [Documents](https://docs.screeps.com/)
  * [Github organization](https://github.com/screeps)
* [**Tutorial in Sandbox**](https://screeps.com/a/#!/sim/tutorial)
  * [screeps/tutorial-scripts: Ready to use code examples from the Screeps tutorial](https://github.com/screeps/tutorial-scripts)
* [screeps/screeps: A standalone server for programming game Screeps](https://github.com/screeps/screeps)
* [Screeps Wiki | FANDOM powered by Wikia](https://screeps.fandom.com/wiki/Screeps_Wiki)

### Third Party

* [screepers](https://github.com/screepers) - Community Made Scripts for the Screeps Game
* [Third Party Tools | Screeps Documentation](https://docs.screeps.com/third-party.html)

Other Languages

* [screepers/cppreeps: WASM C++ Screeps API and utilities pack (beta, proof-of-concepts)](https://github.com/screepers/cppreeps)

### Game Turorial

* [YouTube - Screeps Nooby Guide](https://www.youtube.com/playlist?list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2)
* [YouTube - Let's Play Screeps with TypeScript and Visual Studio Code](https://www.youtube.com/playlist?list=PLCRhjmqETCePxmtB2mKScrJB_SCAI6jqw)

### Article

* [Screeps - 文集](https://www.jianshu.com/nb/38374718)
  * [Screeps 介紹及入坑](https://www.jianshu.com/p/da5ffe2c22ee)
* [Screeps: First Steps in Automating Room Planning - Jerroyd Moore](http://www.jerroydmoore.com/blog/screeps-first-steps-in-automating-room-planning)

### Others' Bots

* [KasamiBot | Autonomous Screeps AI](https://kasami.github.io/kasamibot/features.html)
  * [kasami/kasamibot: Autonomous bot for the programmer RTS-game Screeps](https://github.com/kasami/kasamibot)
* [screeps.space/hivemind: a screeps bot](https://git.estate/screeps.space/hivemind)
* [ScreepsQuorum/screeps-quorum: Screeps Self Managing and Playing Codebase](https://github.com/ScreepsQuorum/screeps-quorum)

## Appendix

### Other Scripting Game

* [Zachtronics](http://www.zachtronics.com/)
* [Halite AI Programming Challenge](https://www.halite.io/)

### Programming Language

#### JavaScript Tutorial

* [Codecademy - JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
* [freeCodeCamp - JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)

> * [Selecting last element in JavaScript array - Stack Overflow](https://stackoverflow.com/questions/9050345/selecting-last-element-in-javascript-array)

#### TypeScript

* [TypeScript - JavaScript that scales.](https://www.typescriptlang.org/)
  * [microsoft/TypeScript: TypeScript is a superset of JavaScript that compiles to clean JavaScript output.](https://github.com/microsoft/TypeScript)

TypeScript vs. JavaScript

* [Difference between TypeScript and JavaScript - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/)
* [Typescript vs JavaScript: What's the Difference?](https://www.guru99.com/typescript-vs-javascript.html)

### Gaming AI

Starcraft II

* [deepmind/pysc2: StarCraft II Learning Environment](https://github.com/deepmind/pysc2)

Hearthstone

* Competition
  * [AAIA'17 Data Mining Challenge](https://knowledgepit.ml/aaia17-data-mining-challenge/)
    * [[1708.00730] Helping AI to Play Hearthstone: AAIA'17 Data Mining Challenge](https://arxiv.org/abs/1708.00730)
    * [Helping AI to Play Hearthstone using Neural Networks](https://annals-csis.org/Volume_11/drp/pdf/561.pdf)
  * [The Hearthstone-AI Competition](https://dockhorn.antares.uberspace.de/wordpress/)
    * [[1906.04238] Introducing the Hearthstone-AI Competition](https://arxiv.org/abs/1906.04238)
    * [ADockhorn/HearthstoneAICompetition: Hearthstone-AI Comeptition 2019](https://github.com/ADockhorn/HearthstoneAICompetition)
* [HearthSim – Hearthstone Simulation & AI](https://hearthsim.info/)
  * [HearthSim/SabberStone: Just another Hearthstone Simulator in C# .Net Core, with some A.I. approaches!](https://github.com/HearthSim/SabberStone)
* [peter1591/hearthstone-ai: A Hearthstone AI based on Monte Carlo tree search and neural nets written in modern C++.](https://github.com/peter1591/hearthstone-ai)
