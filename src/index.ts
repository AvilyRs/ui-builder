import { UI } from "./UI";

const button = new UI({
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

const paragraph = new UI({
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

const section = new UI({
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
