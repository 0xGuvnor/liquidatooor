import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { task } from "hardhat/config";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

task("accounts", "Prints the list of accounts").setAction(
    async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment): Promise<void> => {
        const accounts: SignerWithAddress[] = await hre.ethers.getSigners();
        const provider = hre.ethers.provider;
        let id = 0;

        for (const account of accounts) {
            const balance = await provider.getBalance(account.address);
            console.log(
                `[${id < 10 ? "0" + id.toString() : id}] ${
                    account.address
                } -- ${hre.ethers.utils.formatEther(balance)} ETH`
            );
            id++;
        }
    }
);
