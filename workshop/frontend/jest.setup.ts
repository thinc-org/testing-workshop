import "@testing-library/jest-dom"
import { configure } from "enzyme"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require("enzyme-adapter-react-16")

configure({ adapter: new Adapter() })
