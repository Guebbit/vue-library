import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { AspectRatio } from '../../src/';

describe('AspectRatio Component UNIT Tests', () => {
  it('Renders the component (it can be empty)', () =>
    expect(mount(AspectRatio).exists()).toBe(true)
  );

  it('Applies the ratio prop as a style', () => {
    const mountedComponent = mount(AspectRatio, {
      props: {
        ratio: 75
      }
    });
    expect(mountedComponent.attributes('style')).toContain(`--aspect-ratio: ${75}%`);
    expect(mountedComponent.classes()).toContain('aspect-ratio-container');
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