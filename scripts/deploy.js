const {ethers} = require("hardhat");
require("dotenv").config({path:".env"});

async function main(){

  const verifyContract = await ethers.getContractFactory("Verify");

  const deployedContract = await verifyContract.deploy();

  await deployedContract.deployed();

  console.log("Verify Contract Adddress is:",deployedContract.address);

  console.log("Sleeping...");
  await sleep(1000);

  await hre.run("verify:verify", {
    address: deployedContract.address,
    constructorArguments:[]
  })

}

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
.then(() => process.exit(0))
.catch((err) => {
  console.error(err);
  process.exit;
})