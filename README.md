## lil ui

A set of very basic components for React projects.

Designed to be used out of the box or in DIY UI
fashion with TailwindCSS or Styled components.

→ [Demo and Documentation](https://lil.rishimohan.me)

## Installation

```
yarn add lil-ui
npm install lil-ui
```

## Components

- [Modal](#modal)
- [Pane](#pane)
- [Button](#button)

### Modal

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default value</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>show</code>
      </td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>
        <div>
          <p>
            <code>true</code> to show the modal
          </p>
          <p>
            <code>false</code> to hide the modal
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>children</code>
      </td>
      <td>
        <code>string</code>/<code>component</code>
      </td>
      <td>-</td>
      <td>
        <div>Modal content can be passed as children</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>titleComponent</code>
      </td>
      <td>
        <code>component</code>
      </td>
      <td>-</td>
      <td>
        <div>Custom component for modal heading</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>backdropComponent</code>
      </td>
      <td>
        <code>component</code>
      </td>
      <td>-</td>
      <td>
        <div>Custom component for modal backdrop</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>title</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>-</td>
      <td>
        <div>Modal title</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>onClose</code>
      </td>
      <td>
        <code>function</code>
      </td>
      <td>-</td>
      <td>
        <div>Function to run when modal closes</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>hideBackdrop</code>
      </td>
      <td>
        <code>boolean</code>
      </td>
      <td>-</td>
      <td>Set to true to have transparent backdrop</td>
    </tr>
    <tr>
      <td>
        <code>modalWidth</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>500px</td>
      <td>Set custom width for modal, e.g 600px</td>
    </tr>
  </tbody>
</table>
        
### Pane

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default value</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>show</code>
      </td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>
        <div>
          <p>
            <code>true</code> to show the modal
          </p>
          <p>
            <code>false</code> to hide the modal
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>children</code>
      </td>
      <td>
        <code>string</code>/<code>component</code>
      </td>
      <td>-</td>
      <td>
        <div>Modal content can be passed as children</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>titleComponent</code>
      </td>
      <td>
        <code>component</code>
      </td>
      <td>-</td>
      <td>
        <div>Custom component for modal heading</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>backdropComponent</code>
      </td>
      <td>
        <code>component</code>
      </td>
      <td>-</td>
      <td>
        <div>Custom component for modal backdrop</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>title</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>-</td>
      <td>
        <div>Modal title</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>onClose</code>
      </td>
      <td>
        <code>function</code>
      </td>
      <td>-</td>
      <td>
        <div>Function to run when modal closes</div>
      </td>
    </tr>
    <tr>
      <td>
        <code>hideBackdrop</code>
      </td>
      <td>
        <code>boolean</code>
      </td>
      <td>-</td>
      <td>Set to true to have transparent backdrop</td>
    </tr>
    <tr>
      <td>
        <code>paneWidth</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>500px</td>
      <td>Set custom width for modal, e.g 600px</td>
    </tr>
    <tr>
      <td>
        <code>position</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>-</td>
      <td>Set <code>left</code> to show pane from left</td>
    </tr>
  </tbody>
</table>

### Button

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default value</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>className</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>-</td>
      <td>
        Custom class names for <code>button</code> tag
      </td>
    </tr>
    <tr>
      <td>
        <code>onClick</code>
      </td>
      <td><code>function</code></td>
      <td>
        -
      </td>
      <td>
        A function that's called when button is clicked
      </td>
    </tr>
    <tr>
      <td>
        <code>style</code>
      </td>
      <td><code>object</code></td>
      <td>-</td>
      <td>
        Object of inline styles to apply on <code>button</code> tag
      </td>
    </tr>
    <tr>
      <td>
        <code>children</code>
      </td>
      <td><code>string</code>/<code>component</code></td>
      <td>
        -
      </td>
      <td>
        Label for the button
      </td>
    </tr>
  </tbody>
</table>