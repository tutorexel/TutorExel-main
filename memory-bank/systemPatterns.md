# System Design Patterns

## 1. The Reusable Section Pattern
This is the primary pattern for large, distinct blocks of content.
- **Identify a Section:** A visually distinct block with a unique layout (e.g., "What We Look For", "Why Join Tutorexel?").
- **Create a Generic Component:** Build a reusable component in `/src/components/ui/` (e.g., `FeatureSection.jsx`, `TrustSection.jsx`, `ContentBanner.jsx`).
- **Define Props:** The component accepts props for all dynamic content: `image`, `headingText`, `cardsData` (as an array of objects), `buttonText`, etc. All non-essential props have sensible default values.
- **Compose in the Screen:** In a screen component (e.g., `CareersPage.jsx`), import the reusable section.
- **Provide Data:** Define the specific data for that instance as a constant and pass it as props.

**Example:** The `FeatureSection` component is used on both the `HomePage` and the `AboutUsPage` to render completely different content by simply passing it different props.

## 2. The Reusable Card Pattern
This pattern is for smaller, repeating elements *within* a section.
- **Identify a Repeating Element:** A card or item that appears multiple times with the same structure but different content (e.g., the subject cards).
- **Create a Granular Component:** Build a small, focused component for that single item (e.g., `SubjectCard.jsx`).
- **Map Over Data:** The parent section component (e.g., in `HomePage.jsx`) defines an array of data. It then uses the `.map()` function to iterate over this array, rendering one Card component for each item and passing the item's data as props.

## 3. The Page Shell Pattern
This architectural pattern defines the overall site structure.
- **Role of `App.jsx`:** The `App.jsx` component acts as the application shell.
- **Persistent Layout:** It renders the persistent `<Header>` and `<Footer>` components outside of the routing logic.
- **Dynamic Content:** It uses `<Routes>` from `react-router-dom` to dynamically swap out the main page content (e.g., `<HomePage />`, `<AboutUsPage />`) based on the current URL, without ever re-rendering the header or footer.

## 4. The Page Hero Pattern
This ensures a consistent look and feel for the title banner of every page.
- **Dedicated Component:** A reusable `<PageHero />` component exists in `/src/components/ui/`.
- **Simple Props:** It accepts a `title` prop.
- **Consistent Styling:** Its background and text styles are encapsulated and hardcoded in `ui.css`, guaranteeing that every page starts with the exact same visual banner.

## 5. Data Flow Pattern
- **Unidirectional:** Data flows one way, from the top down (from screens to components).
- **Data Lives in Screens:** Page-specific content (like the text and images for the various homepage sections) is defined as constants within the screen component (`HomePage.jsx`, `PricingPage.jsx`, etc.).
- **Props are the Vehicle:** This data is passed down to the reusable UI components via props. UI components do not contain hardcoded content and are therefore "dumb" and highly reusable.

## 6. Styling Hierarchy
1.  **`bootstrap.min.css`:** The base layer of styles.
2.  **`index.css`:** The second layer. Contains global CSS variables (`:root`), base `body` styles, global typography, and global button/helper classes.
3.  **Page-Specific CSS (`PricingPage.css`, etc.):** The third layer. Contains styles for layouts that are unique to a single page.
4.  **Component-Specific CSS (`ui.css`, `Button.css`, etc.):** The fourth layer. Contains styles that are tightly coupled to a specific reusable component (e.g., `.testimonial-card::after`).
5.  **Inline Styles:** The final layer of overrides, used for highly specific, one-off styling passed via props (e.g., a dynamic background color).