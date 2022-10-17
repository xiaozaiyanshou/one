const hre = require("hardhat");
async function main() {
  const xiaozai = await ethers.getContractFactory("xiaozai");
  const Xiaozai = await xiaozai.deploy();
  await Xiaozai.deployed();

  console.log("xiaozai deployed to:", Xiaozai.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});