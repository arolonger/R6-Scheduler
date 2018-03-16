export default class Helpers {
    constructor () {}

    static getDaysInMonth (date: Date): number {
        var year = date.getFullYear();
        var monthIndex = date.getMonth();
        var lastDayOfMonth = new Date(0);
        lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
        lastDayOfMonth.setHours(0, 0, 0, 0);
        return lastDayOfMonth.getDate();
    }

    static isMonday (date: Date): boolean {
        return date.getDay() === 1;
    }

    static isTuesday (date: Date): boolean {
        return date.getDay() === 2;
    }

    static isWednesday (date: Date): boolean {
        return date.getDay() === 3;
    }

    static isThursday (date: Date): boolean {
        return date.getDay() === 4;
    }

    static isFriday (date: Date): boolean {
        return date.getDay() === 5;
    }

    static isSaturday (date: Date): boolean {
        return date.getDay() === 6;
    }

    static isSunday (date: Date): boolean {
        return date.getDay() === 0;
    }

    static isWeekend (date: Date): boolean {
        var day = date.getDay();
        return day === 0 || day === 6
    }
}