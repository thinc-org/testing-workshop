export default function isLoggedIn() {
  const accessToken = window.localStorage.getItem("ACCESS_TOKEN")
  const loginStatus = accessToken !== null
  return loginStatus
}
