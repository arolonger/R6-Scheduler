export class DomHelpers {
    static input(name: string, isAutoFocused: boolean) {
        const element = document.createElement('input');
        element.name = name;
        element.autofocus = isAutoFocused;
        return element;
    }

    static div(id: string, cssClass: string) {
        const element = document.createElement('div');
        element.id = id;
        element.classList.add(cssClass);
        return element;
    }

    static button(id: string, cssClass: string) {
        const element = document.createElement('button');
        element.id = id;
        element.classList.add(cssClass);
        return element;
    }
}
