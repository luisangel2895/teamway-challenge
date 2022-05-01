import { shallowMount } from '@vue/test-utils';
// Components
import App from '@/App.vue';

const wrapper = shallowMount(App, {
  global: {
    stubs: ['router-view'],
  },
});

describe('Test in component App.vue', (): void => {
  it('Match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Components (loader, main, router-view, mobile-nav) are mounted correctly', (): void => {
    expect(wrapper.find('loader-stub').exists()).toBeTruthy();
    expect(wrapper.find('main').exists()).toBeTruthy();
    expect(wrapper.find('router-view-stub').exists()).toBeTruthy();
    expect(wrapper.find('mobile-nav-stub').exists()).toBeTruthy();
  });
  it('Loading start in the mounted and the duration is 3s', async (): Promise<void> => {
    expect(wrapper.vm.loading).toBe(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(wrapper.vm.loading).toBe(false);
  });
});
