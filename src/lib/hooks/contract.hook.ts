import {useContext} from "react";
import {Web3Context} from "../context/contract.context";
import {BrowserProvider, ethers, JsonRpcSigner} from 'ethers'
import contract_config from '../config/contract.config'

export function useContracts() {
    const context = useContext(Web3Context);
    if (context === undefined) throw new Error('useWeb3 must be used within a Web3Provider');
    return context;
}

type IUseMetamask = { metaProvider: BrowserProvider, metaSigner: JsonRpcSigner };

export async function useMetamask(): Promise<IUseMetamask> { // @ts-ignore
    const metaProvider = new ethers.BrowserProvider(window.ethereum, contract_config.chainId)
    const metaSigner = await metaProvider.getSigner();
    return {metaProvider, metaSigner}
}

export async function isCorrectNetwork(metaProvider: ethers.BrowserProvider | null) {
    if (!metaProvider) return console.log('No MetaMask provider available.');
    try {
        const network = await metaProvider.getNetwork();
        console.log(network);
        return network.chainId.toString() === contract_config.chain_id.toString();
    } catch (e) {
        return console.error('Error getting network information:', e);
    }
}

const Exports = {
    useContracts,
    useMetamask,
    isCorrectNetwork,
};

export default Exports

