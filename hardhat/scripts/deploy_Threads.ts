import {ethers} from 'hardhat';

async function initialize_threads_contract() {
    const [deployer] = await ethers.getSigners();

    const contract = await ethers.deployContract('Threads');
    console.log('Deploying...');

    await contract.waitForDeployment();
    console.log('Awaiting...');

    console.table({
        contractName: 'Threads',
        address: await contract.getAddress(),
        deployer: deployer.address,
    });
}

initialize_threads_contract()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });