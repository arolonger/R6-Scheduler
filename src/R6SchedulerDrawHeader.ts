import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';

interface IR6SchedulerDrawHeader {
    onNextCallback?: () => void;
    onPrevCallback?: () => void;
}

export default class R6SchedulerDrawHeader {
    onPrevCallback: () => void;
    onNextCallback: () => void;
    textWrapper: HTMLDivElement;
    constructor(
        {
            onPrevCallback = () => { },
            onNextCallback = () => { },
        }: IR6SchedulerDrawHeader = {},
    ) {
        this.onPrevCallback = onPrevCallback;
        this.onNextCallback = onNextCallback;

        this.onPrevClicked = this.onPrevClicked.bind(this);
        this.onNextClicked = this.onNextClicked.bind(this);
    }

    public getInitialHtml(date: Date) {
        const wrapper = document.createElement('div');
        const prev = document.createElement('button');
        const next = document.createElement('button');
        this.textWrapper = document.createElement('div');

        this.updateHeaderText(date);

        wrapper.classList.add('r6-month-year-title');
        prev.classList.add('r6-prev-month');
        next.classList.add('r6-next-month');

        wrapper.appendChild(prev);
        wrapper.appendChild(this.textWrapper);
        wrapper.appendChild(next);

        prev.addEventListener('click', this.onPrevClicked);
        next.addEventListener('click', this.onNextClicked);

        return wrapper;
    }

    public onPrevClicked() {
        this.onPrevCallback();
    }

    public onNextClicked() {
        this.onNextCallback();
    }

    public updateHeaderText(date: Date) {
        const headerText = this.getHeaderText(date);
        this.textWrapper.appendChild(document.createTextNode(headerText));
    }

    private getHeaderText(date: Date) {
        const helper = new R6SchedulerDateHelpers(date);

        return `${helper.getMonthName()} / ${helper.getYear()}`;
    }
}
