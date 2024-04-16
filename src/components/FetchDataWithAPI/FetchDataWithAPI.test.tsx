import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchDataWithAPI from './FetchDataWithAPI';
// import { User } from "./types";
import * as APIService from './api';

jest.mock('./api');

const mockFetchUsers = APIService.fetchUsers as jest.MockedFunction<
	typeof APIService.fetchUsers
>;

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
	render(<FetchDataWithAPI />);
	const headingElement = screen.getByRole('heading', {
		name: 'FetchDataWithAPI',
	});
	expect(headingElement).toBeInTheDocument();
});

it('should call mock api', async () => {
	mockFetchUsers.mockResolvedValue(mockData);

	render(<FetchDataWithAPI />);
	expect(mockFetchUsers).toHaveBeenCalledTimes(1);
});

it('should render data', async () => {
    mockFetchUsers.mockResolvedValue(mockData);
    render(<FetchDataWithAPI />);
    const paragraphElement = await screen.findByText(mockData[0].name)
    expect(paragraphElement).toBeInTheDocument()
})
