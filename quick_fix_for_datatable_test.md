# Quick Fix for Datatable Test Error

## The Problem
You're getting `ReferenceError: Cannot access 'mockSetDomAttributes' before initialization` because Jest hoists `jest.mock()` calls but not variable declarations.

## The Fix

In your `Datatable.test.js` file, replace this:

```javascript
const mockSetDomAttributes = jest.fn(() => jest.fn());

jest.mock('../helpers', () => ({
  addScanRatesToDeviceData: jest.fn(data => data),
  processScanRate: jest.fn(() => ({
    scanRateData: [],
    spanTime: 0,
    dataForGraph: {},
  })),
  setDomAttributes: mockSetDomAttributes, // ❌ This causes the error
}));
```

With this:

```javascript
jest.mock('../helpers', () => ({
  addScanRatesToDeviceData: jest.fn(data => data),
  processScanRate: jest.fn(() => ({
    scanRateData: [],
    spanTime: 0,
    dataForGraph: {},
  })),
  setDomAttributes: jest.fn(() => jest.fn()), // ✅ Create the spy directly here
}));

// Get a reference to the mocked function after the mock is created
const mockSetDomAttributes = require('../helpers').setDomAttributes;
```

## How to Run Your Tests

### Run only your Datatable test file:
```bash
npm test -- Datatable.test.js
```

### Run only the "data-testid attributes" test suite:
```bash
npm test -- --testNamePattern="data-testid attributes"
```

### Run a specific test:
```bash
npm test -- --testNamePattern="should call setDomAttributes with correct data-testid"
```

### Run in watch mode:
```bash
npm test -- --watch Datatable.test.js
```

That's it! Your tests should now run without the ReferenceError.