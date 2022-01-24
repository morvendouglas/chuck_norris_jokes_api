import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import MainContainer from '../MainContainer';

test('should render main container', () => {
    render(<MainContainer />);
    const element = screen.getByTestId('main-container-1');
    expect(element).toBeInTheDocument();
})

test('calls get random joke prop when clicked', () => {
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>GET RANDOM JOKE</button>);
    fireEvent.click(screen.getByText(/GET RANDOM JOKE/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  // it('should be able to fetch random joke from api', () => {

  // })
  
  // it('should be able to add random joke to favourites', () => {

  // })
  
  // it('should be able to search and retrieve a list of jokes', () => {

  // })
  
  // it('should be able to add searched joke to favourites', () => {

  // })
  
  
  
