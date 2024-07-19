type User = {
  hasClaimedRAVT: boolean;
  // Add other properties as needed
  wallet: string;
  username: string;
  imageURL: string;
  userType: number;
  following: string[];
};


import { getRazzersContract } from "@/utils/contract";
import { readOnlyProvider } from "@/utils/provider";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import { useLatestBlock } from "./useLatestBlock";

const useGetStatus = () => {
  const [data, setData] = useState<User | null>(null);
  const { address } = useWeb3ModalAccount();

  const newBlock = useLatestBlock();

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const contract = getRazzersContract(readOnlyProvider);
        const res = await contract.users(address);
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };

    if (address) {
      fetchUserStatus();
    }
  }, [address,newBlock]);

  return data;
};

export default useGetStatus;
