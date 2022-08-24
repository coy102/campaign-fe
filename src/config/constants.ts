const META = {
  image: '',
  rootUrl: 'https://example.com',
  title: 'Campaign list',
  description: 'Default description',
}

export const META_TAGS = {
  ...META,
  metaTags: [
    { name: 'og:title', content: META.title },
    { name: 'og:url', content: 'https://example.com' },
    { name: 'og:image', content: '' },
    {
      name: 'og:site_name',
      content: META.title,
    },
  ],
}
