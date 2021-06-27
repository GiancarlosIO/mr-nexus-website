import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo';

import { PostCard, Container, Header } from '@/components';

import { PostPreview } from '@/types';

type BlogListProps = {
  postList: PostPreview[];
};
const BlogList: React.FC<BlogListProps> = ({ postList }) => {
  const { t } = useTranslation('blog-list');

  return (
    <React.Fragment>
      <NextSeo
        title={t('SEO_TITLE')}
        description={t('SEO_DESCRIPTION')}
        canonical="https://mr-nexus.com/blog/"
        openGraph={{
          url: 'https://mr-nexus.com/blog/',
          title: t('SEO_TITLE'),
          description: t('SEO_DESCRIPTION'),
          images: [
            {
              url: '/favicons/apple-icon-120x120.png',
              width: 120,
              height: 120,
              alt: 'Mr N',
            },
          ],
          site_name: t('SEO_SITE_NAME'),
        }}
        twitter={{
          handle: '@handle',
          site: '@mr-nexus.com',
          cardType: 'summary_large_image',
        }}
      />
      <div className="text-gray-800 dark:text-white dark:bg-gray-800 overflow-x-hidden pb-20 min-h-screen">
        <Container>
          <Header />
          <div className="pt-4 lg:pt-20">
            <h1 className="font-bold text-center text-xl lg:text-3xl mb-4 lg:mb-0 text-yellow-500 dark:text-yellow-300">
              {t('MAIN_TITLE').toUpperCase()}:
            </h1>
            <div
              className="mx-auto"
              style={{
                maxWidth: 800,
              }}
            >
              <section>
                {postList.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </section>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BlogList;
