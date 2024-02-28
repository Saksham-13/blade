import CommandIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<CommandIcon />', () => {
  it('should render CommandIcon', () => {
    const { container } = renderWithTheme(
      <CommandIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
