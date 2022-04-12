# danger-is-near

# 📄 Introduction

<p align="center">
<img width="1392" alt="Screen Shot 2022-03-28 at 13 07 41" src="https://user-images.githubusercontent.com/13186215/160338037-c64c7032-82f3-493e-9bdd-f1c177b0aaf4.png">
</p>

- Danger is near (play to earn game, gamefi) - user play as a fireknight who go to forest and kill monster. User can earn $DANGER token and score to compete with others user.

- User vault:

<p align="center">
<img width="1385" alt="Screen Shot 2022-03-28 at 13 08 09" src="https://user-images.githubusercontent.com/13186215/160338114-e2a6a4bd-89b8-40a3-adb2-51efb574022b.png">
</p>

- Wallet token $DANGER:

<p align="center">
<img width="617" alt="Screen Shot 2022-03-28 at 13 15 28" src="https://user-images.githubusercontent.com/13186215/160338145-2304a1a2-5b9b-468d-b170-aa11231b481d.png">
</p>

- Leaderboard:
<p align="center">
<img width="1394" alt="Screen Shot 2022-03-28 at 13 07 59" src="https://user-images.githubusercontent.com/13186215/160340216-ecc203b1-45d7-4c08-8be8-976b9ddf444f.png">
</p>

GAMEPLAY OVERVIEW
===========

<p align="center">
<img alt="Screen Shot 2022-03-28 at 13 07 59" src="https://user-images.githubusercontent.com/13186215/160346031-9658de67-a732-40b9-a9f4-9e89a44e286f.png">
</p>

Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you have Node.js ≥ 12 installed (https://nodejs.org), then use it to install [yarn]: `npm install --global yarn` (or just `npm i -g yarn`)
2. Run the local development server: `yarn && yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet! Running `yarn start` will tell you the URL you can visit in your browser to see the app.

Exploring The Code
==================

1. The backend code lives in the `/assembly` folder. 
2. The frontend code lives in the `/src` folder. [/src/index.html](/src/index.html) is a great place to start exploring. Note that it loads in `/src/index.js

Both contract and client-side code will auto-reload as you change source files.
The contract using OpenBlimp to implementation of the NEAR Fungible Token Standard, consisting of:
- NEP-141 Core: [NEP141](https://github.com/near/NEPs/blob/master/specs/Standards/FungibleToken/Core.md)
- NEP-145 Storage Management: [NEP145](https://github.com/near/NEPs/blob/master/specs/Standards/StorageManagement.md)
- NEP-148 Metadata: [NEP148](https://github.com/near/NEPs/blob/master/specs/Standards/FungibleToken/Metadata.md)


## Build and deploy your Fungible Token $DANGER

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
