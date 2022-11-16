export default {
    name: 'platform',
    title: 'Platform',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }
    ],
    preview: {
        select: {
            title: `name`,
        },
    },
}