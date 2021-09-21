import {Img, useVideoConfig} from 'remotion';

interface Props {
	imageSource: string;
	imageAlt: string;
}

const FRAME_BORDER = 100;

export const User: React.FC<Props> = ({imageSource, imageAlt}) => {
	const config = useVideoConfig();

  return (
	<div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: config.width,
      height: config.height,
    }}
	>
		<Img style={{ width: config.width - FRAME_BORDER, height: config.height - FRAME_BORDER}} src={imageSource} alt={imageAlt} />
	</div>
	);
};
