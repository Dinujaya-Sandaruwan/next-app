import React, { Suspense } from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable />
      </Suspense>
    </>
  );
};

export default UsersPage;
