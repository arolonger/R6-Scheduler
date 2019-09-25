import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';
import { getDaysInMonth, getDay } from 'date-fns/esm';

interface IR6SchedulerDrawContentCells {
    numberOfDays: number;
    before: number;
    after: number;
}

enum R6SchedulerDrawContentCellType {
    BeforeAfterMonthDay,
    CurrentMonthDay,
}

interface IR6SchedulerDrawContent {
    fillGaps?: boolean;
}

export default class R6SchedulerDrawContent {
    private daysContainer: HTMLDivElement;
    private fillGaps: boolean;

    constructor(
        {
            fillGaps = false,
        }: IR6SchedulerDrawContent = {},
    ) {
        this.fillGaps = fillGaps;
    }

    public getInitialHtml(date: Date) {
        const contentContainer = document.createElement('div');
        const weekDaysHtml = this.getWeekDaysHtml();
        const daysHtml = this.getDaysHtml(date);

        contentContainer.appendChild(weekDaysHtml);
        contentContainer.appendChild(daysHtml);

        return contentContainer;
    }

    public updateContentHtml(date: Date) {
        const cellsManager = this.findGap(date);

        this.daysContainer.innerHTML = null;

        this.drawCell(cellsManager.before, this.daysContainer, R6SchedulerDrawContentCellType.BeforeAfterMonthDay);
        this.drawCell(cellsManager.numberOfDays, this.daysContainer, R6SchedulerDrawContentCellType.CurrentMonthDay);
        this.drawCell(cellsManager.after, this.daysContainer, R6SchedulerDrawContentCellType.BeforeAfterMonthDay);
    }

    private getWeekDaysHtml() {
        const headerWrapper = document.createElement('div');
        headerWrapper.classList.add('r6-header');

        const dateHelper = new R6SchedulerDateHelpers();
        const weekDaysShort = dateHelper.getShortWeekDays();
        const weekDaysLong = dateHelper.getLongWeekDays();

        weekDaysShort.forEach((weekDay, index) => {
            const dayName = document.createElement('div');
            dayName.classList.add('r6-cell');
            dayName.setAttribute('title', weekDaysLong[index]);
            dayName.appendChild(document.createTextNode(weekDay));
            headerWrapper.appendChild(dayName);
        });

        return headerWrapper;
    }

    private getDaysHtml(date: Date) {
        this.daysContainer = document.createElement('div');
        this.daysContainer.classList.add('r6-content');

        this.updateContentHtml(date);

        return this.daysContainer;
    }

    public findGap(date: Date): IR6SchedulerDrawContentCells {
        const numberOfDays = getDaysInMonth(date);
        const gapBefore = this.findFirstDayOfTheMonthNumber(date) - 1;

        return {
            numberOfDays,
            before: gapBefore,
            after: this.findGapAfter(numberOfDays + gapBefore),
        };
    }

    private findGapAfter(daysBefore: number): number {
        return 7 - (daysBefore % 7);
    }

    private findFirstDayOfTheMonthNumber(date: Date) {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        let dayNumber = getDay(firstDayOfMonth);

        // Sunday
        if (dayNumber === 0) {
            dayNumber = 7;
        }

        return dayNumber;
    }

    private drawCell(cellCounter: number, daysWrapper: HTMLDivElement, type: R6SchedulerDrawContentCellType) {
        if (cellCounter !== 0) {
            for (let i = 1; i <= cellCounter; i += 1) {
                const cell = document.createElement('div');
                cell.classList.add('r6-day');

                if (type === R6SchedulerDrawContentCellType.BeforeAfterMonthDay) {
                    cell.classList.add('r6-empty-day');
                    cell.appendChild(document.createTextNode('-'));
                } else {
                    cell.appendChild(document.createTextNode(String(i)));
                }

                daysWrapper.appendChild(cell);
            }
        }
    }
}
