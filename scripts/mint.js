const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xDba1Ec5BA4963845Be7f59c1C80672a5Cf3a3140";
  const receiverAddress = "0xbEEF5F20BCd8Cb86da852F648690AeAaDCb3C277";
  const quantity = 2;
  const value = ethers.parseEther("0.03");
  const baseURI =
    "https://gateway.pinata.cloud/ipfs/QmarShHg1QbwttVuXPSdjzyGMCx1R6ynj3hBUBU2paDZNC/";

  const batchNFTs = await ethers.getContractAt("BatchNFTs", contractAddress);

  await batchNFTs.setBaseURI(baseURI);
  const mintTokens = await batchNFTs.mint(receiverAddress, quantity, {
    value: value,
  });

  console.log(
    `Transaction Hash: https://sepolia.etherscan.io/tx/${mintTokens.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
