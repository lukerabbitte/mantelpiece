import { dummyArticles } from "@/dummy/dummy";
import Tray from "@/components/Tray";
import React from "react";

const UserPosts = () => {

  return (
    <div>
      <Tray articles={dummyArticles} />
    </div>
  );
};

export default UserPosts;
