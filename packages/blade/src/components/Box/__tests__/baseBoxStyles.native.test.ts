import {
  getBaseBoxStyles,
  getSpacingValue,
  getAllMediaQueries,
  getAllProps,
} from '../BaseBox/baseBoxStyles';
import { getResponsiveValue } from '../BaseBox/getResponsiveValue.native';
import type { BaseBoxProps } from '../BaseBox';
import { removeUndefinedValues } from './baseBoxStyles.test';
import bladeLightTheme from '~components/BladeProvider/__tests__/bladeLightTheme/bladeLightTheme';
import type { Theme } from '~components/BladeProvider';

describe('getResponsiveValue', () => {
  it('should return correctly for plain values', () => {
    expect(getResponsiveValue('hello', 'base')).toBe('hello');
    expect(getResponsiveValue('hello', 'xs')).toBe(undefined);
  });

  it('should correctly handle falsy values', () => {
    expect(getResponsiveValue(undefined)).toBe(undefined);
    expect(getResponsiveValue(null)).toBe(undefined);
    expect(getResponsiveValue(0)).toBe(0);
    expect(getResponsiveValue('')).toBe('');
    expect(getResponsiveValue({ base: 3, s: 0 })).toBe(0);
  });

  it('should return responsive values in decreasing sequence starting from s token', () => {
    expect(getResponsiveValue({ base: 'base-value', xs: 'xs-value', s: 'small-value' })).toBe(
      'small-value',
    );
    expect(getResponsiveValue({ base: 'base-value', xs: 'xs-value' })).toBe('xs-value');
    expect(getResponsiveValue({ base: 'base-value' })).toBe('base-value');
    expect(getResponsiveValue({ m: 'medium-value' })).toBe(undefined);
  });
});

describe('getSpacingValue', () => {
  it('should always return s token value if exist', () => {
    expect(getSpacingValue('spacing.2', bladeLightTheme, 'base')).toBe('4px');
    expect(getSpacingValue('spacing.2', bladeLightTheme, 'm')).toBe(undefined);

    const responsiveSpacingProp: BaseBoxProps['padding'] = {
      base: 'spacing.10',
      xs: '12px',
      s: ['spacing.1', '12px', '100%', 'auto'],
    };
    expect(getSpacingValue(responsiveSpacingProp, bladeLightTheme, 'base')).toBe(
      '2px 12px 100% auto',
    );
    expect(getSpacingValue(responsiveSpacingProp, bladeLightTheme, 'xs')).toBe(
      '2px 12px 100% auto',
    );
  });
});

describe('getBaseBoxStyles', () => {
  it('should return s token value', () => {
    const boxStyles = getBaseBoxStyles({
      margin: {
        base: 'spacing.1',
        s: ['spacing.1', '12px', '100%'],
        m: '22px',
        xl: 'auto',
      },
      theme: bladeLightTheme,
    });
    const boxStylesWithoutUndefined = JSON.parse(JSON.stringify(boxStyles));
    expect(boxStylesWithoutUndefined).toMatchInlineSnapshot(`
      {
        "margin": "2px 12px 100%",
      }
    `);
  });
});

describe('getAllMediaQueries', () => {
  it('should return empty object', () => {
    expect(getAllMediaQueries({ display: 'flex', theme: bladeLightTheme })).toMatchInlineSnapshot(
      `{}`,
    );
  });
});

describe('getAllProps', () => {
  it('should return all values for depending on react native priority', () => {
    const baseBoxProps: BaseBoxProps & { theme: Theme } = {
      display: 'flex',
      padding: { base: 'spacing.1', s: '20px' },
      margin: { m: 'spacing.1' },
      theme: bladeLightTheme,
    };

    expect(removeUndefinedValues(getAllProps(baseBoxProps))).toMatchInlineSnapshot(`
      {
        "display": "flex",
        "padding": "20px",
      }
    `);
  });
});
