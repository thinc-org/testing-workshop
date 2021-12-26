// thinc-org/lawfest-2021
import { renderHook, act } from "@testing-library/react-hooks";
import useExhibitionData from "./useExhibitionData";

describe("useExhibitionData", () => {
  const mockPageType = "what-is-hope";
  const MockWhatIsHope = [
    {
      type: "text",
      data: {
        quote: "What is Hope?",
      },
    },
    {
      type: "textArea",
      data: {
        question: "สำหรับคุณแล้ว ความหวังคืออะไร ?",
      },
    },
  ];
  jest.doMock("./data", () => ({
    ExhibitionData: {
      [mockPageType]: {
        data: MockWhatIsHope,
        title: "What is Hope?",
        quote: "Where there is hope,\n there is life",
        quoteOwner: "Anne frank",
      },
    },
  }));

  it.each`
    pageType          | expectedType | expectedContent
    ${"what-is-hope"} | ${"text"}    | ${{ quote: "What is Hope?" }}
  `(
    `Should call useExhibitionData correctly and result expected result when pageType is $pageType`,
    ({ pageType, expectedType, expectedContent }) => {
      const { result } = renderHook(() => useExhibitionData(pageType));
      expect(result.current.type).toMatch(expectedType);
      expect(result.current.contentData).toEqual(expectedContent);
      expect(result.current.changePage).toBeDefined();
    }
  );

  it("Should change page correctly without concern", () => {
    const { result } = renderHook(() => useExhibitionData(mockPageType));

    const expectedType = "textArea";
    const expectedContentData = {
      question: "สำหรับคุณแล้ว ความหวังคืออะไร ?",
    };

    act(() => {
      result.current.changePage();
    });
    expect(result.current.type).toMatch(expectedType);
    expect(result.current.contentData).toEqual(expectedContentData);

    act(() => {
      result.current.changePage();
    });
    expect(result.current.type).toMatch(expectedType);
    expect(result.current.contentData).toEqual(expectedContentData);

    act(() => {
      result.current.changePage();
    });
    expect(result.current.type).toMatch(expectedType);
    expect(result.current.contentData).toEqual(expectedContentData);
  });

  it("Should return null if pageType is not a key of ExhibitionData", () => {
    const mockPageType = "UNKNOWN_KEY";
    const { result } = renderHook(() => useExhibitionData(mockPageType as any));
    expect(result.current.type).toBe(null);
    expect(result.current.contentData).toBe(null);
    expect(result.current.changePage).toBeDefined();
  });
});

export {};
