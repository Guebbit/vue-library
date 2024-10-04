import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { AspectRatio } from '../../src/';

describe('AspectRatio', () => {
  it('renders the component', () => {
    const wrapper = mount(AspectRatio);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('aspect-ratio-container');
  });

  it('applies the ratio prop as a style', () => {
    const wrapper = mount(AspectRatio, {
      props: {
        ratio: 75
      },
    });
    expect(wrapper.attributes('style')).toContain(`--aspect-ratio: ${75}%`);
  });

  it('uses the default ratio when no prop is provided', () => {
    const wrapper = mount(AspectRatio);
    expect(wrapper.attributes('style')).toContain('--aspect-ratio: 100%');
  });

  it('renders slot content', () => {
    const wrapper = mount(AspectRatio, {
      slots: {
        default: '<p>Test Slot Content</p>',
      },
    });
    expect(wrapper.html()).toContain('<p>Test Slot Content</p>');
  });
});