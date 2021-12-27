import { Container, Stack, Typography } from "@mui/material"
import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <Container>
      <Stack direction="column">
        <Typography variant="h2" align="center">
          Welcome to Frontend Testing Workshop
        </Typography>
        <Link href="/example">Example</Link>
        <br />
        <Link href="/workshop">Workshop</Link>
      </Stack>
    </Container>
  )
}

export default Home
