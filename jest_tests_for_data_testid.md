# Jest Tests for data-testid Attributes

Here are the Jest tests you can add to your existing Datatable test file to test the `data-testid` attributes functionality.

## 1. Update Your Existing Mocks

First, add a spy for `setDomAttributes` to your existing mocks:

```javascript
// Add this spy before your existing mocks
const setDomAttributesSpy = jest.fn(() => jest.fn());

// Update your existing helpers mock to include the spy
jest.mock('../helpers', () => ({
  addScanRatesToDeviceData: jest.fn(data => data),
  processScanRate: jest.fn(() => ({
    scanRateData: [],
    spanTime: 0,
    dataForGraph: {},
  })),
  setDomAttributes: setDomAttributesSpy, // Add this line
}));
```

## 2. Add These Test Cases to Your Existing Describe Block

```javascript
describe('data-testid attributes', () => {
  beforeEach(() => {
    setDomAttributesSpy.mockClear();
  });

  test('should call setDomAttributes with correct data-testid for each tab button', () => {
    // Render component to trigger setDomAttributes calls
    container = shallow(<DatatableTest {...mockProps} />);
    
    // Expected calls for buttons with data-testid
    const expectedCalls = [
      [{ 'data-testid': 'att-event-tab' }],
      [{ 'data-testid': 'att-daily-tab' }], // Only when daily tab is visible
      [{ 'data-testid': 'att-entry-method-tab' }],
      [{ 'data-testid': 'att-tickettype-tab' }],
      [{ 'data-testid': 'att-maskqual-tab' }],
      [{ 'data-testid': 'att-pricelevel-tab' }],
      [{ 'data-testid': 'att-device-tab' }],
      [{ 'data-testid': 'att-section-tab' }],
      [{ 'data-testid': 'att-scanrate-tab' }],
    ];

    expect(setDomAttributesSpy).toHaveBeenCalledTimes(expectedCalls.length);
    
    expectedCalls.forEach((expectedCall, index) => {
      expect(setDomAttributesSpy).toHaveBeenNthCalledWith(index + 1, ...expectedCall);
    });
  });

  test('should not call setDomAttributes for daily tab when scansByDailyEvent has only one item', () => {
    container = shallow(<DatatableTest {...mockProps} scansByDailyEvent={[{
      date: '2017-12-12',
      internal: 30,
      rejects: 7,
      scansIn: 615,
      scansOut: 50,
      totalAttended: 105,
      totalExits: 56,
    }]} />);

    // Should not include daily tab call since only one item in scansByDailyEvent
    const expectedCallsWithoutDaily = [
      [{ 'data-testid': 'att-event-tab' }],
      [{ 'data-testid': 'att-entry-method-tab' }],
      [{ 'data-testid': 'att-tickettype-tab' }],
      [{ 'data-testid': 'att-maskqual-tab' }],
      [{ 'data-testid': 'att-pricelevel-tab' }],
      [{ 'data-testid': 'att-device-tab' }],
      [{ 'data-testid': 'att-section-tab' }],
      [{ 'data-testid': 'att-scanrate-tab' }],
    ];

    expect(setDomAttributesSpy).toHaveBeenCalledTimes(expectedCallsWithoutDaily.length);
    
    // Verify no call was made for daily tab
    const dailyTabCall = setDomAttributesSpy.mock.calls.find(call => 
      call[0] && call[0]['data-testid'] === 'att-daily-tab'
    );
    expect(dailyTabCall).toBeUndefined();
  });

  test('should pass ref prop to each Button component', () => {
    container = shallow(<DatatableTest {...mockProps} />);
    const buttons = container.find('Button');
    
    buttons.forEach(button => {
      expect(button.prop('ref')).toBeDefined();
      expect(typeof button.prop('ref')).toBe('function');
    });
  });

  test('should verify specific button testids are applied correctly', () => {
    container = shallow(<DatatableTest {...mockProps} />);
    
    // Verify setDomAttributes was called with the correct testids
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-event-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-entry-method-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-tickettype-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-maskqual-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-pricelevel-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-device-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-section-tab' });
    expect(setDomAttributesSpy).toHaveBeenCalledWith({ 'data-testid': 'att-scanrate-tab' });
  });
});
```

