import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <Link href="/dashboard">
      <div> To DashBoard</div>
    </Link>
  );
};

export default page;
