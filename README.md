# Danger is near
<a href="https://www.buymeacoffee.com/anhfactor" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
## 📄 Overview

Danger is near (play to earn game, gamefi) - user play as a fireknight who go to forest and kill monster. User can earn $DANGER token and score to compete with others user.

- The contract code lives in the `/assembly` folder. 
- The game made by phaser framework

Both contract and client-side code will auto-reload as you change source files.
The contract get/save user score & using OpenBlimp library to implementation of the NEAR Fungible Token Standard, consisting of:
- NEP-141 Core: [NEP141](https://github.com/near/NEPs/blob/master/specs/Standards/FungibleToken/Core.md)
- NEP-145 Storage Management: [NEP145](https://github.com/near/NEPs/blob/master/specs/Standards/StorageManagement.md)
- NEP-148 Metadata: [NEP148](https://github.com/near/NEPs/blob/master/specs/Standards/FungibleToken/Metadata.md)

The demo from challenge Dacade courses "NEAR Development 101": [https://dacade.org/communities/near/courses/near-101/]

- [Demo Website](https://danger-is-near.vercel.app/).   
You can signup here to learn and earn crypto: https://dacade.org/signup?invite=anhfellow

## Technology stack

- `Next.js`
- `Near SDK`
- `OpenBlimp`
- `ChakraUI`
- `Phaser`

## Screenshots

- **Home Page**
  ![Home Page](./public/home1.png)
  ![Home Page](./public/home2.png)
- **Game play**
  ![Game Play](./public/game1.png)
- **User Vault**
  ![User Vault](./public/game2.png)
- **Wallet Token**
  ![Wallet Token](./public/game3.png)
- **Leaderboard**
  ![Leaderboard](./public/game4.png)
- **GameplayOverview**
  ![Gameplay Overview](./public/game5.png)

## Installing

To run this project locally:

1. Prerequisites: Make sure you have Node.js ≥ 12 installed (https://nodejs.org), then use it to install [yarn]: `npm install --global yarn` (or just `npm i -g yarn`)
2. Run the local development server: `yarn && yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet! Running `yarn start` will tell you the URL you can visit in your browser to see the app.


## Build and deploy your contract

1. Build the smart contract:
   `yarn build:contract`
2. Deploy the smart contract
   ` near deploy --acountId=<testnet account near> --wasmFile=out/main.wasm `
3. (Optional) In the `assembly/index.ts` file, you can modify the function ft_initialize` to replace the stub parameters with your own parameters.
4. Use near-cli to initialize your fungible token
   `near call <Your Contract Account> ft_initialize --account-id <Your Near Test Account Id>`
   (In the scripts folder you can find some files with a lot of useful commands.)
5. Mint some token in your address: `near call $CONTRACT ft_mint '{"account":$ID_ACCOUNT,"amount":"100"}' --account-id $ID_ACCOUNT`
6. Launch your Near wallet and begin interacting with your new token.
7. Set contract name in code
Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.
    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'your-contract-here!'
    
## ⚒️ Game Built With Phaser 3

#### 🕹️ [Phaser 3](https://phaser.io)
    
## 📝 Game Instructions

For the fire knight to be able to survive you need to dodge obstacles and kills monsters.

**To Jump** over obstacles you can use these following keys

```
    ⌨️ 'W' or 'SPACEBAR'
```

**To Attack** monsters you can use these following keys

```
    ⌨️ 'A' or  🖱️ 'LEFT MOUSE BUTTON'
```

**To Drop** faster (like Subway Surfer) you can use these following keys

```
    ⌨️ 'S' or  🖱️ 'RIGHT MOUSE BUTTON'
```

## 📜 Game Assets

### Background Art
**[Forest Lite Pixel Art Tileset](https://sanctumpixel.itch.io/forest-lite-pixel-art-tileset)**

![Background](https://img.itch.zone/aW1hZ2UvNTc3NzUzLzMwNDIzMDQuanBn/794x1000/9HA5HY.jpg)

### Character Art
**[Elemental Fire Knight](https://chierit.itch.io/elementals-fire-knight)**

![Elemental Fire Knight](https://img.itch.zone/aW1nLzcwMzM3MzAuZ2lm/original/6VKIcU.gif)

![Attack](https://img.itch.zone/aW1nLzcwMzM3NDguZ2lm/original/ILmFnV.gif)

![player_jump](https://img.itch.zone/aW1nLzcwMzM3MzEuZ2lm/original/hamsPG.gif)

![Death](https://img.itch.zone/aW1nLzcwMzM3NTQuZ2lm/original/GXvYCp.gif)

### Sound Effects

**[Super Dialogue Audio Pack](https://bckr.itch.io/sdap) (death) by Dillon Becker. This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**

![5exuIn](https://user-images.githubusercontent.com/64392568/106933921-7d43b580-66e7-11eb-9bca-3afb34d12080.jpg)

<br>

**Game Over SFX obtained from [Zapsplat](https://www.zapsplat.com)**

### Music

**Intro: [VGMA Challenge](https://tallbeard.itch.io/music-loop-bundle) (July 12th Challenge) by [Abstraction](http://www.abstractionmusic.com/)**

**Game: [A Mystical Journey](https://fatalexit.itch.io/a-mystical-journey-free-orchestral-soundtrack-music-for-games) by [FATAL EXIT](https://soundcloud.com/fatalexit). Licensed under CC BY 4.0.**


**Ending: [III. Finale: Slowly](https://freemusicarchive.org/music/Dee_Yan-Key/Lounge_Jazz_Symphony/03-1424456-Dee_Yan-Key-III_Finale__Slowly_1086) by [Dee Yan-Key](https://freemusicarchive.org/music/Dee_Yan-Key). This work is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)**

### Font
**[Arcadia](https://alexwan.itch.io/arcadia) by Alex Wan. This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**

![LKtY+p](https://user-images.githubusercontent.com/64392568/106933976-90568580-66e7-11eb-9f5d-50bdca8d1bf4.png)
