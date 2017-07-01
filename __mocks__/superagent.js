/**
 * Mock superagent library.
 */

export default {
  get: jest.genMockFunction().mockReturnThis(),
  post: jest.genMockFunction().mockReturnThis(),
  put: jest.genMockFunction().mockReturnThis(),
  set: jest.genMockFunction().mockReturnThis(),
  query: jest.genMockFunction().mockReturnThis(),
  end: jest.genMockFunction().mockReturnThis()
}