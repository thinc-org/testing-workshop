import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { Song } from "./types"

describe("getSongs", () => {
  let mockAxios: MockAdapter

  const mockSongs: Song[] = [
    {
      id: "1",
      title: "Song 1",
      artist: "Artist 1",
      price: 1,
    },
    {
      id: "2",
      title: "Song 2",
      artist: "Artist 2",
      price: 2,
    },
  ]

  const isLoggedInSpy = jest.fn()
  const axiosSpy = jest.spyOn(axios, "get")

  jest.doMock("./isLoggedIn", () => isLoggedInSpy)

  beforeAll(() => {
    mockAxios = new MockAdapter(axios)
  })

  afterEach(() => {
    mockAxios.reset()
    jest.clearAllMocks()
  })

  it("should return valid songs if user logged in", async () => {
    isLoggedInSpy.mockReturnValue(true)

    mockAxios.onGet("/api/songs").reply(200, mockSongs)

    const { default: getSongs } = await import(".")
    const result = await getSongs()

    expect(isLoggedInSpy).toHaveBeenCalledTimes(1)
    expect(axiosSpy).toBeCalledTimes(1)
    expect(result).toEqual(mockSongs)
  })

  it("should return null if user didn't logged in", async () => {
    isLoggedInSpy.mockReturnValue(false)

    const { default: getSongs } = await import(".")
    const result = await getSongs()

    expect(isLoggedInSpy).toHaveBeenCalledTimes(1)
    expect(axiosSpy).toBeCalledTimes(0)
    expect(result).toBeNull()
  })
})
