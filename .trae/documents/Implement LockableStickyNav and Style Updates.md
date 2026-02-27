I will implement the requested changes to match the `products/category/page.tsx` style and add a sticky navigation bar.

### Plan

1.  **Update Dictionary (`zh.json`)**:
    *   Add a `Navigation` array to the `lockable-gas-spring` section in `src/lib/i18n/dictionaries/zh.json`. This will define the labels for the sticky navigation bar (e.g., "Overview", "Technology", "Selection Guide", etc.).

2.  **Create `LockableStickyNav` Component**:
    *   Create `src/components/products/LockableStickyNav.tsx` by cloning `ProductStickyNav.tsx`.
    *   Update the internal mapping to link the navigation labels to the specific section IDs of the Lockable Gas Spring page (e.g., `hero`, `why`, `technology`, `TypeSelection`, etc.).

3.  **Modify `LockableGasSpring` Component**:
    *   Edit `src/components/products/LockableGasSpring.tsx` to add `id` attributes to all major sections (`hero`, `why`, `technology`, `TypeSelection`, `applications`, `forcePerformance`, `manufacturing`, `solutions`, `faq`).
    *   Add `scroll-mt-24` class to these sections to ensure correct scroll positioning when using the sticky nav.
    *   Refine container widths and paddings to align with the style of the reference page.

4.  **Update Page File (`page.tsx`)**:
    *   Modify `src/app/[locale]/products/category/lockable-gas-spring/page.tsx`.
    *   Add the global background style (dots pattern) used in the reference page.
    *   Import and implement the `LockableStickyNav` component at the top.
    *   Pass the new navigation items from the dictionary to the nav component.

This will result in a page that looks and behaves like the main category page, with a working sticky navigation bar and consistent styling.
