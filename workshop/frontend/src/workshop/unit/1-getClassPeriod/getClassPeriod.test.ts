// thinc-org/cugetreg-frontend

import { getClassPeriod } from "./getClassPeriod"
import { Class } from "./types"

describe('getClassPeriod', () => {
    it('Should format class period correctly if period is defined in sectionClass', () => {
        const mockSectionClass = { period: { start: '10', end: '12' } } as Class
        const result = getClassPeriod(mockSectionClass)
        expect(result).toMatch('10 - 12')
    })

    it('Should return empty string when period is not defined', () => {
        const mockSectionClass = {} as Class
        const result = getClassPeriod(mockSectionClass)
        expect(result).toMatch('')
    })
})

export { }