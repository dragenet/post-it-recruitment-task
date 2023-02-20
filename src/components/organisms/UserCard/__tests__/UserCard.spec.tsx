import { render } from '@testing-library/react';
import { UserCard } from '../UserCard';
import { mockedUsers } from '~/mocks/mockedUsers';

describe('UserCard', () => {
  it('renders correctly with mocked user', () => {
    const { container } = render(<UserCard user={mockedUsers[0]} />);
    expect(container).toMatchSnapshot();
  });
});
