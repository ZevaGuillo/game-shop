export default{
    name:'game',
    type:'document',
    title: 'Games',
    groups: [
        {
            name: 'media',
            title: 'Media',
        },
    ],
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (rule) => rule.required(),
        },
        {
            title: 'is Featured?',
            name: 'featured',
            type: 'boolean'
        },
        {
            name: 'genders',
            title: 'Genders',
            type: 'array',
            validation: (rule) => rule.required(),
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'gender',
                    },
                },
            ],
        },
        {
            name: 'platforms',
            title: 'Platforms',
            type: 'array',
            validation: (rule) => rule.required(),
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'platform',
                    },
                },
            ],
        },
        {
            name: 'Requirements',
            title: 'Requirements',
            type: 'array',
            hidden: ({ parent }) => parent.platforms.length === 0 ,
            of: [
                {
                    title: 'Requirements',
                    name: 'requirements',
                    type: 'requirement'      
                }
            ]
        },
        // Media

        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true 
            },
            group: 'media'
        }
    ]
}