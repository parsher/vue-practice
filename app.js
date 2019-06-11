
let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: {
            type: String,
            default: 'Alex',
            required: true
        },
        selectedPlan: {
            type: String,
        },
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan;
        }
    },
    // props: ['name', ...]
    methods: {
        select() {
            this.$emit('select', this.name);
        }
    }
 };
 

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-picker-item': PlanPickerItemComponent
    },
    data() {
        return {
            plans: ['sense', 'kk', 'toto'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

let BlogPostComponent = {
    props: ['id'],
    data() {
        return {
            blogPost: null
        }
    },
    created() {
        axios.get('api/posts/' + this.id).tehn(response => {
            this.blogPost = response.data
        });
    }
}


Vue.component('todo-item', {
    template: '#todo-item-template',
    data() {
        return {
            completed: true
        }
    }
});

Vue.component('page-layout', {
    template: '#page-layout-template'
})

Vue.component('click-counter', {
    template: '#click-counter-template',
    data() {
        return {
            count: 0
        }
    }
});


new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})