## 3. Add Tests for the setDomAttributes Helper Function

Create a separate describe block for testing the helper function itself:

```javascript
describe('setDomAttributes helper function', () => {
  // Import the actual helper function for testing
  const { setDomAttributes: actualSetDomAttributes } = jest.requireActual('../helpers');

  test('should set attributes on DOM element when called with valid element', () => {
    // Create a mock DOM element
    const mockDomElement = {
      setAttribute: jest.fn(),
    };

    // Create a mock button with the expected Sencha ExtReact structure
    const mockButton = {
      cmp: {
        el: {
          dom: mockDomElement,
        },
      },
    };

    // Test the actual setDomAttributes function
    const refCallback = actualSetDomAttributes({ 'data-testid': 'test-button', 'aria-label': 'Test Button' });
    
    // Call the ref callback with the mock button
    refCallback(mockButton);

    // Verify setAttribute was called correctly
    expect(mockDomElement.setAttribute).toHaveBeenCalledTimes(2);
    expect(mockDomElement.setAttribute).toHaveBeenCalledWith('data-testid', 'test-button');
    expect(mockDomElement.setAttribute).toHaveBeenCalledWith('aria-label', 'Test Button');
  });

  test('should handle null or undefined button gracefully', () => {
    const refCallback = actualSetDomAttributes({ 'data-testid': 'test-button' });
    
    // Should not throw when called with null or undefined
    expect(() => refCallback(null)).not.toThrow();
    expect(() => refCallback(undefined)).not.toThrow();
  });

  test('should handle button without expected Sencha structure gracefully', () => {
    const mockButton = {}; // Button without cmp property
    const refCallback = actualSetDomAttributes({ 'data-testid': 'test-button' });
    
    // Should not throw when button doesn't have expected structure
    expect(() => refCallback(mockButton)).not.toThrow();
  });

  test('should work with empty attributes object', () => {
    const mockDomElement = {
      setAttribute: jest.fn(),
    };

    const mockButton = {
      cmp: {
        el: {
          dom: mockDomElement,
        },
      },
    };

    const refCallback = actualSetDomAttributes({});
    refCallback(mockButton);

    // Should not call setAttribute when no attributes provided
    expect(mockDomElement.setAttribute).not.toHaveBeenCalled();
  });

  test('should work with multiple attributes', () => {
    const mockDomElement = {
      setAttribute: jest.fn(),
    };

    const mockButton = {
      cmp: {
        el: {
          dom: mockDomElement,
        },
      },
    };

    const attributes = {
      'data-testid': 'multi-attr-button',
      'aria-label': 'Multiple Attributes Button',
      'role': 'button',
      'data-component': 'tab-button'
    };

    const refCallback = actualSetDomAttributes(attributes);
    refCallback(mockButton);

    // Should call setAttribute for each attribute
    expect(mockDomElement.setAttribute).toHaveBeenCalledTimes(4);
    expect(mockDomElement.setAttribute).toHaveBeenCalledWith('data-testid', 'multi-attr-button');
    expect(mockDomElement.setAttribute).toHaveBeenCalledWith('aria-label', 'Multiple Attributes Button');
    expect(mockDomElement.setAttribute).toHaveBeenCalledWith('role', 'button');
    expect(mockDomElement.setAttribute).toHaveBeenCalledWith('data-component', 'tab-button');
  });
});
```

## What These Tests Cover

1. **Component Integration Tests**: 
   - Verifies that `setDomAttributes` is called with the correct `data-testid` values for each button
   - Tests conditional rendering (daily tab visibility based on data)
   - Ensures ref props are properly passed to Button components

2. **Helper Function Unit Tests**:
   - Tests the actual DOM attribute setting functionality
   - Tests error handling for various edge cases (null elements, missing properties)
   - Tests with multiple attributes
   - Tests graceful handling of invalid Sencha component structures

3. **Coverage of Different Scenarios**:
   - Daily tab visible vs hidden
   - All tab buttons with their specific testids
   - Error conditions and edge cases

These tests will ensure that your `data-testid` attributes are properly applied to the DOM elements and that your helper function works correctly in various scenarios, including error conditions.