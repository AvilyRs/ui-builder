var UIBuilder = /** @class */ (function () {
    function UIBuilder(element) {
        this.UIProperties = {};
        this.element = {};
        this.UIProperties = element;
        this.element = this.buildElement(element);
    }
    UIBuilder.prototype.buildElement = function (element) {
        var createdElement = document.createElement(element.tagElement);
        var createdElementText = element.text && document.createTextNode(element.text);
        if (!!createdElementText) {
            createdElement.appendChild(createdElementText);
        }
        this.setProperties(createdElement, element.properties);
        return createdElement;
    };
    UIBuilder.prototype.setProperties = function (targetElement, properties) {
        if (properties !== undefined) {
            properties.forEach(function (property) {
                targetElement.setAttribute(property.name, property.value);
            });
        }
    };
    return UIBuilder;
}());
var paragraph = new UIBuilder({
    tagElement: "h1",
    text: "Título",
    properties: [
        {
            name: "style",
            value: "font-family: Arial, sans-serif; font-size: 3rem;"
        }
    ]
});
var main = new UIBuilder({
    tagElement: "section",
    properties: [
        {
            name: "style",
            value: "padding: 1rem;background: red;"
        }
    ]
});
document.body.appendChild(paragraph.element);
