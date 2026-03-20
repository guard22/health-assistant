'use client';

import React from 'react';
import {useTranslations} from 'next-intl';

export function NavLinks() {
    const t = useTranslations('NavLinks');
    return (
        <div className="hidden items-center gap-4 mr-4 md:flex">
            <a
                href="https://qna.open-health.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
                {t('clinic')}
            </a>
            <a
                href="https://question.open-health.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
                {t('qa')}
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-red-500 text-white rounded-full leading-none">{t('new')}</span>
            </a>
            <a
                href="https://tally.so/r/3xl2GE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
                {t('feedback')}
            </a>
            <a
                href="https://github.com/OpenHealthForAll/open-health"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
                {t('github')}
            </a>
            <a
                href="https://www.reddit.com/r/AIDoctor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
                {t('reddit')}
            </a>
            <a
                href="https://discord.gg/B9K654g4wf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
            >
                {t('discord')}
            </a>
        </div>
    );
}