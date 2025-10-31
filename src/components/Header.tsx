"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';

const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/register-product", label: "Register Product" },
];

export const Header: React.FC = () => {
    const pathname = usePathname();
    const t = useTranslations('header');
    const locale = useLocale();
    const otherLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '') || '/';

    return (
        <header className="bg-blue-600 text-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
                <h1 className="text-xl font-bold">{t('title')}</h1>
                <nav className="flex items-center gap-6">
                    <ul className="flex flex-wrap items-center gap-4 text-sm">
                        {routes.map((r) => {
                            const keyMap: Record<string, string> = {
                                Home: 'home',
                                Products: 'products',
                                'Register Product': 'registerProduct'
                            };
                            const targetHref = `/${locale}${r.href}`;
                            const active = pathname === targetHref || (r.href !== "/" && pathname.startsWith(targetHref));
                            return (
                                <li key={r.href}>
                                    <Link
                                        href={targetHref}
                                        className={`rounded px-3 py-2 transition-colors ${
                                            active ? "bg-white/20" : "hover:bg-white/10"
                                        }`}
                                    >
                                        {t(`links.${keyMap[r.label]}`)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="opacity-80">{t('language')}:</span>
                        <Link
                          href={`/${otherLocale}${pathWithoutLocale}`}
                          className="rounded px-2 py-1 bg-white/10 hover:bg-white/20"
                        >
                          {otherLocale === 'pt-BR' ? t('ptBR') : t('en')}
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};