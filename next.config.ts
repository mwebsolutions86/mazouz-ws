import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path'; // On importe le module path pour les chemins absolus

// Utilisation de path.join pour garantir le chemin correct
const i18nConfigPath = path.join(__dirname, 'i18n/request.ts');

const withNextIntl = createNextIntlPlugin(i18nConfigPath);

const nextConfig: NextConfig = {
  // Configs supplémentaires ici (si tu en as)
};

export default withNextIntl(nextConfig);