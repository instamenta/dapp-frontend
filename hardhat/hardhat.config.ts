import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: '0.8.21',
    networks: {
        hardhat: {
            chainId: 1337,
            blockGasLimit: 6000000,
        },
    }

};

export default config;
