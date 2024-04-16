import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleForm from './SimpleForm';

describe('SimpleForm', () => {
	describe('Heading', () => {
		it('should render heading element', () => {
			render(<SimpleForm />);
			const headingElement = screen.getByRole('heading', {
				name: 'SimpleForm',
			});
			expect(headingElement).toBeInTheDocument();
		});
	});
	describe('Inputs', () => {
		it('should render correct numver of input elements', () => {
			render(<SimpleForm />);
			const inputElements = screen.getAllByRole('textbox');
			expect(inputElements).toHaveLength(2);
		});
		it('should have empty value in all input elements on render', () => {
			render(<SimpleForm />);
			const inputElements = screen.getAllByRole('textbox');
			expect(inputElements[0]).toHaveValue('');
			expect(inputElements[1]).toHaveValue('');
		});
	});

	describe('Button', () => {
		it('should render submit button ', () => {
			render(<SimpleForm />);
			const buttonElement = screen.getByRole('button', {
				name: 'Submit',
			});
			expect(buttonElement).toBeInTheDocument();
		});
	});
});
