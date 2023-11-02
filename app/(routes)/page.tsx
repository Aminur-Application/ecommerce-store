import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("7fa71f5c-54d5-4c39-bc08-c73340e7e642");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
