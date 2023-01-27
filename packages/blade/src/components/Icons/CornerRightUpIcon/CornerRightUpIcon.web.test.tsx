import CornerRightUpIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<CornerRightUpIcon />', () => {
  it('should render CornerRightUpIcon', () => {
    const { container } = renderWithTheme(
      <CornerRightUpIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});