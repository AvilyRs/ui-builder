// Interface Constructor
interface ElementProperties {
  name: string;
  value: string;
}

interface UIElement {
  tagElement: string;
  text?: string;
  properties?: ElementProperties[];
  children?: UIBuilder[];
}

class UIBuilder {
  public UIProperties: UIElement = {} as UIElement;
  public element: HTMLElement = {} as HTMLElement;

  constructor(element: UIElement) {
    this.UIProperties = element;
    this.element = this.buildElement(element);
  }

  buildElement(element: UIElement) {
    const createdElement = document.createElement(element.tagElement);
    const createdElementText = element.text && document.createTextNode(element.text);

    if (!!createdElementText) {
      createdElement.appendChild(createdElementText);
    }

    if (!!element.children) {
      this.buildChildrenElements(createdElement, element.children);
    }

    this.setProperties(createdElement, element.properties!);

    return createdElement;
  }

  buildChildrenElements(targetElement: HTMLElement, elements: UIBuilder[]) {
    elements.forEach(element => {
      const createdElement = this.buildElement(element.UIProperties);
      targetElement.appendChild(createdElement);
    })
  }

  setProperties(targetElement: HTMLElement, properties: ElementProperties[]) {
    if (properties !== undefined) {
      properties.forEach(property => {
        targetElement.setAttribute(property.name, property.value);
      })
    }
  }
}

const button = new UIBuilder({
  tagElement: "button",
  text: "Botão",
  properties: [
    {
      name: "onclick",
      value: "alert('alertando')"
    },
    {
      name: "style",
      value: `
        font-family: Arial, sans-serif;
        font-size: 1.5rem;
        border-radius: 8px;
        padding: 1rem 1.5rem;
      `
    }
  ]
});

const section = new UIBuilder({
  tagElement: "section",
  children: [
    button
  ]
});

const main = new UIBuilder({
  tagElement: "main",
  children: [
    section
  ]
});

document.body.appendChild(main.element);
