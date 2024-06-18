import { ethers } from "ethers";

export function createRandomWallet() {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
  };
}
