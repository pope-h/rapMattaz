"use client";

import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "@/utils/chain";
import { getProvider } from "@/utils/provider";
import { getBattleZoneContract, getRazzersContract } from "@/utils/contract";
import { toast } from "sonner";

type ErrorWithReason = {
  reason?: string;
  message?: string;
};

const useCreateBattle = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (opponent:any) => {
      if (!isSupportedChain(chainId)) return toast.warning("wrong network | Connect your wallet");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getBattleZoneContract(signer);

      try {
        const transaction = await contract.createBattle(opponent);
        const receipt = await transaction.wait();

        // console.log("receipt: ", receipt);

        if (receipt.status) {
          // return toast.success("created successfully!");
        }

        toast.error("registeration failed!");
      } catch (error: unknown) {
        // console.log(error);
        const err = error as ErrorWithReason;
        let errorText: string;

        if (err?.reason === "Only rappers can be challenged") {
          errorText = "only rappers can be challenged!";
        }
        else if (err?.reason === "Only rappers can create battles") {
          errorText = "only rappers can create battles";
        }
        else {
            // console.log(err?.message);
            
          errorText ="trying to resolve error!";
        }

        toast.warning(`Error: ${errorText}`);
      }
    },
    [chainId, walletProvider]
  );
};

export default useCreateBattle;
