import React from "react";

const UserPage = async ({
  params,
}: {
  params: Promise<{ userid: string }>;
}) => {
  const { userid } = await params;
  return <div>{userid}</div>;
};

export default UserPage;
