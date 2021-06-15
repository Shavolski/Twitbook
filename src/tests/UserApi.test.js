import axios from 'axios';
import { fetchUserData } from './';

jest.mock('axios');

describe('fetchUserData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: '1',
            title: 'a',
          },
          {
            objectID: '2',
            title: 'b',
          },
        ],
      },
    };
  });

  it('fetches erroneously data from an API', async () => {

  });
});
