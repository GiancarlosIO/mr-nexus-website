import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getBlogListSource } from '../../mdx-utils';

export { default } from '@/pages/BlogList';

export const getStaticProps: GetStaticProps = async ({ locale: _locale }) => {
  const locale = _locale || 'es';

  const i18nProps = await serverSideTranslations(locale, [
    'common',
    'blog-list',
  ]);

  const postList = await getBlogListSource(locale);

  return {
    props: {
      postList,
      ...i18nProps,
    },
  };
};
