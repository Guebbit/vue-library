import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { AspectRatio } from '../../src/';

describe('AspectRatio Component UNIT Tests', () => {
  it('Renders the component', () => {
    const mountedComponent = mount(AspectRatio);
    expect(mountedComponent.exists()).toBe(true);
    expect(mountedComponent.classes()).toContain('aspect-ratio-container');
  });

  it('Applies the ratio prop as a style', () => {
    expect(
      mount(AspectRatio, {
        props: {
          ratio: 75
        }
      }).attributes('style')
    ).toContain(`--aspect-ratio: ${75}%`)
  });

  it('Renders slot content', () => {
    expect(
      mount(AspectRatio, {
        slots: {
          default: '<p>Test Slot Content</p>',
        },
      }).html()
    ).toContain('<p>Test Slot Content</p>');
  });
});