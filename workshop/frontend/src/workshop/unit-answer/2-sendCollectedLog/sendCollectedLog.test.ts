// thinc-org/cugetreg-frontend
import * as ORIGINAL_ENV from './environments'

describe('sendCollectedLog', () => {
        const postSpy = jest.fn()

        const mockEnviroment = {
                ...ORIGINAL_ENV,
        }

        jest.doMock("./httpClient", () => ({ httpClient: { post: postSpy } }))
        jest.doMock("./environments", () => (mockEnviroment))


        afterEach(() => {
                jest.clearAllMocks()
        })

        it('Should return undefined when data length is 0', async () => {
                const { sendCollectedLog } = await import('./sendCollectedLog')
                const mockData = [] as any
                const result = sendCollectedLog(mockData)

                expect(result).not.toBeDefined()
        })
        it('Should return undefined when NODE_ENV is development', async () => {
                mockEnviroment.NODE_ENV = 'development'
                const { sendCollectedLog } = await import('./sendCollectedLog')
                const mockData = ['test'] as any
                const result = sendCollectedLog(mockData)

                expect(result).not.toBeDefined()

                mockEnviroment.NODE_ENV = ORIGINAL_ENV.NODE_ENV
        })

        it('Should call axios if NODE_ENV is not development and data length is not 0: Success case', async () => {
                const { sendCollectedLog } = await import('./sendCollectedLog')
                postSpy.mockReturnValueOnce(new Promise((resolve) => resolve('success')))
                const mockData = ['test'] as any

                const result = sendCollectedLog(mockData)

                expect(postSpy).toBeCalledWith('/clientlogging', mockData)
                expect(result).not.toBeDefined()
        })


        it('Should call axios if NODE_ENV is not development and data length is not 0: Error case', async () => {
                const { sendCollectedLog } = await import('./sendCollectedLog')
                postSpy.mockReturnValueOnce(new Promise((_, reject) => reject('error')))
                const mockData = ['test'] as any

                const result = sendCollectedLog(mockData)

                expect(postSpy).toBeCalledWith('/clientlogging', mockData)
                expect(result).not.toBeDefined()
        })



})

export { }