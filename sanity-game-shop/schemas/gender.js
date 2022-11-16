export default {
    name: 'gender',
    title: 'Gender',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }
    ]
}