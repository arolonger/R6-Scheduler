import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';
import { getDaysInMonth, getDay } from 'date-fns/esm';

interface IR6SchedulerDrawContentCells {
    numberOfDays: number;
    before: number;
    after: number;
}

enum R6SchedulerDrawContentCellType {
    Empty,
    Day,
}

export default class R6SchedulerDrawContent {
    constructor() {
    }

    public getInitialHtml(date: Date) {
        const contentContainer = document.createElement('div');
        const weekDaysHtml = this.getWeekDaysHtml();
        const daysHtml = this.getDaysHtml(date);

        contentContainer.appendChild(weekDaysHtml);
        contentContainer.appendChild(daysHtml);

        return contentContainer;
    }

    public getWeekDaysHtml() {
        const headerWrapper = document.createElement('div');
        headerWrapper.classList.add('r6-header');

        const dateHelper = new R6SchedulerDateHelpers();
        const weekDays = dateHelper.getShortWeekDays();

        weekDays.forEach((weekDay) => {
            const dayName = document.createElement('div');
            dayName.classList.add('r6-cell');
            dayName.appendChild(document.createTextNode(weekDay));
            headerWrapper.appendChild(dayName);
        });

        return headerWrapper;
    }

    public getDaysHtml(date: Date) {
        const daysContainer = document.createElement('div');
        daysContainer.classList.add('r6-content');

        const cellsManager = this.findGap(date);
        this.drawCell(cellsManager.before, daysContainer, R6SchedulerDrawContentCellType.Empty);
        this.drawCell(cellsManager.numberOfDays, daysContainer, R6SchedulerDrawContentCellType.Day);
        this.drawCell(cellsManager.after, daysContainer, R6SchedulerDrawContentCellType.Empty);

        return daysContainer;
    }

    public getDaysInMonth(date: Date) {
        return getDaysInMonth(date);
    }

    public findGap(date: Date): IR6SchedulerDrawContentCells {
        const numberOfDays = this.getDaysInMonth(date);
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

        // sunday
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

                if (type === R6SchedulerDrawContentCellType.Empty) {
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
