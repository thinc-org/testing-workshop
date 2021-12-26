import { useCallback, useState } from 'react'
import { ExhibitionData } from './data'
import { IExhibitionPage } from './types'

const useExhibitionData = (pageType: IExhibitionPage) => {
  const [page, setPage] = useState(0)
  const changePage = useCallback(() => {
    setPage((state) => state + 1)
  }, [])

  let data = null
  try {
    data = ExhibitionData[pageType].data
  } catch {}

  return {
    type: data ? data[page].type : null,
    contentData: data ? data[page].data : null,
    changePage,
  }
}

export default useExhibitionData
