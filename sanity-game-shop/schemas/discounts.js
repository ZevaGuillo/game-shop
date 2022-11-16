export default {
    title: "Discounts",
    name: "discounts",
    type: "document",
    fields: [
        { 
            name: "title", 
            title: "Title",
            type: "string", 
        },
        { 
            name: "discount", 
            title: "Discount (%)",
            type: "number", 
        },
        {
            name: 'games',
            title: 'Games',
            type: 'array',
            // validation: (rule) => rule.required(),
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'game',
                    },
                },
            ],
        },
    ],
};
