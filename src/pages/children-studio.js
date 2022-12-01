import React, { useState } from "react";

import ChildrenTitle from "../components/childrenTitle";
import ChildrenDescription from "../components/childrenDescription"
import Loader from "../components/loader"

const playsApi = "http://theatre.restomatik.ru:1337/api/plays";

function ChildrenStudio() {
  const [scrollBlock, setScrollBlock] = useState();
  console.log(scrollBlock, 'scrollBlock')

  return (
    <main>
      <ChildrenTitle setScrollBlock={setScrollBlock} />
      <ChildrenDescription />
    </main>
  );
}

export default ChildrenStudio;
