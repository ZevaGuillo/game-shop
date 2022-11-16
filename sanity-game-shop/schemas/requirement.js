export default {
    title: "Requirement",
    name: "requirement",
    type: "object",
    fields: [
        {
            name: "requirementBy",
            title: 'Requirement By', 
            type: 'reference',
            to: {
                type: 'platform',
            },
            validation: (rule) => rule.required(),

        },
        { 
            name: "requirements", 
            title: "Requirements",
            type: "string", 
        },
    ],
    preview: {
        select: {
            title: 'requirementBy.name'
        },
        prepare(selection) {
          return {
            title: `Requirement By ${selection.title}`,
          }
        }
      }
};
