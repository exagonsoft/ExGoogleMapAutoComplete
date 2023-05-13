<!-- PROJECT LOGO -->
# ExGoogleMapAutoComplete



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](./LICENSE)
![GitHub followers](https://img.shields.io/github/followers/exagonsoft)
![GitHub last commit](https://img.shields.io/github/last-commit/exagonsoft/my_place)
![GitHub issues](https://img.shields.io/github/issues/exagonsoft/my_place)

<!-- CONTENT -->
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Suported-Frameworks">Supported Frameworks</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->
<br />

# About The Project

A React component that provides an autocomplete feature for Google Maps, <br />
but also allows users to enter a custom address if it doesn't exist on Google Maps.

<!-- SUPPORTED FRAMEWORKS -->
<br />

## Suported Frameworks
  * [![React][React.js]][React-url]

<!-- GETTING STARTED -->
<br />

# Getting Started

<!-- PREREQUISITES -->
<br />

## Prerequisites
* React Framework
* Node JS

<!-- INSTALL -->
<br />

## Installation

You can install the ExGoogleMapAutoComplete package using package managers.
* nmp
```
npm install ex-google-map-autocomplete
```

<!-- USAGE -->
<br />

## Usage
To use the ExGoogleMapAutoComplete component in your React project, import it and include it in your JSX code:

```js
import React from 'react';
import ExGoogleMapAutoComplete from 'ex-google-map-autocomplete';

function MyComponent() {
  const handleSelect = (address) => {
    console.log(`Selected address: ${address}`);
  };

  return (
    <div>
      <ExGoogleAutoComplete
        apiKey={apiKey}
        selectedPlace={selectedPlace}
        onPlaceSelect={handlePlaceSelect}
        useAutocomplete={selectedPlace.useAutocomplete}
        onUseAutoComplete={handleUseAutocompleteChange}
       />
    </div>
  );
}

export default MyComponent;
```

Props

The ExGoogleMapAutoComplete component accepts the following props:

* `apiKey` : Your Google API Key
   ```js
    const apiKey = "your_api_key"
   ```
* `selectedPlace` : A use State variable used to storage the selected location.
   ```js
   const [selectedPlace, setSelectedPlace] = useState({
    formatted_address: '',
    geometry: { location: { lat: null, lng: null } },
    useAutocomplete: true,
  })
   ```

* `onPlaceSelect`: A callback function to perform the location storage, using the `selectedPlace` variable.
   ```js
    const handlePlaceSelect = place => {
       setSelectedPlace({
          formatted_address: place.formatted_address,
          geometry: place.geometry,
          useAutocomplete: selectedPlace.useAutocomplete,
        })
      }
   ```

* `useAutocomplete`: A component parameter used to set if the component will be using the Google Map Autocomplete feature or if is not.
* `onUseAutoComplete`: A callback function to perform the behaviour change, using the `selectedPlace` variable
   ```js
   const handleUseAutocompleteChange = value => {
    setSelectedPlace({
      formatted_address: selectedPlace.formatted_address,
      geometry: selectedPlace.geometry,
      useAutocomplete: value,
    })
  }
   ```

<!-- FEEDBACK -->
<br />

## Feedback

If you have any feedback, please reach out to us at: <br/>
* [twitter.com/ExagonsoftS](https://twitter.com/ExagonsoftS)<br />
* [linkedin.com/ExagonsoftS](https://www.linkedin.com/in/msc-alvaro-raul-martin-peraza-165114210)

<!-- CONTRIBUTING -->
<br />

## Contributing

Contributions are always welcome! 👏

We welcome contributions to this project! If you'd like to contribute, please follow these guidelines:

- Report bugs or suggest new features by opening an issue on our [GitHub repository](https://github.com/your-repo-name).
- Before submitting a pull request, please ensure that your code adheres to our [coding standards and style guidelines](/style_guide.md).
- Please read and abide by our [Code of Conduct](/CODE_OF_CONDUCT.md) when participating in this project.
- For more information about contributing to this project, please see our [Contributing Guidelines](/CONTRIBUTING.md).
- If you're unsure about anything or have any questions, please feel free to reach out to us by [email](mailto:example@example.com).

Thank you for your interest in contributing!


<!-- LICENSE -->
<br />

## License

[MIT](/Resourcess/license.txt)

<!-- SUPPORT -->
<br />

## Support

For support, Star this repository and Follow me on GitHub


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/exagonsoft/AltherA-Landing-Page.svg?style=plastic
[contributors-url]: https://github.com/exagonsoft/AltherA-Landing-Page/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/exagonsoft/AltherA-Landing-Page.svg?style=plastic
[forks-url]: https://github.com/exagonsoft/AltherA-Landing-Page/network/members
[stars-shield]: https://img.shields.io/github/stars/exagonsoft/AltherA-Landing-Page.svg?style=plastic
[stars-url]: https://github.com/exagonsoft/AltherA-Landing-Page/stargazers
[issues-shield]: https://img.shields.io/github/issues/exagonsoft/AltherA-Landing-Page.svg?style=plastic
[issues-url]: https://github.com/exagonsoft/AltherA-Landing-Page/issues
[license-shield]: https://img.shields.io/github/license/exagonsoft/AltherA-Landing-Page.svg?style=plastic
[license-url]: https://github.com/exagonsoft/AltherA-Landing-Page/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=plastic&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=plastic&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=plastic&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=plastic&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=plastic&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=plastic&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=plastic&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 