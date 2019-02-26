Vue.component('todo-item', {
    template: '<li>{{ todo.text + " " + todo.id}}</li>',
    props: [
        'todo'
    ]
});

var app = new Vue({
    el: '#app',
    data: {
        items: [
            {id: 1, text: 'item'},
            {id: 2, text: 'item'},
            {id: 3, text: 'item'}
        ]
    },
    methods: {
        addItem: function () {
            let len = this.items.length;
            this.items.push({id: len + 1, text: 'new item'});
        },
        delItem: function () {
            this.items.pop();
        },
    }
});
