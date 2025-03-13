import { LOCALES } from '@/constants/locale';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: Object.values(LOCALES),
  localePrefix: 'always',
  defaultLocale: LOCALES.ZH_TW,
});
