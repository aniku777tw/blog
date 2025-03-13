'use client';

import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { FiMenu, FiX } from 'react-icons/fi';
import { MdOutlineLanguage } from 'react-icons/md';
import Chill from '@/images/chill-guy.png';
import Dropdown from '@/components/common/Dropdown';
import { LOCALES } from '@/constants/locale';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();
  
  const localeOptions = [
    {
      label: 'English',
      onClick: () => router.replace({ pathname }, { locale: LOCALES.EN_US }),
    },
    {
      label: '繁體中文',
      onClick: () => router.replace({ pathname }, { locale: LOCALES.ZH_TW }),
    },
    {
      label: '简体中文',
      onClick: () => router.replace({ pathname }, { locale: LOCALES.ZH_CN }),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex text-xl font-bold">
              <Image src={Chill} alt="NickYang" width={32} height={32} />
              <div>{t('logo')}</div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            <Dropdown options={localeOptions}>
              <MdOutlineLanguage size={16} className="mr-1" />
              {t('locale')}
            </Dropdown>
            <Link href="/about" className="hover:underline">
              {t('about')}
            </Link>
            <Link href="/contact" className="hover:underline">
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="visible absolute right-4 transform cursor-pointer transition-all duration-300 peer-checked:invisible peer-checked:rotate-180 peer-checked:opacity-0 md:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </label>

          <label
            htmlFor="menu-toggle"
            className="invisible absolute right-4 transform cursor-pointer opacity-0 transition-all duration-300 peer-checked:visible peer-checked:rotate-180 peer-checked:opacity-100 md:hidden"
          >
            <FiX className="h-6 w-6" />
          </label>

          {/* Mobile Menu with Animation */}
          <div className="absolute top-16 right-0 left-0 max-h-0 w-full overflow-hidden bg-white shadow-lg transition-all duration-300 peer-checked:max-h-screen md:hidden">
            <div className="z-10 flex flex-col space-y-4 p-4">
              <Link href="/about" className="hover:underline">
                {t('about')}
              </Link>
              <Link href="/contact" className="hover:underline">
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
