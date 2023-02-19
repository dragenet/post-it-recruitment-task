import { render } from '@testing-library/react';
import { UserCard } from '../UserCard';
import { mockedUser } from './mockedData';

describe('UserCard', () => {
  it('renders correctly with mocked user', () => {
    const { container } = render(<UserCard user={mockedUser} />);
    expect(container).toMatchSnapshot();
  });
});
