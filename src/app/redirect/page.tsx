import React from "react";

import { redirect } from "next/navigation";

const RedirectThing = () => {
  redirect("/");
  return <div>RedirectThing </div>;
};

export default RedirectThing;
