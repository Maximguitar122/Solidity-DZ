const { ethers } = require("hardhat");

async function main() {
    const Forum = await ethers.getContractFactory("Forum");

    const forum = await Forum.deploy();

    await forum.waitForDeployment();

    console.log("Contract address:", await forum.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});