<template>
    <Story title="Components/MyInput">
        <my-input
            :label="state.label"
            :variant="state.variant"
            :prepend-inner-icon="state.prependInnerIcon" />

        <template #controls>
            <HstText
                v-model="state.variant"
                title="Variant" />
            <HstText
                v-model="state.label"
                title="Label" />
            <HstText
                v-model="state.prependInnerIcon"
                title="Prepend inner icon" />
        </template>
    </Story>
</template>

<script>
import { reactive } from 'vue';
import MyInput from '@/components/MyInput.vue';

export default {
    components : {
        MyInput,
    },
    setup() {
        const state = reactive({
            variant             : 'outlined',
            label               : 'password',
            prependInnerIcon    : 'mdi-lock',
        });

        return {
            state,
        };
    },
};

</script>
