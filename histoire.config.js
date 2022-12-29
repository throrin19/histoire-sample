import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
    setupFile : '/stories/histoire.setup.js',
    plugins   : [
        HstVue(),
    ],
});
