# React

# npm init

# Parcel is a beast.
- Dev Build
- Local Server
- HMR - Hot module replacement
- Uses file watching algorithm - written in C++
- Caching- Faster Builds (have cache to build faster for the next time)
- Image optimization
- Minification of the files
- Bundling
- File compression
- Consistent Hashing
- Code Splitting
- Differential bundling(to support older browsers)
- Diagnostic
- Error handling
- HTTPs
- Reliable caching
- Tree Shaking algorithm(removes unused code)
- Different dev and prod bundles
- Files in dist(can be regenerated) folder are modified compressed code
- Prod build is highly optimized build 
- Documentation -> https://parceljs.org/docs/

# Babel
- PARCEL uses Babel to transpile the JSX code for React to understand.
- https://babeljs.io/docs/


 #----------------------------Site design------------------------------------
  * Header
  *  - Logo
  *  - Nav Items
  * Body
  *  - Search
  *  - RestaurantContainer
  *     -Restaurant Card 
  *       -Image
  *       -Name of Res, Star Rating, Cuisine, delery tie
  * Footer
  *  - Copyright
  *  - Links
  *  - Contact 
  


# Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

# React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()
2 types Routing in web apps
Client Side Routing
Server Side Routing

#  
Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector
Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing
Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom