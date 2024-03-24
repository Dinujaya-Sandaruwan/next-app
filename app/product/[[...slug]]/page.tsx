import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const page = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <div>
      page {slug} {sortOrder}
    </div>
  );
};

export default page;
