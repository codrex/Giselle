const accountSection = {
  title: 'account',
  links: [{ title: 'career', to: 'account/career' }, { title: 'personal', to: 'account/personal' }],
};

const manageSection = {
  title: 'manage',
  links: [{ title: 'password', to: 'manage/password' }, { title: 'email', to: 'manage/email' }],
};

export const SIDE_BAR_SECTIONS = [manageSection, accountSection];
