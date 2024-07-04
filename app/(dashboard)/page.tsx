import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <>
      <p className="py-3">this is authenticate route </p>
      <UserButton afterSwitchSessionUrl="/" />
    </>
  );
};

export default page;
