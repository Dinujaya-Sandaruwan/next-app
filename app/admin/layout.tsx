import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <aside className="bg-slate-200 p-5 m-5">Admin Sidebar</aside>
      <main className="pt-5 mt-5">{children}</main>
    </div>
  );
};

export default AdminLayout;
