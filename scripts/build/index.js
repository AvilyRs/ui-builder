var UIConstructor = /** @class */ (function () {
    function UIConstructor(element) {
        this.UIProperties = {};
        this.element = {};
        this.UIProperties = element;
        this.element = this.buildElement(element);
    }
    UIConstructor.prototype.buildElement = function (element) {
        var createdElement = document.createElement(element.tagElement);
        this.setProperties(createdElement, element.properties);
        return createdElement;
    };
    UIConstructor.prototype.setProperties = function (targetElement, properties) {
        if (properties !== undefined) {
            properties.forEach(function (property) {
                targetElement.setAttribute(property.name, property.value);
            });
        }
    };
    return UIConstructor;
}());
var main = new UIConstructor({
    tagElement: "section",
    properties: [
        {
            name: "style",
            value: "padding: 1rem;background: red;"
        }
    ]
});
document.body.appendChild(main.element);
