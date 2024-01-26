import { MemoryRouter } from "react-router-dom";
import DogDetails from './DogDetails';
import { render } from '@testing-library/react';
import dogs from "./_testCommon";

it('renders', () => {
  render(
    <MemoryRouter>
      <DogDetails dog={dogs[0]} />
    </MemoryRouter>
  );
});