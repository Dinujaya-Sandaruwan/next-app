import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const UserDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <p>User {id}</p>
      <p>Photo {photoId}</p>
    </>
  );
};

export default UserDetailPage;
