import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // La liste de toutes nos langues supportées
  locales: ['fr', 'en', 'ar'],
 
  // La langue par défaut si aucune n'est détectée
  defaultLocale: 'fr'
});
 
export const config = {
  // Matcher plus robuste qui ignore les dossiers internes de Next.js (_next), les images, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};