# Tm1Banner Documentation - OrderDetails Component

## Overview
The `Tm1Banner` component has been added to the `OrderDetails` component to display a beta notification banner to users.

## Implementation Details

### Import
```typescript
import { Tm1Banner } from '../../common/design';
```

### State Management
```typescript
const [showBanner, setShowBanner] = useState(true);
```
- `showBanner`: Boolean state that controls banner visibility
- Initially set to `true` to show the banner by default

### Banner Configuration
```typescript
<Tm1Banner
  className="order-details-banner"
  style={{ pointerEvents: 'auto !important' }}
  variant="info"
  closable
  onClose={() => setShowBanner(false)}
>
```

### Props Used
- **className**: `"order-details-banner"` - Custom CSS class for styling
- **style**: `{{ pointerEvents: 'auto !important' }}` - Ensures the banner is interactive
- **variant**: `"info"` - Sets the banner type/appearance to informational
- **closable**: Enables the close button functionality
- **onClose**: Callback that sets `showBanner` to `false` when the close button is clicked

### Content
The banner displays two paragraphs:
1. Information about the report being in beta with a request for feedback
2. Additional context about the beta release and refinement process

Both paragraphs use translation keys with fallback text:
- `t('orderDetailsBetaBanner.text1')` with fallback: "This report is currently in beta..."
- `t('orderDetailsBetaBanner.text2')` with fallback: "This report is currently in Beta release..."

### Conditional Rendering
The banner is only rendered when `showBanner` is `true`:
```typescript
{showBanner && (
  <Tm1Banner>
    {/* banner content */}
  </Tm1Banner>
)}
```

## User Experience
- Users see the beta notification when they first visit the page
- Users can dismiss the banner by clicking the close button
- Once dismissed, the banner won't reappear until the component is remounted
- The banner provides important context about the report's beta status and encourages feedback