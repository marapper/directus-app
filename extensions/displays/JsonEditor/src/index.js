import DisplayComponent from './display.vue';

export default {
    id: 'JsonEditor',
    name: 'Visual Editor',
    description: 'This is my custom display!',
    icon: 'box',
    handler: DisplayComponent,
    // или просто сразу функцией
    // handler: function (value) {
    //     return value.toLowerCase();
    // },
    types: ['string'],
};
