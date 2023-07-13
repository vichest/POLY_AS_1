# Generate, Store, and Deploy NFT Collection Readme

This readme file provides instructions on how to generate a 5-item collection using DALLE 2 or Midjourney, store the items on IPFS using pinata.cloud, and deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet. It also includes information on mapping the NFT collection using the Polygon network token mapper, writing a hardhat script to batch mint all NFTs, transferring the NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge, and testing the balanceOf function on Mumbai.

## Table of Contents
- [Generate Images](#generate-images)
- [Store Images on IPFS](#store-images-on-ipfs)
- [Deploy NFT Contract](#deploy-nft-contract)
- [Mapping Your NFT Collection](#mapping-your-nft-collection)
- [Batch Mint NFTs](#batch-mint-nfts)
- [Batch Transfer NFTs to Polygon Mumbai](#batch-transfer-nfts-to-polygon-mumbai)
- [Test balanceOf on Mumbai](#test-balanceof-on-mumbai)

## Generate Images

To generate the images for your NFT collection, you can use either DALLE 2 or Midjourney. These are deep learning models capable of generating high-quality images based on prompts provided. Please refer to the respective documentation for instructions on setting up and using these models.

## Store Images on IPFS

After generating the images, you need to store them on IPFS using pinata.cloud. IPFS (InterPlanetary File System) is a distributed file system that enables decentralized storage and retrieval of files. Pinata.cloud is a service that simplifies the process of interacting with IPFS.

Follow these steps to store your images on IPFS using pinata.cloud:
1. Sign up for an account on pinata.cloud (if you don't have one).
2. Upload the generated images to pinata.cloud.
3. Retrieve the IPFS hash for each uploaded image.

Make sure to note down the IPFS hash for each image, as you will need them later.

## Deploy NFT Contract

To deploy your NFT contract, you have the option to choose between ERC721 or ERC1155 standards. These are Ethereum token standards specifically designed for creating non-fungible tokens (NFTs).

Follow these steps to deploy your NFT contract to the Goerli Ethereum Testnet:
1. Set up your development environment with an Ethereum development framework like Hardhat.
2. Write the smart contract code for your NFT collection, including the necessary functions such as minting and metadata management. Make sure to include a `promptDescription` function that returns the prompt used to generate the images.
3. Compile the smart contract using Hardhat.
4. Deploy the compiled contract to the Goerli Ethereum Testnet using Hardhat's deployment scripts or other deployment methods of your choice.
5. Take note of the deployed contract address for later use.

## Mapping Your NFT Collection

Mapping your NFT collection to the Polygon network is not necessary but can be helpful for visualization purposes. Polygon is a Layer 2 scaling solution for Ethereum that offers faster and cheaper transactions.

To map your NFT collection using the Polygon network token mapper, follow these steps:
1. Set up an account on the Polygon network.
2. Use the Polygon token mapper tool to map your ERC721 or ERC1155 contract to the Polygon network. This will allow your NFTs to be accessible on Polygon.
3. Once the mapping process is complete, take note of the new contract address on the Polygon network.

## Batch Mint NFTs

To batch mint all NFTs in your collection, you can use a Hardhat script. Hardhat is an Ethereum development environment that provides a comprehensive set of tools for compiling, testing, and deploying smart contracts.

Write a Hardhat script that performs the following steps:
1. Connect to the deployed NFT contract on the Goerli Ethereum Testnet using the contract address obtained earlier.
2. Call the minting function in a loop for each of the generated images, passing the IPFS hash and any additional metadata required.
3. Ensure that the minting function assigns a unique token ID to each NFT.

Once the script is ready, execute it using Hardhat to batch mint all the NFTs in your collection.

## Batch Transfer NFTs to Polygon Mumbai

To transfer the NFTs from Ethereum to Polygon Mumbai, you can use the FxPortal Bridge. The FxPortal Bridge is a bridge that facilitates the transfer of assets between Ethereum and Polygon networks.

Write a Hardhat script that performs the following steps:
1. Connect to the deployed NFT contract on the Goerli Ethereum Testnet.
2. Approve the NFTs to be transferred to the FxPortal Bridge contract. This step ensures that the bridge contract can move the NFTs on your behalf.
3. Deposit the NFTs to the FxPortal Bridge contract.
4. Wait for the bridging process to complete, which may take some time.

After the script finishes executing, the NFTs should be transferred to Polygon Mumbai.

## Test balanceOf on Mumbai

To test the balanceOf function on Mumbai and verify that the NFTs have been successfully transferred, follow these steps:
1. Connect to the NFT contract deployed on the Polygon Mumbai network using the contract address obtained during the mapping process.
2. Call the balanceOf function for the desired Ethereum address to check the number of NFTs owned by that address on Mumbai.

By testing the balanceOf function, you can ensure that the NFTs have been successfully transferred and are now accessible on the Polygon Mumbai network.

Feel free to reach out for any additional support or guidance. Happy NFT creation and deployment!
