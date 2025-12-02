import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
describe('App Component', () => {
    it('renders the main content', () => {
        render(_jsx(App, {}));
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    });
    it('displays party title', () => {
        render(_jsx(App, {}));
        const title = screen.getByText(/New Year Party/i);
        expect(title).toBeInTheDocument();
    });
});
