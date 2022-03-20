# MyMovieApp

This is an application that list the top 250 movies/TVs and other categories. It also allows to search movie, update user preference such as :thumbsup: :thumbsdown: :heart: :link: and view the details of the movie.

## Base dependencies
- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit) as toolset for redux development
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for icons (material)
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) for image caching


## Getting Started

### 1. Clone and Install

```bash
# clone the repo
git clone https://github.com/thelazydude00/MyMovieApp.git

# Navigate to clonned folder and Install dependencies
cd MyMovieApp && yarn

# Install Pods
cd ios && pod install
```

### Run App


```bash
# ios
yarn ios

# android
yarn android
```