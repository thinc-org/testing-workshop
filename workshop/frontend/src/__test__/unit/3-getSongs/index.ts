import axios from "axios"
import isLoggedIn from "./isLoggedIn"
import { Song } from "./types"

export default async function getSongs() {
  const loginStatus = isLoggedIn()

  if (!loginStatus) return null

  const { data } = await axios.get<Song[]>("/api/songs")
  return data
}
