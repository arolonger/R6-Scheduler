export class Helpers {
    static input(name: string, isAutoFocused: boolean) {
        var element = document.createElement("input");
        element.name = name;
        element.autofocus = isAutoFocused;
        return element;
    }

    static div(id: string, cssClass: string) {
        var element = document.createElement("div");
        element.id = id;
        element.classList.add(cssClass);
        return element;
    }
}