import RequestTimeoutErrorPage from "@/pages/RequestTimeoutErrorPage";
import {
  Badge,
  Button,
  Card,
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Strong,
} from "@radix-ui/themes";
import axios from "axios";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";

const TopUpDialog = () => {
  const handlePaymentClick = async () => {
    try {
      const response = await axios.post("/api/createPayment");
      window.location.href = response.data.url;
    } catch (error) {
      return <RequestTimeoutErrorPage />;
    }
  };

  return (
    <DialogRoot>
      <DialogTrigger>
        <Button color="amber" size="1" className="bg-amber-300">
          Top Up
          <BiSolidPurchaseTag />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Top Up Credits</DialogTitle>
        <Flex width="100%" mb="3">
          <Card className="w-full">
            <Flex justify="between" align="center" width="100%">
              <Strong>30 Credits</Strong>
              <Flex justify="between" align="center" gap="3">
                <Badge size="2" color="amber" variant="solid">
                  <Strong>RM 2.99</Strong>
                </Badge>
                <Button size="2" onClick={handlePaymentClick} variant="classic">
                  Buy <FaCartPlus />
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
        <DialogClose>
          <Flex justify="end">
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Flex>
        </DialogClose>
      </DialogContent>
    </DialogRoot>
  );
};

export default TopUpDialog;
