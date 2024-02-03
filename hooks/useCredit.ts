import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const useCredit = async (setCredit: Dispatch<SetStateAction<number>>) => {
  try {
    await axios
      .get<string>("/api/user")
      .then((res) => setCredit(parseInt(res.data)));
  } catch (error) {
    console.log("Invalid User.");
  }
};

export default useCredit;
