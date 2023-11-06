"use client";

import PagingBar from "@/components/music-detail/shared/PagingBar";
import { useState } from "react";

function NewPlaylist() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <PagingBar
        currentPage={currentPage}
        onClick={setCurrentPage}
        maxPage={12}
      />
    </div>
  );
}

export default NewPlaylist;
