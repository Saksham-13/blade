import BookmarkIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<BookmarkIcon />', () => {
  it('should render BookmarkIcon', () => {
    const { container } = renderWithTheme(
      <BookmarkIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
