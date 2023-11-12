import {Threads, Threads__factory} from '../../../hardhat/typechain-types';
import contract_config from '../config/contract.config';
import {ethers, Wallet, JsonRpcProvider} from 'ethers';

interface Web3ContextValue {
    Threads: Threads;
    signer: Wallet;
    provider: JsonRpcProvider;
}

export async function getContract () {
    const provider = new ethers.JsonRpcProvider(contract_config.provider_url);
    const signer = new ethers.Wallet(contract_config.Threads.deployer_private_key, provider);

    return {
        Threads: Threads__factory.connect(contract_config.Threads.address, signer),
        provider,
        signer,
    };
}