import { render, screen, cleanup } from '@testing-library/react';
import MainContainer from '../MainContainer';

test('should render main container', () => {
    render(<MainContainer />)
    const element = screen.getByTestId('main-container-1')
    expect(element).toBeInTheDocument();
})

it('should be able to generate and render random chuck norris joke', () => {
      render(<MainContainer/>)
    //   const joke = screen.getByTestId('get-random-joke-button');
    //   button.simulate('click');
    //   expect(joke).toEqual(!null);
})
  
  // it('should be able to add random joke to favourites', () => {

  // })
  
  // it('should be able to search and retrieve a list of jokes', () => {

  // })
  
  // it('should be able to add searched joke to favourites', () => {

  // })
  
  // it('should be able to clear favourites', () => {

  // })
  
  // it('should be able to clear searched', () => {

  // })
  
  
