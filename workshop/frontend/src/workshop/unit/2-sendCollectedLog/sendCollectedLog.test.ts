// thinc-org/cugetreg-frontend

describe('sendCollectedLog', () => {
        // Reminder: Since this is unit tets, you have to mock ./httpClient with jest

        const postSpy = jest.fn()
        const DEFAULT_ENV = process.env
        jest.doMock("./httpClient", () => ({ httpClient: { post: postSpy } }))

        beforeEach(() => {
                jest.resetModules()
                jest.clearAllMocks()
                process.env = { ...DEFAULT_ENV }
        })

        afterAll(() => {
                process.env = DEFAULT_ENV
        })

        it('Should return undefined when data length is 0', async () => {
                const { sendCollectedLog } = await import('./sendCollectedLog')
                const mockData = [] as any
                const result = sendCollectedLog(mockData)
                expect(result).not.toBeDefined()
        })
        it('Should return undefined when NODE_ENV is development', async () => {
                (process.env as any).NODE_ENV = 'development'
                const { sendCollectedLog } = await import('./sendCollectedLog')
                const mockData = ['test'] as any
                const result = sendCollectedLog(mockData)
                expect(postSpy).toBeCalledWith('/clientlogging', mockData)
                expect(result).not.toBeDefined()
        })

        it.todo('Write test for Axios call')
        it.todo(`Write test for Axios call and error
            Hint: jest.spyOn console error
    `)
})

export { }