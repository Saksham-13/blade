import React from 'react';
import Icon, { IconPropTypes } from '../../atoms/Icon';

function UploadCloud(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#prefix__clip0)" {...props}>
        <path d="M1.013 6.843A9 9 0 0117.48 8H18a6 6 0 012.869 11.268 1 1 0 01-.958-1.756A4 4 0 0018 10H16.74a1 1 0 01-.968-.75 7 7 0 10-12.023 6.388 1 1 0 11-1.498 1.324A9 9 0 011.013 6.843z" />
        <path d="M12.707 11.293a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L11 14.414V21a1 1 0 102 0v-6.586l2.293 2.293a1 1 0 001.414-1.414l-4-4z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Icon>
  );
}

UploadCloud.propTypes = IconPropTypes;

UploadCloud.defaultProps = {
  size: 'medium',
  fill: 'sapphire.800',
};

export default UploadCloud;
