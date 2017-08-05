/* eslint-disable no-magic-numbers */

import { expect } from 'chai';
import CommonFormat from './CommonFormat';

describe('CommonFormat', () => {
	it('should be imported correctly', () => {
		expect(CommonFormat).to.be.an('object');
	});

	it('should have the correct values', () => {
		expect(CommonFormat).to.eql({
			lowerCaseMeridian: '$LOWER_CASE_MERIDIAN$',
			upperCaseMeridian: '$UPPER_CASE_MERIDIAN$',
			secondsSimple: '$SECONDS_SIMPLE$',
			secondsLeading: '$SECONDS_LEADING$',
			minutesSimple: '$MINUTES_SIMPLE$',
			minutesLeading: '$MINUTES_LEADING$',
			hoursSimple24Format: '$HOURS_SIMPLE_24FORMAT$',
			hoursLeading24Format: '$HOURS_LEADING_24FORMAT$',
			hoursSimple12Format: '$HOURS_SIMPLE_12FORMAT$',
			hoursLeading12Format: '$HOURS_LEADING_12FORMAT$',
			daysSimple: '$DAYS_SIMPLE$',
			daysLeading: '$DAYS_LEADING$',
			monthsSimple: '$MONTHS_SIMPLE$',
			monthsLeading: '$MONTHS_LEADING$',
			monthsSimpleText: '$MONTHS_SIMPLE_TEXT$',
			monthsFullText: '$MONTHS_FULL_TEXT$',
			yearsTwoDigits: '$YEARS_TWO_DIGITS$',
			yearsFourDigits: '$YEARS_FOUR_DIGITS$',
			unixTimestamp: '$UNIX_TIMESTAMP$',
			timezoneName: '$TIMEZONE_NAME$'
		});
	});
});
