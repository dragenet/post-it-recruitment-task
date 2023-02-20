import { BaseLayout } from '~/components/templates/BaseLayout';
import { UserCardsGrid } from '~/components/organisms/UserCardsGrid/';

export const HomePageTemplate = () => (
  <BaseLayout>
    <UserCardsGrid />
  </BaseLayout>
);
