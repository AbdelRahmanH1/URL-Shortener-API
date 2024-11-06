import { generateShortUrl } from '../../../src/services/createURL.services';

describe('generateShortCode', () => {
  it('Should generate a unique short code', () => {
    const code1 = generateShortUrl(6);
    const code2 = generateShortUrl(6);
    expect(code1).not.toEqual(code2);
  });
});
