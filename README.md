# Nicole

Nicole is a lightweight Typescript library for rendering typesafe TSX templates to a static HTML string.

If you're already using React on your frontend, use Nicole on your Node backend to render HTML for emails and error pages.

## Installation

```bash
npm install git://github.com/wispira/nicole.git
```

Add the following to your `tsconfig.json` file
```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

## Usage

#### Basic Example

```tsx
import { React } from 'nicole';

const Component = () => (
  <h1>Hello, World!</h1>
);
```

##### Renders to 

```html
<h1>Hello, World!</h1>
```


#### Advanced Example

```tsx
import { React } from 'nicole';

interface Props extends React.Props {
  title: string;
}

const Layout: React.Component<Props> = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
        <body>
          <h1>{props.title}</h1>
          {props.children}
      </body>
    </html>
  );
};

// another file

const names = [
  'Doug',
  'Justine',
  'Pat',
];

const Page: React.Component = () => (
  <Layout title="Page">
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  </Layout>
);

const html = Page({});
```

##### Renders to 

```html
<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <h1>Page</h1>
    <ul>
      <li>Doug</li>
      <li>Justine</li>
      <li>Pat</li>
    </ul>
  </body>
</html>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Nicole is released under the [ISC](https://opensource.org/licenses/ISC) license.