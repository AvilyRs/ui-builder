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
        if (!!element.children) {
            this.buildChildrenElements(createdElement, element.children);
        }
        this.setProperties(createdElement, element.properties);
        return createdElement;
    };
    UIBuilder.prototype.buildChildrenElements = function (targetElement, elements) {
        var _this = this;
        elements.forEach(function (element) {
            var createdElement = _this.buildElement(element.UIProperties);
            targetElement.appendChild(createdElement);
        });
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
var button = new UIBuilder({
    tagElement: "button",
    text: "Botão",
    properties: [
        {
            name: "onclick",
            value: "alert('alertando')"
        },
        {
            name: "style",
            value: "\n        font-family: Arial, sans-serif;\n        font-size: 1.5rem;\n        border-radius: 8px;\n        padding: 1rem 1.5rem;\n      "
        }
    ]
});
var section = new UIBuilder({
    tagElement: "section",
    children: [
        button
    ]
});
var main = new UIBuilder({
    tagElement: "main",
    children: [
        section
    ]
});
document.body.appendChild(main.element);
