import { mount } from '@vue/test-utils';
import { describe, it, beforeAll, expect, vi } from 'vitest';
import { Media, EMediaTypes } from '../../src/'

/**
 * Mock the intersection observer (that shouldn't be here)
 */
// @ts-expect-error takeRecords is wrong
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  rootMargin: 0,
  thresholds: 0,
  disconnect: vi.fn(),
  root: null,
  takeRecords: [],
}));

describe('Media Component', () => {
  /**
   *
   */
  it('Renders the component', () =>
    expect(mount(Media).exists()).toBe(true)
  );

  /**
   *
   */
  it('Renders an image correctly', () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'image.jpg',
        type: EMediaTypes.IMAGE,
        alt: 'Test Image',
        title: 'Image Title',
        height: '500px',
        width: '500px',
      },
    });
    const mountedComponentImage = mountedComponent.find('img');
    expect(mountedComponentImage.exists()).toBe(true);
    expect(mountedComponentImage.attributes('src')).toBe('image.jpg');
    expect(mountedComponentImage.attributes('alt')).toBe('Test Image');
    expect(mountedComponentImage.attributes('title')).toBe('Image Title');
    const { width, height } = getComputedStyle(mountedComponentImage.element);
    expect(width).toBe('500px');
    expect(height).toBe('500px');
  });

  /**
   *
   */
  it('Renders an iframe correctly', () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-image.jpg',
        type: EMediaTypes.IFRAME,
        height: '500px',
        width: '500px',
      },
    });
    const mountedComponentIframe = mountedComponent.find('iframe');
    expect(mountedComponentIframe.exists()).toBe(true);
    expect(mountedComponentIframe.attributes('src')).toBe('example-image.jpg');
  });

  /**
   *
   */
  it('Renders a color div correctly', () => {
    const mountedComponent = mount(Media, {
      props: {
        media: '#ff0000',
        type: EMediaTypes.COLOR,
        height: '500px',
        width: '500px',
      },
    });
    const mountedComponentDiv = mountedComponent.find('div');
    expect(mountedComponentDiv.exists()).toBe(true);
    expect(mountedComponentDiv.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
  });

  /**
   *
   */
  it('Renders a CSS background correctly', () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-image.jpg',
        type: EMediaTypes.CSS,
        height: '500px',
        width: '500px',
      },
    });
    const mountedComponentImage = mountedComponent.find('div');
    expect(mountedComponentImage.exists()).toBe(true);
    expect(mountedComponentImage.attributes('style')).toContain("background-image: url(example-image.jpg)");
  });

  /**
   *
   */
  it('Renders a video correctly', () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-video.mp4',
        type: 'video/mp4',
        height: '500px',
        width: '500px',
        thumbnail: 'example-poster.jpg',
      },
    });
    const mountedComponentVideo = mountedComponent.find('video');
    expect(mountedComponentVideo.exists()).toBe(true);
    expect(mountedComponentVideo.attributes('poster')).toBe('example-poster.jpg');
    const mountedComponentSource = mountedComponentVideo.find('source');
    expect(mountedComponentSource.attributes('src')).toBe('example-video.mp4');
    expect(mountedComponentSource.attributes('type')).toBe('video/mp4');
  });

  /**
   *
   */
  it('Lazy loads an image correctly', async () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-image.jpg',
        type: EMediaTypes.IMAGE,
        lazy: true,
        thumbnail: 'example-thumbnail.jpg',
      },
    });
    const mountedComponentImage = mountedComponent.find('img');
    expect(mountedComponentImage.attributes('src')).toBe('example-thumbnail.jpg');
    // Hijack the IntersectionObserver to put the correct target (wouldn't work normally)
    // @ts-expect-error mock
    const observeCallback = global.IntersectionObserver.mock.calls[0][0];
    observeCallback([{ isIntersecting: true, target: mountedComponentImage.element }]);
    // Wait for the change, then check it
    await mountedComponent.vm.$nextTick();
    expect(mountedComponent.attributes('src')).toBe('example-image.jpg');
    expect(mountedComponent.classes()).toContain('loaded');
  });

  /**
   *
   */
  it('Lazy loads a CSS background correctly', async () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-background.jpg',
        type: EMediaTypes.CSS,
        lazy: true,
        thumbnail: 'example-thumbnail.jpg',
      },
    });
    const mountedComponentDiv = mountedComponent.find('div');
    expect(mountedComponentDiv.attributes('style')).toContain("background-image: url(example-thumbnail.jpg)");
    // Hijack the IntersectionObserver to put the correct target (wouldn't work normally)
    // @ts-expect-error mock
    const observeCallback = global.IntersectionObserver.mock.calls[1][0];
    observeCallback([{ isIntersecting: true, target: mountedComponentDiv.element }]);
    // Wait for the change, then check it
    await mountedComponent.vm.$nextTick();
    expect(mountedComponentDiv.attributes('style')).toContain("background-image: url(example-background.jpg)");
    expect(mountedComponentDiv.classes()).toContain('loaded');
  });

  /**
   *
   */
  it('Lazy loads an iframe correctly', async () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-video.mp4',
        type: EMediaTypes.IFRAME,
        lazy: true,
      },
    });
    const mountedComponentIframe = mountedComponent.find('iframe');
    expect(mountedComponentIframe.attributes('src')).toBeUndefined();
    // Hijack the IntersectionObserver to put the correct target (wouldn't work normally)
    // @ts-expect-error mock
    const observeCallback = global.IntersectionObserver.mock.calls[2][0];
    observeCallback([{ isIntersecting: true, target: mountedComponentIframe.element }]);
    // Wait for the change, then check it
    await mountedComponent.vm.$nextTick();
    expect(mountedComponentIframe.attributes('src')).toBe('example-video.mp4');
    expect(mountedComponentIframe.classes()).toContain('loaded');
  });

  /**
   *
   */
  it('lazy loads a video correctly', async () => {
    const mountedComponent = mount(Media, {
      props: {
        media: 'example-video.mp4',
        type: 'video/mp4',
        lazy: true,
        thumbnail: 'example-poster.jpg',
      },
    });
    const mountedComponentVideo = mountedComponent.find('video');
    const mountedComponentSource = mountedComponentVideo.find('source');
    expect(mountedComponentSource.attributes('src')).toBeUndefined();
    // Hijack the IntersectionObserver to put the correct target (wouldn't work normally)
    // @ts-expect-error mock
    const observeCallback = global.IntersectionObserver.mock.calls[3][0];
    observeCallback([{ isIntersecting: true, target: mountedComponentVideo.element }]);
    // Wait for the change, then check it
    await mountedComponent.vm.$nextTick();
    expect(mountedComponentVideo.classes()).toContain('loaded');
    expect(mountedComponentSource.attributes('src')).toBe('example-video.mp4');
  });
});
