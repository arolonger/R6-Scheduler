import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';

interface IR6SchedulerDrawHeader {
    onPrevCallback?: () => void;
    onNextCallback?: () => void;
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
        this.textWrapper = null;
    }

    public getInitialHtml(date: Date) {
        const wrapper = document.createElement('div');
        const prev = document.createElement('button');
        const next = document.createElement('button');

        this.textWrapper = document.createElement('div');
        this.textWrapper.classList.add('r6-month-year-title');

        this.updateHeaderText(date);

        wrapper.classList.add('r6-month-year-title-wrapper');
        prev.classList.add('r6-prev-month');
        next.classList.add('r6-next-month');

        wrapper.appendChild(prev);
        wrapper.appendChild(this.textWrapper);
        wrapper.appendChild(next);

        prev.addEventListener('click', this.onPrevCallback);
        next.addEventListener('click', this.onNextCallback);

        return wrapper;
    }

    public updateHeaderText(date: Date) {
        const headerText = this.getHeaderText(date);
        this.textWrapper.innerHTML = headerText;
    }

    private getHeaderText(date: Date) {
        const helper = new R6SchedulerDateHelpers(date);

        return `${helper.getMonthName()} / ${helper.getYear()}`;
    }
}
