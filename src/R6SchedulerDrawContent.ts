import R6SchedulerDateHelpers from './R6SchedulerDateHelpers';
import { getDaysInMonth, getDay, addMonths } from 'date-fns/esm';

interface IR6SchedulerDrawContentCells {
    numberOfDays: number;
    daysBefore: number[];
    daysAfter: number[];
}

enum R6SchedulerDrawContentCellType {
    OutsideCurrentMonth,
    CurrentMonthDays,
}

interface IR6SchedulerDrawContent {
    fillGaps?: boolean;
}

enum GapsDirection {
    Before = -1,
    After = 1,
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
        const cellsManager = this.prepareDataToDrawContent(date);

        this.daysContainer.innerHTML = null;

        this.drawOutsideCurrentDateCell(cellsManager.daysBefore, this.daysContainer);
        this.drawCurrentDateCell(cellsManager.numberOfDays, this.daysContainer);
        this.drawOutsideCurrentDateCell(cellsManager.daysAfter, this.daysContainer);
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

    public prepareDataToDrawContent(date: Date): IR6SchedulerDrawContentCells {
        const numberOfDays = getDaysInMonth(date);
        const gapBefore = this.findFirstDayOfTheMonthNumber(date) - 1;
        const daysBefore = this.findValuesForGaps(date, gapBefore, GapsDirection.Before);
        const gapAfter = this.findGapAfter(numberOfDays + gapBefore);
        const daysAfter = [1];

        return {
            numberOfDays,
            daysBefore,
            daysAfter,
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

    private findValuesForGaps(date: Date, gapCounter: number, direction: GapsDirection) {
        const dateFollowingDirection = addMonths(date, direction);
        const daysInNewMonth = getDaysInMonth(dateFollowingDirection);
        const firstDayNumber = daysInNewMonth - gapCounter + 1;
        const result = [firstDayNumber];

        for ()
    }

    private drawCurrentDateCell(cellCounter: number, daysWrapper: HTMLDivElement) {
        if (cellCounter !== 0) {
            for (let i = 1; i <= cellCounter; i += 1) {
                const cell = document.createElement('div');
                cell.classList.add('r6-day');

                cell.appendChild(document.createTextNode(String(i)));

                daysWrapper.appendChild(cell);
            }
        }
    }

    private drawOutsideCurrentDateCell(daysToRender: number[], daysWrapper: HTMLDivElement) {
        const cellCounter = daysToRender.length;

        if (cellCounter !== 0) {
            for (let i = 1; i <= cellCounter; i += 1) {
                const cell = document.createElement('div');
                cell.classList.add('r6-day');
                cell.classList.add('r6-empty-day');

                cell.appendChild(document.createTextNode('-'));

                daysWrapper.appendChild(cell);
            }
        }
    }
}
