'use client';

import Card from '@/components/common/Card';
import { useTranslations } from 'next-intl';
import Chill from '@/images/chill-guy.png';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="container flex items-center justify-center">
      <Card>
        <div className="m-16 flex flex-col items-center justify-center">
          <h1 className="mb-8  text-4xl font-bold">{t('title')}</h1>
          <Image src={Chill} alt="NickYang" width={200} height={200} />
        </div>
      </Card>
    </div>
  );
}
