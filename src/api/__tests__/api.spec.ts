import nock from 'nock';
import { fetcher, getUsers } from '~/api';
import { mockedUsers } from '~/mocks/mockedUsers';

describe('fetcher', () => {
  it('connect with correct API', async () => {
    const expectedResponse = { echo: 'success' };
    const scope = nock(process.env.NEXT_PUBLIC_API_BASE)
      .get('/echo')
      .reply(200, expectedResponse);

    const res = await fetcher('/echo');

    expect(scope.isDone()).toBeTruthy();
    expect(res).toEqual(expectedResponse);
  });
});

describe('API endpoints:', () => {
  it('getUsers', async () => {
    const expectedResponse = [mockedUsers.slice(0, 3)];
    const scope = nock(process.env.NEXT_PUBLIC_API_BASE)
      .get('/users')
      .reply(200, expectedResponse);

    const res = await getUsers();

    expect(scope.isDone()).toBeTruthy();
    expect(res).toEqual(expectedResponse);
  });
});
