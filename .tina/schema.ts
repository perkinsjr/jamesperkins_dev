import { defineSchema } from '@tinacms/cli';

export default defineSchema({
    collections: [
        {
            label: 'Blog Posts',
            name: 'posts',
            path: 'data/post',
            fields: [
                {
                    type: 'string',
                    label: 'Author',
                    name: 'author',
                },
                {
                    type: 'datetime',
                    dateFormat: 'MM/DD/YY',
                    label: 'Date',
                    name: 'date',
                },
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                },
                {
                    type: 'string',
                    label: 'Excerpt',
                    name: 'excerpt',
                    ui: {
                        component: 'textarea',
                    }
                },
                {
                    type: 'image',
                    label: 'Image',
                    name: 'hero_image',
                },
                {
                    label: 'Tags',
                    name: 'tags',
                    type: 'string',
                    list: true,
                },
                {
                    type: 'boolean',
                    label: 'Published',
                    name: 'published',
                },
                {
                    type: 'string',
                    label: 'Blog Post Body',
                    name: 'body',
                    isBody: true,
                    ui: {
                        component: 'markdown',
                    }
                }
            ]
        }
    ]
});
