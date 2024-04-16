

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchData from './FetchData';
					
const mockData = [
	{
		id: 1,
		name: 'Leanne Graham',
		email: 'Sincere@april.biz',
	},
];


global.fetch = jest.fn().mockImplementation(() =>
	Promise.resolve({
		json: () => Promise.resolve(mockData),
	})
);

beforeEach(() => {
	jest.clearAllMocks();
});

it('should render heading element', async () => {
	render(<FetchData />);
	const headingElement = screen.getByRole('heading', {
		name: 'FetchData',
	});
	expect(headingElement).toBeInTheDocument();
});

it('should call API and render data', async () => {
	render(<FetchData />);

	const paragraphElement = await screen.findByText(mockData[0].name);
	expect(paragraphElement).toBeInTheDocument();

	expect(fetch).toHaveBeenCalledTimes(1);
});

it('should handle API error', async () => {
  render(<FetchData />);
  (fetch as jest.Mock).mockImplementationOnce(() => Promise.reject('API Error'));
	
  expect(fetch).rejects.toMatch('API Error');
});
