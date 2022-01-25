import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import MainContainer from '../MainContainer';

it('should render main container', () => {
    render(<MainContainer />);
    const element = screen.getByTestId('main-container-1');
    expect(element).toBeInTheDocument();
})

it('calls get random joke prop when clicked', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>GET RANDOM JOKE</button>);
    fireEvent.click(screen.getByText(/GET RANDOM JOKE/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        value: "Joke Text"
    })
}))

// describe("Main Container", () => {
//     it("loads the joke on button click", () => {

//         expect(screen.getByText("Joke Text")).toBeInTheDocument()
//     })
// })



  
  
  
