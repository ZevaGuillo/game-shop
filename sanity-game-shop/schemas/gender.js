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
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source: 'name'
            }
        },
        {
            name: 'background',
            type: 'image',
            title: 'Background',
            options: {
                hotspot: true 
            },
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Icon',
            options: {
                hotspot: true 
            },
        }
    ]
}