const model = [
    {
        _id: 1,
        sentence: 'Bob like hamburers',
        questions: ["who likes hamburges?", "What does bob like?", "Does Bob like hotdogs?"]
    },
    {
        _id: 2,
        sentence: 'Bob like hamburers',
        questions: ["who likes hamburges?", "What does bob like?", "Does Bob like hotdogs?"]
    },
    {
        _id: 3,
        sentence: 'Bob like hamburers',
        questions: ["who likes hamburges?", "What does bob like?", "Does Bob like hotdogs?"]
    }
]
    model.map((item, index) => console.log(item.questions))