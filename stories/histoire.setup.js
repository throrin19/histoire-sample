import { defineSetupVue3 } from '@histoire/plugin-vue';

import { registerPlugins } from '@/plugins'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
    registerPlugins(app);
});
