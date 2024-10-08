import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { SimpleButton, ESimpleButtonVariants } from '../../src/'

describe('SimpleButton Component', () => {

  /**
   * Test for button states: disabled
   */
  it('Renders a disabled button correctly', () => {
    const mountedComponent = mount(SimpleButton, {
      props: {
        disabled: true,
      },
    });
    // expect(mountedComponent.attributes().disabled).toBeDefined();
    expect(mountedComponent.element.disabled).toBe(true);
    expect(mountedComponent.classes()).toContain('button-disabled');
  });

  /**
   *
   */
  it('Renders the component', () => {
    const mountedComponent = mount(SimpleButton);
    expect(mountedComponent.exists()).toBe(true);
    expect(mountedComponent.classes()).toContain('simple-button');
  });

  /**
   *
   */
  it('Renders generic button with text correctly', () => {
    const mountedComponent = mount(SimpleButton, {
      props: {
        text: 'Click Me',
      },
    });
    expect(mountedComponent.text()).toContain('Click Me');
    expect(mountedComponent.classes()).toEqual(expect.arrayContaining([
      'simple-button',
      'animate-on-hover',
      'button-md',
      'animate-on-active'
    ]));
  });

  /**
   *
   */
  it('Renders generic button with text using the default slot', () => {
    expect(
      mount(SimpleButton, {
        slots: {
          default: '<span>Click</span>Me',
        },
      }).html()
    ).toContain('<span>Click</span>Me');
  });

  /**
   *
   */
  it('Renders button with image correctly', () => {
    const mountedComponent = mount(SimpleButton, {
      props: {
        image: 'example-image.jpg',
        imageAlt: 'Example Text For Image',
      },
    });
    const mountedComponentImage = mountedComponent.find('img');
    expect(mountedComponentImage.exists()).toBe(true);
    expect(mountedComponentImage.attributes('src')).toBe('example-image.jpg');
    expect(mountedComponentImage.attributes('alt')).toBe('Example Text For Image');
  });

  /**
   *
   */
  it('Renders icon-only button correctly', () => {
    const mountedComponent = mount(SimpleButton, {
      props: {
        icon: true,
      },
      slots: {
        default: '<svg class="button-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>',
      },
    });
    expect(mountedComponent.find('svg').exists()).toBe(true);
  });

  /**
   *
   */
  it('Applies variant correctly', () => {
    expect(mount(SimpleButton, {
      props: {
        variant: ESimpleButtonVariants.ROUNDED,
      },
    }).classes()).toContain('button-rounded');
  });

  /**
   *
   */
  it('Applies multiple variants correctly', () => {
    expect(mount(SimpleButton, {
      props: {
        variant: ESimpleButtonVariants.OUTLINED + " " + ESimpleButtonVariants.ROUNDED,
      },
    }).classes()).toEqual(expect.arrayContaining([
      'button-outlined',
      'button-rounded',
    ]));
  });

  /**
   * Test for button states: disabled
   */
  it('Renders a disabled button correctly', () => {
    const mountedComponent = mount(SimpleButton, {
      props: {
        disabled: true,
      },
    });
    expect(mountedComponent.element.disabled).toBe(true);
    expect(mountedComponent.classes()).toContain('button-disabled');
  });

  /**
   * Test for active button states when animation is disabled,
   * css class still applied but component css logic unchanged.
   */
  it('Renders an active button correctly', () => {
    expect(mount(SimpleButton, {
      props: {
        active: true,
        animated: false
      },
    }).classes()).toEqual(expect.arrayContaining([
      'simple-button',
      'animate-active',
    ]));
  });
});
