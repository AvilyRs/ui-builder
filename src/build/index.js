"use strict";
(() => {
  // src/UI.ts
  var UI = class {
    constructor(element) {
      this.#UIProperties = {};
      this.element = {};
      this.rootContainerId = void 0;
      this.#UIProperties = element;
      this.element = this.#buildElement(element);
      this.rootContainerId = element.rootContainerId;
      if (this.rootContainerId !== void 0) {
        this.#initialize(this.rootContainerId);
      }
    }
    #UIProperties;
    #setProperties(targetElement, properties) {
      if (properties !== void 0) {
        properties.forEach((property) => {
          targetElement.setAttribute(property.name, property.value);
        });
      }
    }
    #buildElement(element) {
      const createdElement = document.createElement(element.tagElement);
      const createdElementText = element.text && document.createTextNode(element.text);
      if (!!createdElementText) {
        createdElement.appendChild(createdElementText);
      }
      if (!!element.children) {
        this.#buildChildrenElements(createdElement, element.children);
      }
      this.#setProperties(createdElement, element.properties);
      return createdElement;
    }
    #buildChildrenElements(targetElement, elements) {
      elements.forEach((element) => {
        const createdElement = this.#buildElement(element.#UIProperties);
        targetElement.appendChild(createdElement);
      });
    }
    #initialize(rootContainerId) {
      const isRootContainerExist = document.getElementById(rootContainerId);
      if (isRootContainerExist) {
        const rootContainerElement = document.getElementById(rootContainerId);
        rootContainerElement?.appendChild(this.element);
      } else {
        console.error("Failed to instantiate the root container. The root container ID was defined correctly ?");
      }
    }
  };

  // src/index.ts
  var button = new UI({
    tagElement: "button",
    text: "Button",
    properties: [
      {
        name: "onclick",
        value: "alert('Alert')"
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
  var paragraph = new UI({
    tagElement: "p",
    text: `Paragraph`,
    properties: [
      {
        name: "style",
        value: `
        font-family: Arial, sans-serif;
        font-size: 1.5rem;
      `
      }
    ]
  });
  var section = new UI({
    tagElement: "section",
    children: [
      button,
      paragraph
    ]
  });
  new UI({
    rootContainerId: "root",
    tagElement: "main",
    children: [
      section
    ]
  });
})();
