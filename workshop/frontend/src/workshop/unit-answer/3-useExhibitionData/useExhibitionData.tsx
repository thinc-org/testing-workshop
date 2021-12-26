import { useCallback, useState } from "react";
import { ExhibitionData } from "./data";
import { IExhibitionPage } from "./types";

const useExhibitionData = (pageType: IExhibitionPage) => {
  const [page, setPage] = useState(0);
  let data = null;
  try {
    data = ExhibitionData[pageType].data;
  } catch {}

  const changePage = useCallback(() => {
    if (page + 1 < data?.length) {
      setPage((state) => state + 1);
    }
  }, [page]);

  return {
    type: data ? data[page].type : null,
    contentData: data ? data[page].data : null,
    changePage,
  };
};

export default useExhibitionData;
