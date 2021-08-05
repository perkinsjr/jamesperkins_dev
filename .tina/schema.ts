import { defineSchema } from '@tinacms/cli';

const defaultPost = {
    author: 'James Perkins',
    date: '08/01/2021',
    title: 'A New Blog Post',
    excerpt: 'A new excerpt',
    hero_image:
        'https://res.cloudinary.com/dub20ptvt/image/upload/v1626563323/Adding_comments_iswtsn.png',
    tags: ['Tutorial', 'Next'],
    published: false,
    body: 'A super long body'
};

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
                    ui: {
                        defaultItem: defaultPost.author
                    }
                },
                {
                    type: 'datetime',
                    dateFormat: 'MM/DD/YY',
                    label: 'Date',
                    name: 'date',
                    ui: {
                        default: defaultPost.date
                    }
                },
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                    ui: {
                        default: defaultPost.title
                    }
                },
                {
                    type: 'string',
                    label: 'Excerpt',
                    name: 'excerpt',
                    ui: {
                        component: 'textarea',
                        default: defaultPost.excerpt
                    }
                },
                {
                    type: 'image',
                    label: 'Image',
                    name: 'hero_image',
                    ui: {
                        default: defaultPost.hero_image
                    }
                },
                {
                    label: 'Tags',
                    name: 'tags',
                    type: 'string',
                    list: true,
                    ui: {
                        default: defaultPost.tags
                    }
                },
                {
                    type: 'boolean',
                    label: 'Published',
                    name: 'published',
                    ui: {
                        default: defaultPost.published
                    }
                },
                {
                    type: 'string',
                    label: 'Blog Post Body',
                    name: 'body',
                    isBody: true,
                    ui: {
                        component: 'markdown',
                        default: defaultPost.body
                    }
                }
            ]
        }
    ]
});
