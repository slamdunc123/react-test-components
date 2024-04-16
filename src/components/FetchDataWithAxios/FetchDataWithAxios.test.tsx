import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import FetchDataWithAxios from './FetchDataWithAxios'
import * as AxiosService from './axios'

jest.mock('./axios')
const mockedAxios = AxiosService as jest.Mocked<typeof AxiosService>;

const mockData = [
    {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
    },
];

beforeEach(() => {
    jest.clearAllMocks();
});

it('should render heading element', () => {
    render(<FetchDataWithAxios />)
    const headingElement = screen.getByRole('heading', {
        name: 'FetchDataWithAxios',
    })
    expect(headingElement).toBeInTheDocument()
})

it('should call mock API', () => {
    mockedAxios.fetchUsers.mockResolvedValue(mockData);
    render(<FetchDataWithAxios />);
    expect(mockedAxios.fetchUsers).toHaveBeenCalledTimes(1);
});
it('should render data', async () => {
    mockedAxios.fetchUsers.mockResolvedValue(mockData);
    render(<FetchDataWithAxios />);
    const paragraphElement = await screen.findByText(mockData[0].name)
    expect(paragraphElement).toBeInTheDocument()
})
it('should handle API error', async () => {
    const mockAPIRejection = mockedAxios.fetchUsers
    .mockRejectedValue(new Error('Async error message'));

  await expect(mockAPIRejection).rejects.toThrow('Async error message');
});




