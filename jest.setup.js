// Configure or set up a testing framework before each test.

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

/**
 * The "transformIgnorePatterns" on "jest.config.js" prevents the Swiper files from being
 * transformed by Jest but it affects the CSS files that are provided by this package.
 * Mocking these CSS files is the solution with the smallest configuration.
 *
 * See "transformIgnorePatterns" on "jest.config.js" for more information.
 */
jest.mock("swiper/css", jest.fn());

export {};
