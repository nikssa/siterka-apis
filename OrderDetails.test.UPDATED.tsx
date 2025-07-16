import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { OrderDetails } from './OrderDetails';

// Mock dependencies
const mockTranslator = jest.fn((key) => {
  const translations = {
    'orderDetailsBetaBanner.text1': 'Beta banner text 1',
    'orderDetailsBetaBanner.text2': 'Beta banner text 2',
    'Current Ticket holders': 'Current Ticket holders',
    'All Accounts': 'All Accounts'
  };
  return translations[key] || '';
});

const mockSetUrlFilters = jest.fn();

jest.mock('@tm1/reports-web', () => ({
  useTranslator: () => ({
    t: mockTranslator
  })
}));

jest.mock('../hooks/useUrlFilters', () => ({
  __esModule: true,
  default: jest.fn(() => [
    { tab: 'current-ticket-holders' },
    mockSetUrlFilters
  ])
}));

jest.mock('./OrderDetailsDataProvider', () => ({
  OrderDetailsDataProvider: ({ children }) => children([], [], false)
}));

jest.mock('./OrderDetailsReportWrapper', () => ({
  OrderDetailsReportWrapper: ({ report, isActive }) => (
    <div data-testid={`report-wrapper-${isActive ? 'active' : 'inactive'}`}>
      Report Wrapper
    </div>
  )
}));

jest.mock('./OrderDetailsCurrentTicketHoldersReport', () => ({
  OrderDetailsCurrentTicketHoldersReport: () => <div>Current Ticket Holders Report</div>
}));

jest.mock('./OrderDetailsAllAccountsReport', () => ({
  OrderDetailsAllAccountsReport: () => <div>All Accounts Report</div>
}));

// Mock design components
jest.mock('../../common/design', () => ({
  Tm1Banner: ({ children, onClose, closable, className, variant, style }) => (
    <div 
      data-testid="tm1-banner"
      className={className}
      data-variant={variant}
      style={style}
    >
      {children}
      {closable && (
        <button 
          data-testid="banner-close-button" 
          onClick={onClose}
        >
          Close
        </button>
      )}
    </div>
  ),
  Tm1Tabs: ({ children, activeid }) => (
    <div data-testid="tm1-tabs" data-activeid={activeid}>
      {children}
    </div>
  ),
  Tm1Tab: ({ children, onClick, id, className }) => (
    <button 
      data-testid={`tab-${id}`}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  ),
  Tm1TabPanel: ({ children, id }) => (
    <div data-testid={`tab-panel-${id}`}>
      {children}
    </div>
  )
}));

