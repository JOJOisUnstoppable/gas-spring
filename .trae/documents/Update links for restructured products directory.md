I will update the links in the codebase to match the new static directory structure (`products/category/...` and `products/industry/...`).

### 1. Update Navigation Components
I will update `Navbar.tsx` and `Footer.tsx` to handle the different paths for "Category" vs "Industry" items, since they are now in different subdirectories.
- **Logic**:
  - `gas-spring` -> `/products/category` (The main Gas Spring page)
  - `marine_gas_spring`, `aftermarket`, `solar-damper` -> `/products/industry/[id]`
- **Files**:
  - `src/components/layout/Navbar.tsx`
  - `src/components/layout/Footer.tsx`

### 2. Update Product Components
I will update the components used within the product pages to point to the correct sub-category paths.
- **`src/components/products/ProductCard.tsx`**:
  - This component is used to list gas spring types (Compression, Lockable, etc.).
  - Update the link from `/products/[id]` to `/products/category/[id]`.
- **`src/components/products/ProductHero.tsx`**:
  - Update the "Products" breadcrumb to point to `/products/category` (the main Gas Spring page).

### 3. Verification
I will verify that the changes compile and that the constructed paths align with the directory structure provided.
