// Interface Constructor
interface ElementProperties {
  name: string;
  value: string;
}

interface UIBuilderProperties {
  tagElement: string;
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

const main = new UIBuilder({
  tagElement: "section",
  properties: [
    {
      name: "style",
      value: "padding: 1rem;background: red;"
    }
  ]
});

document.body.appendChild(main.element);