describe('OrderDetails Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockTranslator.mockImplementation((key) => {
      const translations = {
        'orderDetailsBetaBanner.text1': 'Beta banner text 1',
        'orderDetailsBetaBanner.text2': 'Beta banner text 2',
        'Current Ticket holders': 'Current Ticket holders',
        'All Accounts': 'All Accounts'
      };
      return translations[key] || '';
    });
    mockSetUrlFilters.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  describe('Tm1Banner functionality', () => {
    it('should render the banner initially', () => {
      render(<OrderDetails />);
      
      const banner = screen.getByTestId('tm1-banner');
      expect(banner).toBeInTheDocument();
    });

    it('should display correct banner content with translations', () => {
      render(<OrderDetails />);
      
      // After component fix, translated content should show
      expect(screen.getByText('Beta banner text 1')).toBeInTheDocument();
      expect(screen.getByText('Beta banner text 2')).toBeInTheDocument();
    });

    it('should display fallback content when translations are not available', () => {
      // Mock translator to return empty/falsy values
      mockTranslator.mockImplementation(() => '');

      render(<OrderDetails />);
      
      // When translations are empty, fallback text should show
      expect(screen.getByText(/This report is currently in beta and we are actively seeking/)).toBeInTheDocument();
      expect(screen.getByText(/This report is currently in Beta release, we welcome/)).toBeInTheDocument();
    });

    it('should have correct banner props', () => {
      render(<OrderDetails />);
      
      const banner = screen.getByTestId('tm1-banner');
      expect(banner).toHaveClass('order-details-banner');
      expect(banner).toHaveAttribute('data-variant', 'info');
      expect(banner).toHaveStyle('pointer-events: auto !important');
    });

    it('should be closable and hide when close button is clicked', async () => {
      render(<OrderDetails />);
      
      // Banner should be visible initially
      expect(screen.getByTestId('tm1-banner')).toBeInTheDocument();
      
      // Click close button
      const closeButton = screen.getByTestId('banner-close-button');
      fireEvent.click(closeButton);
      
      // Banner should be hidden
      await waitFor(() => {
        expect(screen.queryByTestId('tm1-banner')).not.toBeInTheDocument();
      });
    });

    it('should not re-render banner after closing', async () => {
      render(<OrderDetails />);
      
      // Close banner
      fireEvent.click(screen.getByTestId('banner-close-button'));
      
      await waitFor(() => {
        expect(screen.queryByTestId('tm1-banner')).not.toBeInTheDocument();
      });
      
      // Banner should stay hidden
      expect(screen.queryByTestId('tm1-banner')).not.toBeInTheDocument();
    });
  });

  describe('Tabs functionality', () => {
    it('should render tabs with correct default active tab', () => {
      render(<OrderDetails />);
      
      const tabs = screen.getByTestId('tm1-tabs');
      expect(tabs).toHaveAttribute('data-activeid', 'current-ticket-holders');
    });

    it('should render both tab buttons', () => {
      render(<OrderDetails />);
      
      expect(screen.getByTestId('tab-current-ticket-holders')).toBeInTheDocument();
      expect(screen.getByTestId('tab-all-accounts')).toBeInTheDocument();
    });

    it('should render both tab panels', () => {
      render(<OrderDetails />);
      
      expect(screen.getByTestId('tab-panel-current-ticket-holders')).toBeInTheDocument();
      expect(screen.getByTestId('tab-panel-all-accounts')).toBeInTheDocument();
    });

    it('should display translated tab labels', () => {
      render(<OrderDetails />);
      
      expect(screen.getByText('Current Ticket holders')).toBeInTheDocument();
      expect(screen.getByText('All Accounts')).toBeInTheDocument();
    });
  });

  describe('Tab switching functionality', () => {
    it('should handle tab switching to all-accounts', () => {
      render(<OrderDetails />);
      
      // Click on all-accounts tab
      fireEvent.click(screen.getByTestId('tab-all-accounts'));
      
      expect(mockSetUrlFilters).toHaveBeenCalledWith({ tab: 'all-accounts' });
    });

    it('should handle tab switching to current-ticket-holders', () => {
      render(<OrderDetails />);
      
      // Click on current-ticket-holders tab
      fireEvent.click(screen.getByTestId('tab-current-ticket-holders'));
      
      expect(mockSetUrlFilters).toHaveBeenCalledWith({ tab: 'current-ticket-holders' });
    });
  });

  describe('Data Provider integration', () => {
    it('should render OrderDetailsDataProvider and pass data to reports', () => {
      render(<OrderDetails />);
      
      // Should render report wrappers
      expect(screen.getByTestId('report-wrapper-active')).toBeInTheDocument();
      expect(screen.getByTestId('report-wrapper-inactive')).toBeInTheDocument();
    });
  });

  describe('Component structure', () => {
    it('should render banner above tabs', () => {
      render(<OrderDetails />);
      
      const banner = screen.getByTestId('tm1-banner');
      const tabs = screen.getByTestId('tm1-tabs');
      
      expect(banner).toBeInTheDocument();
      expect(tabs).toBeInTheDocument();
    });
  });

  describe('Accessibility and testing attributes', () => {
    it('should have correct data-testid attributes', () => {
      render(<OrderDetails />);
      
      expect(screen.getByTestId('order-details-tabs')).toBeInTheDocument();
      expect(screen.getByTestId('current-ticket-holders-tab')).toBeInTheDocument();
      expect(screen.getByTestId('all-accounts-tab')).toBeInTheDocument();
      expect(screen.getByTestId('current-ticket-holders-tab-panel')).toBeInTheDocument();
      expect(screen.getByTestId('all-accounts-tab-panel')).toBeInTheDocument();
    });

    it('should have correct CSS classes', () => {
      render(<OrderDetails />);
      
      const currentTicketHoldersTab = screen.getByTestId('tab-current-ticket-holders');
      const allAccountsTab = screen.getByTestId('tab-all-accounts');
      
      expect(currentTicketHoldersTab).toHaveClass('tm1_tab');
      expect(allAccountsTab).toHaveClass('tm1_tab');
    });
  });
});