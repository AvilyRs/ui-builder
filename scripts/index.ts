// Interface Constructor
interface ElementProperties {
  name: string;
  value: string;
}

interface UIBuilderProperties {
  tagElement: string;
  text?: string;
  properties?: ElementProperties[];
}

class UIBuilder {
  public UIProperties: UIBuilderProperties = {} as UIBuilderProperties;
  public element: HTMLElement = {} as HTMLElement;

  constructor(element: UIBuilderProperties) {
    this.UIProperties = element;
    this.element = this.buildElement(element);
  }

  buildElement(element: UIBuilderProperties) {
    const createdElement = document.createElement(element.tagElement);
    const createdElementText = element.text && document.createTextNode(element.text);

    if (!!createdElementText) {
      createdElement.appendChild(createdElementText);
    }

    this.setProperties(createdElement, element.properties!);

    return createdElement;
  }

  setProperties(targetElement: HTMLElement, properties: ElementProperties[]) {
    if (properties !== undefined) {
      properties.forEach(property => {
        targetElement.setAttribute(property.name, property.value);
      })
    }
  }
}

const paragraph = new UIBuilder({
  tagElement: "h1",
  text: "Título",
  properties: [
    {
      name: "style",
      value: "font-family: Arial, sans-serif; font-size: 3rem;"
    }
  ]
});

const main = new UIBuilder({
  tagElement: "section",
  properties: [
    {
      name: "style",
      value: "padding: 1rem;background: red;"
    }
  ]
});

document.body.appendChild(paragraph.element);
