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
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            options: {
                hotspot: true 
            }
        }
    ],
    preview: {
        select: {
            title: `name`,
        },
    },
}