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

### Modal

<table>
          <thead>
            <tr>
              <th>Prop</th>
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
              <td></td>
              <td>
                <div>Modal content can be passed as children</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>titleComponent</code>
              </td>
              <td></td>
              <td>
                <div>Custom component for modal heading</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>backdropComponent</code>
              </td>
              <td></td>
              <td>
                <div>Custom component for modal backdrop</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td></td>
              <td>
                <div>Modal title</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>onClose</code>
              </td>
              <td></td>
              <td>
                <div>Function to run when modal closes</div>
              </td>
            </tr>
          </tbody>
        </table>
        
### Pane

<table>
          <thead>
            <tr>
              <th>Prop</th>
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
              <td></td>
              <td>
                <div>Modal content can be passed as children</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>titleComponent</code>
              </td>
              <td></td>
              <td>
                <div>Custom component for modal heading</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>backdropComponent</code>
              </td>
              <td></td>
              <td>
                <div>Custom component for modal backdrop</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td></td>
              <td>
                <div>Modal title</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>onClose</code>
              </td>
              <td></td>
              <td>
                <div>Function to run when modal closes</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>position</code>
              </td>
              <td><code>right</code></td>
              <td>
                <div><code>left</code> to open the pane from left</div>
                <div><code>right</code> or leave empty to open the pane from right</div>
              </td>
            </tr>
          </tbody>
        </table>
