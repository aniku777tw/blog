'use client';

import Card from '@/components/common/Card';
import InteractiveBackground from '@/components/common/InteractiveBackground';
import { useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function Page() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('NotFoundPage');

  function handleClick() {
    router.replace({ pathname: '/' }, { locale });
  }

  return (
    <>
    <InteractiveBackground />
    <div className="container flex items-center justify-center">
      <Card>
        <div className="m-16 flex flex-col items-center justify-center">
          <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
          <p className="mb-8 text-lg">{t('description')}</p>
          <button
            onClick={handleClick}
            className="mt-4 rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
          >
            {t('button')}
          </button>
        </div>
      </Card>
    </div>
    </>
  );
}
