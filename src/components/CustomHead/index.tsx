import React from 'react'

import Head from 'next/head'

import { DEFAULT_META_TAGS } from '~/config/constants'

interface Props {
  description?: string
  title?: string
  metaTags?: any[]
  subUrl?: string
}

const CustomHead = ({
  description = DEFAULT_META_TAGS.description,
  title = DEFAULT_META_TAGS.title,
  metaTags = DEFAULT_META_TAGS.metaTags,
  subUrl = '',
}: Props) => (
  <Head>
    <title>{title || DEFAULT_META_TAGS.title}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
    />
    <meta
      name="description"
      content={description || DEFAULT_META_TAGS.description}
    />
    <meta itemProp="name" content={title || DEFAULT_META_TAGS.title} />
    <meta name="keywords" content={DEFAULT_META_TAGS.keywords} />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content={`${process.env.NEXT_PUBLIC_BASE_SITE_URL}${subUrl}`}
    />
    {metaTags.map((m) => (
      <meta key={m.name} property={m.name} content={m.content} />
    ))}
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
  </Head>
)

export default CustomHead
