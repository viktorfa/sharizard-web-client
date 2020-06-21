import { mount } from "@vue/test-utils";
import MessengerDesktopPreview from "@/components/MessengerDesktopPreview.vue";

describe("MessengerDesktopPreview", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(MessengerDesktopPreview);
    expect(wrapper.vm).toBeTruthy();
  });
});
