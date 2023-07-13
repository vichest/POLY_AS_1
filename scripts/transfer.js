const { ethers } = require("hardhat");
const {
  FXRootContractAbi,
} = require("/Users/sanjitpandit/Desktop/erc721a-implementation/artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/BatchNFTs.sol/BatchNFTs.json");
require("dotenv").config();

async function main() {
  const networkAddress =
    "https://eth-sepolia.g.alchemy.com/v2/tbG-68_qjk99I8BdZc7uv-ZV87gVlpvp";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const NFT = await ethers.getContractFactory("BatchNFTs");
  const nft = await NFT.attach("0xcC22949cafD62E5040f7B81EE8cc522669bcC792");

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");
    await depositTx.wait();
  }

  console.log("Approved and deposited");

  const balance = await nft.balanceOf(wallet.address);

  console.log("wallet balance", wallet.address, "is: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
