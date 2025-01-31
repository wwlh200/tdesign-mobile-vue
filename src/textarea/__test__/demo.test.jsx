/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import autosizeVue from '@/textarea/demos/autosize.vue';
import baseVue from '@/textarea/demos/base.vue';
import eventsVue from '@/textarea/demos/events.vue';
import labelVue from '@/textarea/demos/label.vue';
import maxcharacterVue from '@/textarea/demos/maxcharacter.vue';
import maxlengthVue from '@/textarea/demos/maxlength.vue';
import mobileVue from '@/textarea/demos/mobile.vue';
import statusVue from '@/textarea/demos/status.vue';

const mapper = {
  autosizeVue,
  baseVue,
  eventsVue,
  labelVue,
  maxcharacterVue,
  maxlengthVue,
  mobileVue,
  statusVue,
};

describe('Textarea', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Textarea ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
