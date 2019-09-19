import R6SchedulerDrawHeader from "./R6SchedulerDrawHeader";

import {
    // isMonday,
    // isTuesday,
    // isWednesday,
    // isThursday,
    // isFriday,
    // isSaturday,
    // isSunday,
    addMonths,
    // addDays,
    // lastDayOfMonth,
} from 'date-fns';
import R6SchedulerDrawContent from "./R6SchedulerDrawContent";
// import R6SchedulerHtml from './R6Scheduler-html';

interface IR6Scheduler {
    container: HTMLElement;
    initialDate?: Date;
}

export default class R6Scheduler {
    container: HTMLElement;
    date: Date;
    header: R6SchedulerDrawHeader;
    content: R6SchedulerDrawContent;
    // fillGaps: boolean; 
    // locales: string;
    // numerOfDaysInCurrentMonth: number;
    // monthName: string;
    // dayNumber: number;
    // monthNumber: number;
    // yearNumber: number;

    constructor(params: IR6Scheduler) {
        this.container = params.container;
        this.date = params.initialDate || new Date();

        this.validateParameters();
        // this.currentDate = this._overwriteCurrentDate(params.initialDate);
        // this.fillGaps = params.fillGaps;
        // this.locales = params.locales || []; 

        // this._generate(this.currentDate)
        this.initialDraw(this.date);
    }

    private validateParameters() {
        if (this.container === null) {
            throw new Error('defined container is null');
        }
    }

    public initialDraw(date: Date) {
        this.header = new R6SchedulerDrawHeader({
            onPrevCallback: this.prevDate.bind(this),
            onNextCallback: this.nextDate.bind(this),
        });
        this.content = new R6SchedulerDrawContent();

        const headerHtml = this.header.getInitialHtml(date);
        const contentHtml = this.content.getInitialHtml(date);

        this.container.appendChild(headerHtml);
        this.container.appendChild(contentHtml);
    }

    public prevDate() {
        const prevDate = addMonths(this.date, -1);

        this.header.updateHeaderText(prevDate);
        this.date = prevDate;
    }

    public nextDate() {
        const nextDate = addMonths(this.date, 1);

        this.header.updateHeaderText(nextDate);
        this.date = nextDate;
    }

    // _finalDraw(wholeHtmlToRender: Element) {
    //     if (this.dom.firstChild) {
    //         this.dom.removeChild(this.dom.firstChild);
    //     }
    //     this.dom.appendChild(wholeHtmlToRender);
    // }

    // _getMonthName(date: Date) {
    //     return date.toLocaleString(this.locales, { month: "long" }).toUpperCase();
    // }

    // _prevMonth() {
    //     this._generate(addMonths(this.currentDate, -1));
    // }

    // _nextMonth() {
    //     this._generate(addMonths(this.currentDate, 1));
    // }

    // _drawDays() {
    //     const daysWrapper = document.createElement("div");
    //     daysWrapper.classList.add("r6-content");

    //     const beginGap = this._findNumberOfDaysToFillUpGap(1);
    //     this._drawGap(beginGap, daysWrapper, "begin");

    //     for (var i: number = 1; i <= this.numerOfDaysInCurrentMonth; i++) {
    //         var day = document.createElement("div");
    //         day.classList.add("r6-day");
    //         day.appendChild(document.createTextNode(String(i)));
    //         daysWrapper.appendChild(day);
    //     }

    //     const endGap = this._findNumberOfDaysToFillUpGap(this.numerOfDaysInCurrentMonth);
    //     this._drawGap(endGap, daysWrapper, "end");

    //     return daysWrapper;
    // }

    // _drawGap(gap: number, daysWrapper: Element, direction: string) {
    //     if (gap !== 0) {
    //         for (let i = 1; i <= gap; i++) {
    //             const emptyDay = document.createElement("div");
    //             emptyDay.classList.add("r6-day");

    //             if (this.fillGaps) {
    //                 emptyDay.classList.add("r6-different-month-day");
    //                 let valueToInsert = this._findDayNumberToAddToTheGap(gap, i, direction);
    //                 emptyDay.appendChild(document.createTextNode(String(valueToInsert)));
    //             } else {
    //                 emptyDay.classList.add("r6-empty-day");
    //                 emptyDay.appendChild(document.createTextNode("-"));
    //             }

    //             daysWrapper.appendChild(emptyDay);
    //         }
    //     }
    // }

    // _findDayNumberToAddToTheGap(numberOfElementsToGenerate: number, elementIndex: number, direction: string) {
    //     let newDateToShareDayNumber;
    //     if (direction === "begin") {
    //         newDateToShareDayNumber = addDays(this.currentDate, -numberOfElementsToGenerate + elementIndex - 1);
    //     } else if (direction === "end") {
    //         newDateToShareDayNumber = addDays(lastDayOfMonth(this.currentDate), elementIndex);
    //     }

    //     return newDateToShareDayNumber.getDate();
    // }

    // _findNumberOfDaysToFillUpGap(dayNumber: number): any {
    //     let date = new Date(this.yearNumber, this.monthNumber, dayNumber);
    //     let gap = 0;

    //     if (dayNumber === 1) {
    //         if (isMonday(date)) {
    //         } else if (isTuesday(date)) {
    //             gap += 1;
    //         } else if (isWednesday(date)) {
    //             gap += 2;
    //         } else if (isThursday(date)) {
    //             gap += 3;
    //         } else if (isFriday(date)) {
    //             gap += 4;
    //         } else if (isSaturday(date)) {
    //             gap += 5;
    //         } else if (isSunday(date)) {
    //             gap += 6;
    //         }
    //     } else {
    //         //looking for last day
    //         if (isSunday(date)) {
    //         } else if (isSaturday(date)) {
    //             gap += 1;
    //         } else if (isFriday(date)) {
    //             gap += 2;
    //         } else if (isThursday(date)) {
    //             gap += 3;
    //         } else if (isWednesday(date)) {
    //             gap += 4;
    //         } else if (isTuesday(date)) {
    //             gap += 5;
    //         } else if (isMonday(date)) {
    //             gap += 6;
    //         }
    //     }

    //     return gap;
    // }
}
